import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Plane from './Plane'
import Sphere from './Sphere'
import { OrbitControls } from '@react-three/drei';

function Model() {

    return (
        <>
            <div className="App h-screen w-screen bg-gray-700">
                <Canvas shadowMap camera={{ position: [-5, 1.5, 10], fov: 30 }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.6} />
                    <directionalLight
                        position={[0, 10, 0]}
                        intensity={1}
                        castShadow={true}
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                    />
                    <spotLight position={[10, 15, 10]} angle={0.3} color='white' />
                    <Sphere />
                    <Plane />
                </Canvas>
            </div>
        </>
    )
}

export default Model;