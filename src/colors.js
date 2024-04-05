import * as THREE from 'three';




export const materialBody = new THREE.MeshStandardMaterial({
    color: 0xE5DBD1,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin: 'round' //ignored by WebGLRenderer
});
export const materialWheel = new THREE.MeshStandardMaterial({
    color: 0x5B5B5B,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin: 'round' //ignored by WebGLRenderer
});
export const materialRotor = new THREE.MeshStandardMaterial({
    color: 0x5B5B5B,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin: 'round' //ignored by WebGLRenderer
});

export const materialDoor = new THREE.MeshStandardMaterial({
    color: 0xAB7878,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin: 'round' //ignored by WebGLRenderer
});

export const materialBody2 = new THREE.MeshStandardMaterial({
    color: 0x5B5B5B,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin: 'round' //ignored by WebGLRenderer
});
export const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, // White color
    transparent: true,
    opacity: 0.5, // Adjust opacity for transparency
    refractionRatio: 0.98, // Adjust refraction ratio for realism
  });