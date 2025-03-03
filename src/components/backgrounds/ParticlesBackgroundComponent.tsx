import React, { useEffect, useRef } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import CodeBlock from '../common/CodeBlock';

const ParticlesBackgroundComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  const usageCode = `import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = \`rgba(\${Math.floor(Math.random() * 100 + 155)}, \${Math.floor(Math.random() * 100 + 155)}, \${Math.floor(Math.random() * 255)}, \${Math.random() * 0.5 + 0.5})\`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = \`rgba(255, 255, 255, \${opacity * 0.2})\`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full bg-black"
    />
  );
};

export default ParticlesBackground;`;

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Particles Background</h1>
            <p className="text-gray-400 mb-8">An interactive particle network background using HTML Canvas.</p>
            
            <div className="bg-gray-900 rounded-lg p-8 mb-8 h-80 relative overflow-hidden">
              <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full"
              />
              <div className="relative z-10 h-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center">
                  Interactive Particles Background
                </h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Usage</h2>
                <CodeBlock code={usageCode} language="tsx" />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    The particles background uses HTML Canvas to create an animated network of particles:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-4">
                    <li>A canvas element is created and sized to fill its container</li>
                    <li>Particles are generated with random positions, sizes, and velocities</li>
                    <li>Each particle moves independently across the canvas</li>
                    <li>When particles get close to each other, lines are drawn between them</li>
                    <li>The opacity of the lines depends on the distance between particles</li>
                    <li>The animation loop continuously updates and redraws the particles</li>
                  </ol>
                  <p>
                    This creates a dynamic, interactive background that responds to the canvas size.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Customization</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Parameter</th>
                        <th className="border border-gray-700 px-4 py-2 text-left text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">particleCount</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Number of particles to generate (affects performance)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">maxDistance</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Maximum distance for drawing lines between particles</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">particle.size</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Size range for particles</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">particle.speed</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Speed range for particles</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">particle.color</td>
                        <td className="border border-gray-700 px-4 py-2 text-gray-300">Color generation for particles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Performance Considerations</h2>
                <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
                  <p className="mb-4">
                    When using this component, keep these performance tips in mind:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reduce particleCount for better performance on mobile devices</li>
                    <li>Consider using requestAnimationFrame throttling for lower-end devices</li>
                    <li>The connection algorithm is O(n²), so particle count has a significant impact</li>
                    <li>Consider disabling the effect or reducing particles based on device capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ParticlesBackgroundComponent;