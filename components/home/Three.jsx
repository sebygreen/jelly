"use client";

import fragment from "!!raw-loader!@/shaders/fragment.glsl";
import vertex from "!!raw-loader!@/shaders/vertex.glsl";
import styles from "@/style/Three.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function Plane() {
    const mesh = useRef(null);
    let time = 0;

    useFrame(() => {
        time += 0.5;
        mesh.current.material.uniforms.time.value = time / 10000;
    });

    const extensions = {
        derivatives: "#extension GL_OS_standard_derivatives : enable",
    };

    const uniforms = useMemo(() => {
        let colors = [ "#3AE8D7","#01614B", "#174240", "#279C80"];
        //let colors = ["#5E7692", "#0EBDED", "#7D0EED", "#0E30ED"];
        //let colors = ["#2F07F0", "#ff333d", "#90e0ff", "#ffcb57"];
        colors = colors.map((color) => new THREE.Color(color));
        return {
            time: { value: 0 },
            uColor: { value: colors },
            resolution: { value: new THREE.Vector4() },
        };
    }, []);

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[1, 1, 300, 300]} />
            <shaderMaterial
                extensions={extensions}
                side={THREE.DoubleSide}
                uniforms={uniforms}
                vertexShader={vertex}
                fragmentShader={fragment}
            />
        </mesh>
    );
}

export default function Three() {
    return (
        <div className={styles.container}>
            <Canvas
                camera={{
                    fov: 20,
                    near: 0.1,
                    far: 100,
                    position: [0, -3, 2],
                    zoom: 3.5,
                }}
            >
                <ambientLight color={0xffffff} intensity={0.5} />
                <directionalLight color={0xffffff} intensity={0.5} />
                <Plane />
            </Canvas>
        </div>
    );
}
