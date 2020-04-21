import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Modal,
  Alert,
} from 'react-bootstrap';
import style from './RecipeView.css';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecipeCard from '../RecipeCard/RecipeCard';
import recipeData from '../../Data/recipes';

export default class RecipeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      recipes: recipeData,
      currFolder: this.props.currentFolder,
      showModal: false,
      showAlert: false,
      sharedWith: [
        'erika@gmail.com',
        'justin@gmail.com',
        'danielle@gmail.com',
        'oliver@gmail.com',
      ],
      email: '',
    };
  }

  componentWillReceiveProps({ currentFolder }) {
    this.setState({ currFolder: currentFolder });
  }

  handleSearchChange = (text) => {
    this.setState({ search: text.target.value });
  };

  filterRecipes = (recipeList) => {
    var recipesPerRow = 3; //CHANGE THIS WHEN WINDOW CHANGES SIZE

    if (this.state.search !== '')
      //Filter out for recipes being searched for
      recipeList = recipeList.filter((recipe) =>
        recipe.name.toLowerCase().includes(this.state.search.toLowerCase())
      );

    if (this.state.currFolder !== 'All')
      recipeList = recipeList.filter(
        (recipe) => recipe.folder === this.state.currFolder
      ); //Filter for recipes in the selected folder

    const rows = [...Array(Math.ceil(recipeList.length / recipesPerRow))];

    const recipeRows = rows.map((row, idx) =>
      recipeList.slice(idx * recipesPerRow, idx * recipesPerRow + recipesPerRow)
    );

    if (
      recipeList.length > 0 &&
      recipeRows[recipeRows.length - 1].length < recipesPerRow
    ) {
      for (
        var i = recipeRows[recipeRows.length - 1].length;
        i < recipesPerRow;
        i++
      ) {
        recipeRows[recipeRows.length - 1].push({ name: '' }); //This is used to position recipes in rows that contain less than 3 elements.
      }
    }

    const recipeListFormatted = recipeRows.map((
      row,
      idx //Arrange recipes into rows and columns
    ) => (
      <Row>
        {row.map((recipe) => (
          <Col
            className={
              idx === rows.length - 1 ? 'recipe-col-final' : 'recipe-col'
            }
          >
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    ));

    return recipeListFormatted;
  };

  renderRecipes = () => {
    return (
      <div className='recipes'>{this.filterRecipes(this.state.recipes)}</div>
    );
  };

  render() {
    const sharedWith = this.state.sharedWith.map((element) => (
      <li>{element}</li>
    ));

    return (
      <Container fluid className='recipe-container'>
        <Button
          variant='primary'
          className='share-button'
          hidden={this.state.currFolder === 'All'}
          onClick={() => this.setState({ showModal: true })}
        >
          Share
        </Button>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false, showAlert: false })}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Share folder with others</Modal.Title>
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
            <p>
              Sharing this folder with others allows them to view, add, and edit
              the contents of the folder.
            </p>
            <h6 hidden={this.state.currFolder !== "Thanksgiving '20"}>
              Shared with:
            </h6>
            <ul hidden={this.state.currFolder !== "Thanksgiving '20"}>
              {sharedWith}
            </ul>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type='email'
                    placeholder='Enter email address...'
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
                      this.state.sharedWith.push(this.state.email);
                      this.setState({ email: '', showAlert: true });
                    }}
                  >
                    Share
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() =>
                this.setState({ showModal: false, showAlert: false })
              }
            >
              Done
            </Button>
          </Modal.Footer>
        </Modal>
        <div className='recipe-search-container'>
          <Form.Row>
            <Form.Group as={Col}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type='text'
                  placeholder='Search here...'
                  onChange={(text) => this.handleSearchChange(text)}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </div>
        {this.renderRecipes()}
      </Container>
    );
  }
}
