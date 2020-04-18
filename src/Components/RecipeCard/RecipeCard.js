import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './RecipeCard.css'
import { Link } from 'react-router-dom';

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
                <Link to={{ pathname:'/recipe/' + recipe.name, state: { recipe: recipe } }} style={{ textDecoration: 'none' }}>
                    <span className="recipe-card">
                        <img src={recipe.image} className="recipe-card-image" />
                        <h6 className="recipe-card-text">{recipe.name}</h6>
                        <i class="recipe-card-sub-text">{recipe.time}</i>
                        <i class="recipe-card-sub-text">|</i>
                        <i class="recipe-card-sub-text">{recipe.difficulty}</i> 
                        <i class="recipe-card-sub-text">|</i>
                        <i class="recipe-card-sub-text">{recipe.calories}</i> 
                    </span>
                </Link>
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