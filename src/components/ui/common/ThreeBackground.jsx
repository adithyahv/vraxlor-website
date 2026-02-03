import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff'); // White background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // --- Rainbow Prism Arc ---
    // Using a Torus segment to create the arc
    const geometry = new THREE.TorusGeometry(12, 3, 16, 100, Math.PI / 1.5);

    // Custom Shader for Rainbow Gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPos;
        
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPos;
        
        vec3 hsb2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          rgb = rgb * rgb * (3.0 - 2.0 * rgb);
          return c.z * mix(vec3(1.0), rgb, c.y);
        }

        void main() {
          // Rainbow Gradient along the tube (vUv.x)
          // Shift colors over time
          float hue = vUv.x * 0.8 + uTime * 0.1; 
          vec3 color = hsb2rgb(vec3(hue, 0.8, 1.0));
          
          // Soft edges (Alpha gradient along the tube width vUv.y)
          float alpha = sin(vUv.y * 3.14159);
          alpha = pow(alpha, 2.0); // Sharper falloff
          
          // Additive glow effect
          gl_FragColor = vec4(color, alpha * 0.6);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, // Light-like blending
      depthWrite: false
    });

    const prismMesh = new THREE.Mesh(geometry, material);

    // Position the arc to match the reference (diagonal/overhead)
    prismMesh.position.set(0, 0, 0);
    prismMesh.rotation.z = Math.PI / 4; // Diagonal tilt
    prismMesh.rotation.x = Math.PI / 6; // Slight tilt towards camera

    scene.add(prismMesh);

    // Mouse interaction (Subtle Parallax)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;

      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      // Gentle floating motion
      prismMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.5;
      prismMesh.rotation.z = Math.PI / 4 + Math.sin(elapsedTime * 0.2) * 0.05;

      // Parallax
      prismMesh.rotation.x = Math.PI / 6 + targetY * 0.1;
      prismMesh.rotation.y = targetX * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        background: '#ffffff', // White background
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeBackground;
