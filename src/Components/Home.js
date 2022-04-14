import React from 'react'
import ContainerA from './ContainerA';
import ContainerB from './ContainerB';

const Home = () => {
  const mystyle = {
    height: "100%",
    fontFamily: "Arial",
    display: "flex",
    padding: '20px'
  };
  return (
    <div style={mystyle}>
      <ContainerA />
      <ContainerB />
    </div>
  )
}

export default Home;