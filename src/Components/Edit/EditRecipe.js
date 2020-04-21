import React from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import { faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.recipe.name || '',
      time: props.recipe.time || '',
      difficulty: props.recipe.difficulty || '',
      calories: props.recipe.calories || '',
      servings: props.recipe.servings || '',
      image: props.recipe.image || '',
      description: props.recipe.description || '',
      ingredients: props.recipe.ingredients || '',
      directions: props.recipe.directions || '',
      notes: props.recipe.notes || '',
    };
  }

  saveData = () => {
    this.props.update(this.state);
  };

  render() {
    const ingredients = this.state.ingredients.map((element, key) => (
      <li>
        <Form.Control
          as='textarea'
          rows='3'
          type='text'
          value={element}
          onChange={(event) => {
            let temp = this.state.ingredients;
            temp[key] = event.target.value;
            this.setState({ ingredients: temp });
          }}
        />
      </li>
    ));
    const directions = this.state.directions.map((element, key) => (
      <li>
        <Form.Control
          as='textarea'
          rows='3'
          type='text'
          value={element}
          onChange={(event) => {
            let temp = this.state.directions;
            temp[key] = event.target.value;
            this.setState({ directions: temp });
          }}
        />
      </li>
    ));
    return (
      <div>
        <Col md={12}>
          <div className='recipe-container'>
            <Row className='button-bar'>
              <Col>
                <Link
                  to={{
                    pathname: '/home',
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {}}
                    icon={faArrowLeft}
                    size='3x'
                    color='blue'
                  />
                </Link>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className='recipe-header'>
              <Col>
                <img src={this.state.image} className='recipe-image' />
              </Col>
              <Col>
                <h3>{this.state.name}</h3>
                <p>
                  Time:{' '}
                  <input
                    type='text'
                    value={this.state.time}
                    onChange={(event) => {
                      this.setState({ time: event.target.value });
                    }}
                  />
                  <br />
                  Difficulty:{' '}
                  <input
                    type='text'
                    value={this.state.difficulty}
                    onChange={(event) => {
                      this.setState({ difficulty: event.target.value });
                    }}
                  />
                  <br />
                  Calories:{' '}
                  <input
                    type='text'
                    value={this.state.calories}
                    onChange={(event) => {
                      this.setState({ calories: event.target.value });
                    }}
                  />
                  <br />
                  Servings:{' '}
                  <input
                    type='text'
                    value={this.state.servings}
                    onChange={(event) => {
                      this.setState({ servings: event.target.value });
                    }}
                  />
                </p>
              </Col>
            </Row>

            <h6 hidden={!this.state.description}>Description:</h6>
            <p hidden={!this.state.description}>
              <Form.Control
                as='textarea'
                rows='3'
                type='text'
                value={this.state.description}
                onChange={(event) => {
                  this.setState({ description: event.target.value });
                }}
              />
            </p>
            <h6 hidden={ingredients === undefined || ingredients.length === 0}>
              Ingredients:
              <br />
            </h6>
            <ul>{ingredients}</ul>
            <h6 hidden={ingredients === undefined || ingredients.length === 0}>
              Directions:
            </h6>
            <ol>{directions}</ol>
            <h6 hidden={!this.state.notes}>Additional Notes:</h6>
            <p hidden={!this.state.notes}>
              <Form.Control
                as='textarea'
                rows='3'
                type='text'
                value={this.state.notes}
                onChange={(event) => {
                  this.setState({ notes: event.target.value });
                }}
              />
            </p>
            <Button variant='primary' onClick={() => this.saveData()}>
              Save
            </Button>
          </div>
        </Col>
      </div>
    );
  }
}

export default EditRecipe;
