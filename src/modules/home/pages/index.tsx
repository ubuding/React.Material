import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const { PI, cos, sin, abs, floor, round, random } = Math;
  const TO_RAD = PI / 180;
  const rand = (n: number) => n * random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) => {
    const hm = 0.5 * m;
    return abs(((t + hm) % m) - hm) / hm;
  };

  let canvas: any;
  let ctx: any;
  let particles: any;
  let hover: any;
  let mouse: any;
  let tick: any;

  const setup = () => {
    canvas = {
      a: document.createElement("canvas"),
      b: document.createElement("canvas"),
    };

    ctx = {
      a: canvas.a.getContext("2d"),
      b: canvas.b.getContext("2d"),
    };

    canvas.b.style = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`;

    const body = document.getElementById("home-module");
    body?.appendChild(canvas.b);
    particles = [];
    hover = false;
    mouse = { x: 0, y: 0 };
    tick = 0;
    resize();
    draw();
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", resize);
    () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function resize() {
    canvas.a.width = canvas.b.width = window.innerWidth;
    canvas.a.height = canvas.b.height = window.innerHeight;
  }

  const getParticle = (x: number, y: number) => {
    return {
      position: { x, y },
      size: 2 + rand(20),
      speed: 5 + rand(5),
      direction: floor(rand(6)) * 60 * TO_RAD,
      turnDirection: randRange(1) * 0.1,
      directionChangeRate: 20 + round(rand(10)),
      hue: rand(90) + 180,
      ttl: 100 + rand(50),
      life: 0,
      velocity: 0,
      destroy: false,
      update() {
        this.destroy = this.life++ > this.ttl;
        this.direction +=
          this.life % this.directionChangeRate === 0
            ? round(randRange(0.5)) * 60 * TO_RAD
            : 0;
        this.velocity = fadeInOut(this.life, this.ttl) * this.speed;
        this.position.x += cos(this.direction) * this.velocity;
        this.position.y += sin(this.direction) * this.velocity;
      },
      draw() {
        this.update();

        ctx.a.beginPath();
        ctx.a.lineWidth = 2;
        ctx.a.strokeStyle = `hsla(${this.hue},100%,50%,${fadeInOut(this.life, this.ttl)})`;
        ctx.a.strokeRect(
          this.position.x - 0.5 * this.size,
          this.position.y - 0.5 * this.size,
          this.size,
          this.size,
        );
        ctx.a.closePath();
      },
    };
  };

  function draw() {
    tick++;
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    if (!hover) {
      mouse.x = window.innerWidth * 0.5 + cos(tick * 0.05) * 200;
      mouse.y = window.innerHeight * 0.5 + sin(tick * 0.05) * 200;
    }
    tick % 2 === 0 && particles.push(getParticle(mouse.x, mouse.y));
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].draw();
      if (particles[i].destroy) particles.splice(i, 1);
    }

    ctx.b.fillStyle = "rgba(0,0,0,0.05)";
    ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);

    ctx.b.save();
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.filter = "blur(8px)";
    ctx.b.drawImage(canvas.a, 0, 0, canvas.b.width, canvas.b.height);
    ctx.b.restore();

    ctx.b.save();
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0, canvas.b.width, canvas.b.height);
    ctx.b.restore();

    window.requestAnimationFrame(draw);
  }

  return (
    <div className="module home-module" id="home-module">
      <div className="content">
        <div className="title" onClick={() => navigate("/ubuding")}>
          REACT.MATERIAL
        </div>
      </div>
    </div>
  );
}
