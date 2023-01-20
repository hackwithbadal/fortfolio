import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import EarthImg from '../../assets/Images/earth.jpg';
import ReactImg from '../../assets/Images/ReactLogo.png'
import Js from '../../assets/Images/ScriptLogo.png'
import HtmlLogo from '../../assets/Images/HTML.png'
import CssLogo from '../../assets/Images/css.jpg'
import LinuxLogo from '../../assets/Images/linuxLogo.png'
import MantineUI from '../../assets/Images/MantineLogo.png'
import MaterialUILogo from '../../assets/Images/MaterialUILogo.png'
import NodeLogo from '../../assets/Images/nodejsLogo.png'
import Tailwind from '../../assets/Images/tailwindLogo.png'
import Box from './Box';

export default function Sphere() {
  const CircleRef = useRef(null)
  const base = new THREE.TextureLoader().load(EarthImg)
  useFrame(() => {
    // CircleRef.current.rotation.x += 0.0040;
    CircleRef.current.rotation.y += 0.0040;
    // CircleRef.current.rotation.z += 0.0020;
  })
  return (
    <mesh position={[2, 0, 0]} ref={CircleRef} rotation={[0, 0, 0]} castShadow={true}>
      <sphereGeometry attach='geometry' args={[0, 32, 32]}/>
      <meshStandardMaterial attach='material' color='white' map={base} />
      <Box cords={[2.5,0,0]} picture={HtmlLogo} />
      <Box cords={[0,0,2.5]} picture={CssLogo} />
      <Box cords={[-2.5,0,0]} picture={Js} />
      <Box cords={[0,0,-2.5]} picture={Tailwind} />
      <Box cords={[2,0,-2]} picture={MaterialUILogo} />
      <Box cords={[-2,0,2]} picture={MantineUI} />
      <Box cords={[-2,0,-2]} picture={ReactImg} />
      <Box cords={[2,0,2]} picture={NodeLogo} />
    </mesh>
  )
}
