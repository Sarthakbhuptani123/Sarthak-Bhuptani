import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';

function GeometricShape({ position, color, speed, type }) {
    const mesh = useRef();

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * speed * 0.5;
            mesh.current.rotation.y += delta * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh} position={position}>
                {type === 'torus' && <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />}
                {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
                {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}

                {/* Wireframe Aesthetic for "Tech/Circuit" Vibe */}
                <meshStandardMaterial
                    color={color}
                    wireframe
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </Float>
    );
}

const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas gl={{ alpha: true, antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />

                {/* Ambient Light */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                {/* Top Right - Purple Knot */}
                <GeometricShape
                    position={[6, 3, -2]}
                    color="#a855f7"
                    speed={0.4}
                    type="torus"
                />

                {/* Bottom Left - Cyan Icosahedron */}
                <GeometricShape
                    position={[-6, -3, -1]}
                    color="#06b6d4"
                    speed={0.3}
                    type="icosahedron"
                />

                {/* Center-ish - subtle floating bits */}
                <GeometricShape
                    position={[-4, 2, -5]}
                    color="#3b82f6"
                    speed={0.2}
                    type="octahedron"
                />

                <GeometricShape
                    position={[5, -2, -6]}
                    color="#14b8a6"
                    speed={0.25}
                    type="octahedron"
                />

                {/* Subtle background stars/particles to add depth */}
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default FloatingShapes;
