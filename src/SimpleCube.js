import React from 'react';
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei';
import { Physics, usePlane, useBox } from 'use-cannon';
import './style-threejs.scss';

function Box() {
  const [ref, api] = useBox( () => ({ mass: 1, position: [ 0, 10, 0 ] }) );
  return (
    <mesh onClick = { () => { api.velocity.set( 0, 2, 0 ) }} ref = { ref } position = {[ 0, 2, 0 ] }>
      <boxBufferGeometry  attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  );
}

function Plane( props ) {
  const [ref] = usePlane(() => ({ rotation: [ -Math.PI / 2, 0, 0 ] }));
  return (
    <mesh rotation = {[ -Math.PI / 2, 0, 0 ]}>
      <planeBufferGeometry attach = 'geometry' args = {[ 100, 100 ]} />
      <meshLambertMaterial attach = 'material' color = 'lightblue' />
    </mesh>
  );
}

function SimpleCube() {

  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity = { .7 } />
        <spotLight position = {[ 10, 15, 10 ]} angle = { .3 } />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </>
  );
}

export default SimpleCube;
