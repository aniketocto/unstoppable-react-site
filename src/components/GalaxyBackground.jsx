// GalaxyBackground.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    containerRef.current.appendChild(renderer.domElement);

    // --- Galaxy stars ---
    const starCount = 3500;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorOptions = [
      new THREE.Color(0xffffff), // white
      new THREE.Color(0xadd8e6), // light blue
      new THREE.Color(0x87ceeb), // sky blue
      new THREE.Color(0x9370db), // medium purple
      new THREE.Color(0x8a2be2), // blue violet
      new THREE.Color(0xff69b4), // hot pink
      new THREE.Color(0xff4500), // orange-red (rare star glow)
      new THREE.Color(0x00ffff), // cyan
    ];

    for (let i = 0; i < starCount; i++) {
      // ✅ spread stars evenly in a big cube, not clustered in center
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const chosenColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // --- Animation loop ---
    function animate() {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      renderer.render(scene, camera);
    }
    animate();

    // --- Resize handler ---
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      // ✅ CHANGE: Remove from container ref instead of document.body
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
