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
        let colors = ["#a960ee", "#ff333d", "#90e0ff", "#ffcb57"];
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

class Sketch {
    constructor(options) {
        this.time = 0;
        this.container = options.dom;

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            20,
            this.width / this.height,
            0.1,
            100,
        );
        this.camera.position.set(0, -3, 2);
        // this.camera.zoom = 3.5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement,
        );

        this.setupResize();
        this.resize();
        this.addLights();
        this.addObjects();
        this.render();
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);

        this.camera.aspect = this.width / this.height;

        this.camera.updateProjectionMatrix();
    }

    addLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambient);

        const directional = new THREE.DirectionalLight(0xffffff, 0.5);
        this.scene.add(directional);
    }

    addObjects() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 300, 300);
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OS_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0 },
                uColor: { value: colors },
                resolution: { value: new THREE.Vector4() },
            },
            // wireframe: true,
            // transparent: true,
            vertexShader: vertex,
            fragmentShader: fragment,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.mesh);
    }

    render() {
        this.time += 0.5;
        // this.mesh.rotation.x = this.time / 100;
        // this.mesh.rotation.y = this.time / 100;
        this.material.uniforms.time.value = this.time / 10000;

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}
