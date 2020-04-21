import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
} from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import recipeData from '../../Data/recipes';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: '',
      difficulty: '',
      calories: '',
      servings: '',
      image: '',
      description: '',
      ingredients: ['', '', ''],
      directions: ['', '', ''],
      notes: '',
    };
  }

  addRecipeByURL = () => {
    // Use this recipe !!!
    // https://www.foodnetwork.com/recipes/tyler-florence/mashed-potatoes-recipe-1943035

    this.setState({
      name: 'Mashed Potatoes',
      time: '35 min',
      difficulty: 'Easy',
      calories: '',
      servings: '6 to 8',
      image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/9/3/0/mashedpotatoes_s4x3.jpg.rend.hgtvcom.826.620.suffix/1384541148269.jpeg',
      description: '',
      ingredients: [' 4 pounds golden creamer potatoes, peeled and cut into quarters', '1 bay leaf', 'Kosher salt and freshly ground black pepper', '2 cups heavy cream', '3 tablespoons unsalted butter', '2 tablespoons chopped chives'],
      directions: ['Put the potatoes into a large pot, add the bay leaf, 2 tablespoons salt, and cover with cold water. Bring to a boil over medium-high heat and cook until the potatoes are tender, about 20 minutes. Drain them well and remove the bay leaf. Meanwhile, heat the cream and butter in a small saucepan. Put the potatoes through a ricer or food mill into a bowl. Add the hot cream and season with salt and pepper. Mix together with a spoon and add the chives.'],
      notes: '',
    });
  }

  //   saveData = () => {
  //     // console.log(this.state);
  //     this.props.history.push('/recipe/');
  //     // this.props.update(this.state);
  //   };

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
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
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
              <Row>
                <div
                  style={{
                    margin: 'auto',
                    width: '50%',
                    height: '15vh',
                  }}
                >
                  <Form.Row>
                    <Form.Group as={Col}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>URL:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type='text'
                          placeholder='Drag URL here...'
                          // onChange={() => this.addRecipeByURL()}
                          onKeyPress={() => this.addRecipeByURL()}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                </div>
                <div
                  style={{
                    margin: 'auto',
                    width: '70%',
                    borderBottom: '2px solid black',
                  }}
                ></div>
              </Row>
              <Row className='recipe-header'>
                <Col>
                  {this.state.image === '' ? (
                    <input
                      type='file'
                      accept='.png'
                      value={this.state.image}
                      onChange={(e) => {
                        var file = e.target.files[0];
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          this.setState({
                            image: reader.result,
                          });
                        };
                        reader.onerror = (error) => {
                          console.log('Error: ', error);
                        };
                      }}
                    />
                  ) : (
                    <img src={this.state.image} className='recipe-image' />
                  )}
                </Col>
                <Col>
                  <p>
                    Name:{' '}
                    <input
                      type='text'
                      value={this.state.name}
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                    />
                    <br />
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

              <h6>Description:</h6>
              <p>
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
              <h6>
                Ingredients:
                <br />
              </h6>
              <ul>{ingredients}</ul>
              <h6>Directions:</h6>
              <ol>{directions}</ol>
              <h6>Additional Notes:</h6>
              <p>
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
              <Link
                to={{
                  pathname: '/recipe/' + this.state.name,
                  state: { recipe: this.state },
                }}
                style={{ textDecoration: 'none' }}
              >
                <Button variant='primary' onClick={() => { 
                  recipeData.push({ 
                    name: this.state.name,
                    time: this.state.time,
                    difficulty: this.state.difficulty,
                    calories: this.state.calories,
                    servings: this.state.servings,
                    image: this.state.image,
                    description: this.state.description,
                    ingredients: this.state.ingredients,
                    directions: this.state.directions,
                    notes: this.state.notes,
                   }) }}>
                  Save
                </Button>
                {/* <FontAwesomeIcon
                  onClick={() => {}}
                  icon={faSave}
                  size='3x'
                  color='black'
                /> */}
              </Link>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}

export default EditRecipe;
