import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import style from './Recipe.css';
import Header from '../../Components/Header/Header';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      ingredients: [],
      directions: [],
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const { recipe } = this.props.location.state;

    this.setState({
      recipe: recipe,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
    });
  }

  render() {
    console.log(this.state);

    const recipe = this.state.recipe;

    const ingredients = this.state.ingredients.map((element) => (
      <li>{element}</li>
    ));

    const directions = this.state.directions.map((element) => (
      <li>{element}</li>
    ));

    console.log(recipe);

    return (
      <div className='Recipe'>
        <Header />
        <Container fluid className='container'>
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
              <Col>
                <Button variant='primary' className='button'>
                  Edit
                </Button>
                <Button variant='primary' className='button'>
                  Share
                </Button>
                <Button variant='primary' className='button'>
                  Splitscreen
                </Button>
              </Col>
            </Row>
            <Row className='recipe-header'>
              <Col>
                <img src={recipe.image} className='recipe-image' />
              </Col>
              <Col>
                <h3>{recipe.name}</h3>
                <p>
                  Time: {recipe.time}
                  <br />
                  Difficulty: {recipe.difficulty}
                  <br />
                  Calories: {recipe.calories}
                  <br />
                  Servings: {recipe.servings}
                </p>
              </Col>
            </Row>
            <h6 hidden={!recipe.description}>Description:</h6>
            <p hidden={!recipe.description}>{recipe.description}</p>
            <h6 hidden={ingredients === undefined || ingredients.length === 0}>
              Ingredients:
              <br />
            </h6>
            <ul>{ingredients}</ul>
            <h6 hidden={ingredients === undefined || ingredients.length === 0}>
              Directions:
            </h6>
            <ol>{directions}</ol>
            <h6 hidden={!recipe.notes}>Additional Notes:</h6>
            <p hidden={!recipe.notes}>{recipe.notes}</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Recipe;
