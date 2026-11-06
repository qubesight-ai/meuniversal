import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import atmos from "@/assets/earth_atmos_2048.jpg.asset.json";
import normal from "@/assets/earth_normal_2048.jpg.asset.json";
import specular from "@/assets/earth_specular_2048.jpg.asset.json";
import clouds from "@/assets/earth_clouds_1024.png.asset.json";

const SPIN = 0.025; // rad/s — extremely slow rotation

function Earth({ reduced }: { reduced: boolean }) {
  const earth = useRef<THREE.Mesh>(null);
  const cloud = useRef<THREE.Mesh>(null);
  const [map, nrm, spec, cl] = useLoader(THREE.TextureLoader, [atmos.url, normal.url, specular.url, clouds.url]);
  map.colorSpace = THREE.SRGBColorSpace;
  cl.colorSpace = THREE.SRGBColorSpace;
  useFrame((_, d) => {
    if (reduced) return;
    const dt = Math.min(d, 0.05);
    if (earth.current) earth.current.rotation.y += SPIN * dt;
    if (cloud.current) cloud.current.rotation.y += SPIN * 1.25 * dt;
  });
  return (
    <group rotation={[0.1, -1.2, 0.41]}>
      <mesh ref={earth}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshPhongMaterial map={map} normalMap={nrm} specularMap={spec} specular={new THREE.Color("#6b7f99")} shininess={18} />
      </mesh>
      <mesh ref={cloud} scale={1.008}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshPhongMaterial map={cl} transparent opacity={0.55} depthWrite={false} />
      </mesh>
      <mesh scale={1.06}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          transparent
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={`varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `}
          fragmentShader={`varying vec3 vN; void main(){ float i = pow(0.62 - dot(vN, vec3(0.0,0.0,1.0)), 3.0); gl_FragColor = vec4(0.45,0.66,0.95,1.0)*i; }`}
        />
      </mesh>
    </group>
  );
}

export default function EarthGlobe({ reduced, onReady }: { reduced: boolean; onReady: () => void }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 3.1], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={reduced ? "demand" : "always"}
      onCreated={() => onReady()}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 1.5, 5]} intensity={2.2} color="#fff6e8" />
      <Earth reduced={reduced} />
    </Canvas>
  );
}
