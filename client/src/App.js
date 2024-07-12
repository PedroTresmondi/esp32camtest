import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [camera1Ip, setCamera1Ip] = useState('192.168.0.115');
  const [camera2Ip, setCamera2Ip] = useState('192.168.0.224');

  useEffect(() => {
    // Teste para ver se os IPs são válidos e estão acessíveis
    const testCamera1 = new Image();
    testCamera1.src = `http://${camera1Ip}/stream`;
    testCamera1.onload = () => console.log('Camera 1 acessível');
    testCamera1.onerror = () => console.error('Camera 1 não acessível', testCamera1.src);

    const testCamera2 = new Image();
    testCamera2.src = `http://${camera2Ip}/stream`;
    testCamera2.onload = () => console.log('Camera 2 acessível');
    testCamera2.onerror = () => console.error('Camera 2 não acessível', testCamera2.src);
  }, [camera1Ip, camera2Ip]);

  return (
    <div className="App">
      <h1>Dual Camera Feed</h1>
      <div className="camera-container">
        <div className="camera">
          <h2>Camera 1</h2>
          <img src={`http://${camera1Ip}/stream`} alt="Camera 1 Feed" />
        </div>
        <div className="camera">
          <h2>Camera 2</h2>
          <img src={`http://${camera2Ip}/stream`} alt="Camera 2 Feed" />
        </div>
      </div>
    </div>
  );
};

export default App;
