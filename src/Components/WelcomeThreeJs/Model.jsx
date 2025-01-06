// import React, { useRef, useEffect } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const Model = ({ mousePosition }) => {
//   const meshRef = useRef();
//   const gltf = useLoader(GLTFLoader, '/buildings.glb');  
//   console.log("let's go voir notre mesh: " + gltf);

//   // pour la rotation en fonction de la position de la mouse
//   useEffect(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = mousePosition.x * Math.PI; // rotation sur axe Y
//       meshRef.current.rotation.x = mousePosition.y * Math.PI / 2; // rotation sur axe X
//     }
//   }, [mousePosition]);

//   return <primitive object={gltf.scene} ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]} />;
// };

// export default Model;





import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './WelcomeThree.css'

const Model = ({ mousePosition, onClick }) => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/buildings.glb');  

  // Rotation du modèle en fonction de la position de la souris
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePosition.x * Math.PI; // Rotation sur axe Y
      meshRef.current.rotation.x = mousePosition.y * Math.PI / 2; // Rotation sur axe X
    }
  }, [mousePosition]);

  return (
    <primitive 
      object={gltf.scene} 
      ref={meshRef} 
      scale={[1, 1, 1]} 
      position={[0, 0, 0]} 
      onClick={onClick}  // Ajouter l'événement de clic
      className="mesh-hover"
    />
  );
};

export default Model;
