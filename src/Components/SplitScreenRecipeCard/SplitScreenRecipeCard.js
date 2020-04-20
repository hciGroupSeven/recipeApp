import React from 'react';
import style from './SplitScreenRecipeCard.css';

export default class SplitScreenRecipeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: this.props.recipe,
    };
  }

  componentWillReceiveProps({ recipe }) {
    this.setState({ recipe: recipe });
  }

  render() {
    let recipe = this.state.recipe;
    if (recipe.image) {
      return (
        <span
          className='recipe-card'
          onClick={() => {
            this.props.updateSecondRecipe(recipe);
          }}
        >
          <img src={recipe.image} className='recipe-card-image' />
          <h6 className='recipe-card-text'>{recipe.name}</h6>
          <i class='recipe-card-sub-text'>{recipe.time}</i>
          <i class='recipe-card-sub-text'>|</i>
          <i class='recipe-card-sub-text'>{recipe.difficulty}</i>
          <i class='recipe-card-sub-text'>|</i>
          <i class='recipe-card-sub-text'>{recipe.calories}</i>
        </span>
      );
    } else {
      return (
        <div>
          <p>{this.state.recipe.name}</p>
        </div>
      );
    }
  }
}
