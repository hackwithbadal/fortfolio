import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

export default function Box(props) {
    const { cords, picture} = props;
    const boxref = useRef(null);
    const base = new THREE.TextureLoader().load(picture)
    useFrame(()=>{
        boxref.current.rotation.y -= 0.005;
    })
    return (
        <mesh castShadow={true} position={cords} ref={boxref}>
            <boxBufferGeometry attach='geometry' args={[1,1,1]} />
            <meshStandardMaterial map={base} />
        </mesh>
    )
}
