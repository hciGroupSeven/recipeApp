import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import style from './SplitScreenRecipeView';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitScreenRecipeCard from '../SplitScreenRecipeCard/SplitScreenRecipeCard';

import recipeData from '../../Data/recipes';

export default class SplitScreenRecipeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      recipes: recipeData,
      currFolder: 'All',
    };
  }

  handleSearchChange = (text) => {
    this.setState({ search: text.target.value });
  };

  filterRecipes = (recipeList) => {
    var recipesPerRow = 2; //CHANGE THIS WHEN WINDOW CHANGES SIZE

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
            <SplitScreenRecipeCard
              recipe={recipe}
              updateSecondRecipe={(temp) => this.props.updateSecondRecipe(temp)}
            />
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
    return (
      <Container fluid className='recipe-container'>
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
