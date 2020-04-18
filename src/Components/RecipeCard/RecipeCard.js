import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './RecipeCard.css'

export default class RecipeView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe: this.props.recipe
        }
    }

    componentWillReceiveProps({recipe}) {
        this.setState({recipe: recipe})
    }

    render() {
        let recipe = this.state.recipe;
        if(recipe.image)
        {
            return (
                <div className="recipe-card">
                    <img src={recipe.image} className="recipe-card-image" />
                    <h6 className="recipe-card-text">{recipe.name}</h6>
                    <i class="recipe-card-sub-text">{recipe.time}</i>
                    <i class="recipe-card-sub-text">|</i>
                    <i class="recipe-card-sub-text">{recipe.difficulty}</i> 
                    <i class="recipe-card-sub-text">|</i>
                    <i class="recipe-card-sub-text">{recipe.calories}</i> 
                </div>
            )
        }
        else
        {
            return (
                <div>
                    <p>{this.state.recipe.name}</p> 
                </div>
            )
        }
    }
}