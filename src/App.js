import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Views/Home/Home';
import Recipe from './Views/Recipe/Recipe';
import Login from './Views/Login/Login';
import AddRecipe from './Views/AddRecipe/AddRecipe'

function App() {
  /*return (
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
  );*/

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route path='/recipe/:name' component={Recipe} />
        <Route path='/add-recipe/' component={AddRecipe} />
      </Switch>
    </Router>
  );
}

export default App;
