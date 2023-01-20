import { MeshRefractionMaterial } from '@react-three/drei';
import React from 'react';
export default function Plane() {
    return (
        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry attach='geometry' args={[20, 20]} />
            <shadowMaterial attach='material' />
        </mesh>
    )
}
