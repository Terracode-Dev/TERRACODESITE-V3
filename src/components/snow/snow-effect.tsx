
import React, { useEffect, useRef } from 'react';



 interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  opacity: number;
}

//  interface ChristmasWish {
//   recipient: string;
//   theme: string;
//   generatedText: string;
// }


const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSnowflakes();
    };

    const initSnowflakes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 20000);
      const flakes: Snowflake[] = [];
      for (let i = 0; i < count; i++) {
        flakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          wind: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      snowflakesRef.current = flakes;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate global interactive wind based on mouse position relative to center
      const centerX = canvas.width / 2;
      const mouseX = mouseRef.current.x;
      let interactiveWind = 0;
      
      if (mouseX !== -1000) {
        // If mouse is at far right, normalized value is ~1. 
        // We want (centerX - mouseX) so it goes negative (left) when mouse is right.
        interactiveWind = (centerX - mouseX) / centerX * 1.5; 
      }

      snowflakesRef.current.forEach((flake) => {
        // Global Drift Effect (Mouse right -> Snow left, Mouse left -> Snow right)
        // Note: Local "Push" effect has been removed as per user request.
        flake.x += flake.wind + interactiveWind;
        flake.y += flake.speed;

        // Draw snowflake
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        // Boundary checks with wrapping
        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        } else if (flake.y < -flake.radius * 2) {
          flake.y = canvas.height;
        }

        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-100"
      style={{ filter: 'blur(0.4px)' }}
    />
  );
};

export default Snowfall;
