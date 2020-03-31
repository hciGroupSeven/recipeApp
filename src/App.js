import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Container fluid>
          <Row>
            <Col sm={2}>Recipe App</Col>
            <Col sm={10}></Col>
          </Row>
        </Container>
      </header>
      <Row>
        <Col sm={3} className='leftCol'>
          col 1
        </Col>
        <Col sm={6} className='midCol'>
          col 2
        </Col>
        <Col sm={3} className='rightCol'>
          col 3
        </Col>
      </Row>
    </div>
  );
}

export default App;
