import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Alert,
} from 'react-bootstrap';
import style from './Recipe.css';
import Header from '../../Components/Header/Header';
import { faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import SplitScreenRecipeView from '../../Components/SplitScreenRecipeView/SplitScreenRecipeView';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import pinterest from '../../Assets/pinterest.png';
import EditRecipe from '../../Components/Edit/EditRecipe';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      ingredients: [],
      directions: [],
      splitScreen: false,
      secondRecipe: {},
      showModal: false,
      showAlert: false,
      showAlertCopy: false,
      email: '',
      EditRecipe: false,
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

  updateSecondRecipe = (recipe) => {
    this.setState({ secondRecipe: recipe });
  };

  render() {
    const recipe = this.state.recipe;
    const ingredients = this.state.ingredients.map((element) => (
      <li>{element}</li>
    ));
    const directions = this.state.directions.map((element) => (
      <li>{element}</li>
    ));

    let secondRecipe = {};
    let secondIngredients = [];
    let secondDirections = [];
    if (
      Object.keys(this.state.secondRecipe).length !== 0 &&
      this.state.secondRecipe.constructor === Object
    ) {
      secondRecipe = this.state.secondRecipe;
      secondIngredients = this.state.secondRecipe.ingredients.map((element) => (
        <li>{element}</li>
      ));
      secondDirections = this.state.secondRecipe.directions.map((element) => (
        <li>{element}</li>
      ));
    }

    let containerClass = this.state.splitScreen ? '' : 'container';

    return (
      <div className='Recipe'>
        <Header />
        <Container fluid className={containerClass}>
          {this.state.splitScreen && (
            <div className='x'>
              <FontAwesomeIcon
                onClick={() =>
                  this.setState({ splitScreen: false, secondRecipe: {} })
                }
                icon={faWindowClose}
                size='2x'
              />
            </div>
          )}
          {!this.state.EditRecipe && (
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
                        <Button
                          variant='primary'
                          className='button'
                          onClick={() => {
                            this.setState({ EditRecipe: true });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant='primary'
                          className='button'
                          onClick={() => this.setState({ showModal: true })}
                        >
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

                  <Modal
                    show={this.state.showModal}
                    onHide={() =>
                      this.setState({
                        showModal: false,
                        showAlert: false,
                        showAlertCopy: false,
                      })
                    }
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Share with others</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Alert
                        dismissible
                        variant='success'
                        show={this.state.showAlert}
                        onClose={() => this.setState({ showAlert: false })}
                      >
                        <p>Shared successfully!</p>
                      </Alert>
                      <Alert
                        dismissible
                        variant='success'
                        show={this.state.showAlertCopy}
                        onClose={() => this.setState({ showAlertCopy: false })}
                      >
                        <p>Copied link successfully!</p>
                      </Alert>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Control
                              type='email'
                              placeholder='name@example.com'
                              value={this.state.email}
                              onChange={(event) => {
                                this.setState({ email: event.target.value });
                              }}
                            />
                          </Col>
                          <Col sm={3}>
                            <Button
                              variant='primary'
                              onClick={(event) => {
                                this.setState({ email: '', showAlert: true });
                              }}
                            >
                              Share
                            </Button>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <img
                            src={facebook}
                            className='social-button'
                            onClick={(event) => {
                              this.setState({ showAlert: true });
                            }}
                          />
                          <img
                            src={twitter}
                            className='social-button'
                            onClick={(event) => {
                              this.setState({ showAlert: true });
                            }}
                          />
                          <img
                            src={pinterest}
                            className='social-button'
                            onClick={(event) => {
                              this.setState({ showAlert: true });
                            }}
                          />
                        </Row>
                        <br />
                        <Row>
                          <Col>
                            <Form.Control
                              readOnly
                              type='text'
                              placeholder={'GoodCookin.com/' + recipe.name}
                            />
                          </Col>
                          <Col sm={3}>
                            <Button
                              variant='primary'
                              onClick={(event) => {
                                this.setState({
                                  email: '',
                                  showAlertCopy: true,
                                });
                              }}
                            >
                              Copy
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='secondary'
                        onClick={() =>
                          this.setState({
                            showModal: false,
                            showAlert: false,
                            showAlertCopy: false,
                          })
                        }
                      >
                        Done
                      </Button>
                    </Modal.Footer>
                  </Modal>

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
                </div>
              </Col>
              {this.state.splitScreen && (
                <Col md={6} className='rightScreen'>
                  {Object.keys(this.state.secondRecipe).length !== 0 &&
                  this.state.secondRecipe.constructor === Object ? (
                    <div className='recipe-container'>
                      <Row className='recipe-header'>
                        <Col>
                          <img
                            src={secondRecipe.image}
                            className='recipe-image'
                          />
                        </Col>
                        <Col>
                          <h3>{secondRecipe.name}</h3>
                          <p>
                            Time: {secondRecipe.time}
                            <br />
                            Difficulty: {secondRecipe.difficulty}
                            <br />
                            Calories: {secondRecipe.calories}
                            <br />
                            Servings: {secondRecipe.servings}
                          </p>
                        </Col>
                      </Row>
                      <h6 hidden={!secondRecipe.description}>Description:</h6>
                      <p hidden={!secondRecipe.description}>
                        {secondRecipe.description}
                      </p>
                      <h6
                        hidden={
                          secondIngredients === undefined ||
                          secondIngredients.length === 0
                        }
                      >
                        Ingredients:
                        <br />
                      </h6>
                      <ul>{secondIngredients}</ul>
                      <h6
                        hidden={
                          secondIngredients === undefined ||
                          secondIngredients.length === 0
                        }
                      >
                        Directions:
                      </h6>
                      <ol>{secondDirections}</ol>
                      <h6 hidden={!secondRecipe.notes}>Additional Notes:</h6>
                      <p hidden={!secondRecipe.notes}>{secondRecipe.notes}</p>
                    </div>
                  ) : (
                    <SplitScreenRecipeView
                      updateSecondRecipe={(temp) =>
                        this.updateSecondRecipe(temp)
                      }
                    />
                  )}
                </Col>
              )}
            </Row>
          )}
          {this.state.EditRecipe && (
            <EditRecipe
              recipe={this.state.recipe}
              update={(rec) => {
                this.setState({ recipe: rec, EditRecipe: false });
              }}
            />
          )}
        </Container>
      </div>
    );
  }
}
export default Recipe;
