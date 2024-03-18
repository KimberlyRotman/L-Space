function fase1(){
    window.location.href = "./l-space-fase1.html";
 }




const scoreEl = document.querySelector('#scoreEl');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.height = innerHeight;
canvas.width = innerWidth;
                             



class Particle{
    constructor({position, velocity, radius, color, fades}){
        this.position = position;
        this.velocity = velocity;

        this.radius = radius;
        this.color = color;
        this.opacity = 1;

        this.fades = fades
    }

    draw(){
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore()
    };

    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.fades) this.opacity -= 0.01;
    };
}


const particles = [];


for (let i = 0; i < 100; i++){
    particles.push(new Particle({
        position: {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
        },
        velocity: {
            x: 0,
            y: 0.5
        },
        radius: Math.random() * 2,
        color: 'white'
    }))}


    function animate(){
        requestAnimationFrame(animate);
        c.fillStyle = 'black';
        c.fillRect(0, 0, canvas.width, canvas.height);
    
        particles.forEach((particle, i) => {
    
            if(particle.position.y - particle.radius >= canvas.height){
                particle.position.x = Math.random() * canvas.width
                particle.position.y = -particle.radius
            }
    
    
            if (particle.opacity <= 0){
                setTimeout(() =>{
                    particles.splice(i, 1);
                },0)    
            }else{
                particle.update();
            }
        })}



    animate();