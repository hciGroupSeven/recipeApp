import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import style from './Recipe.css';
import Header from '../../Components/Header/Header';
import { faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import RecipeView from '../../Components/RecipeView/RecipeView';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      ingredients: [],
      directions: [],
      splitScreen: false,
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

    let contClass = this.state.splitScreen ? '' : 'container';

    return (
      <div className='Recipe'>
        <Header />
        <Container fluid className={contClass}>
          {this.state.splitScreen && (
            <div className='x'>
              <FontAwesomeIcon
                onClick={() => this.setState({ splitScreen: false })}
                icon={faWindowClose}
                size='2x'
              />
            </div>
          )}
          <Row>
            <Col md={this.state.splitScreen ? 6 : 12}>
              <div className='recipe-container'>
                {!this.state.splitScreen && (
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
                      <Button
                        variant='primary'
                        className='button'
                        onClick={() => this.setState({ splitScreen: true })}
                      >
                        Splitscreen
                      </Button>
                    </Col>
                  </Row>
                )}
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
                <h6
                  hidden={ingredients === undefined || ingredients.length === 0}
                >
                  Ingredients:
                  <br />
                </h6>
                <ul>{ingredients}</ul>
                <h6
                  hidden={ingredients === undefined || ingredients.length === 0}
                >
                  Directions:
                </h6>
                <ol>{directions}</ol>
                <h6 hidden={!recipe.notes}>Additional Notes:</h6>
                <p hidden={!recipe.notes}>{recipe.notes}</p>
              </div>
            </Col>
            {this.state.splitScreen && (
              <Col md={6}>
                {/* <div className='recipe-container'>
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
                  <h6
                    hidden={
                      ingredients === undefined || ingredients.length === 0
                    }
                  >
                    Ingredients:
                    <br />
                  </h6>
                  <ul>{ingredients}</ul>
                  <h6
                    hidden={
                      ingredients === undefined || ingredients.length === 0
                    }
                  >
                    Directions:
                  </h6>
                  <ol>{directions}</ol>
                  <h6 hidden={!recipe.notes}>Additional Notes:</h6>
                  <p hidden={!recipe.notes}>{recipe.notes}</p>
                </div> */}
                <RecipeView currentFolder={'All'} />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Recipe;
