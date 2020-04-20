import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../Header/Header';
import { faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class EditRecipe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      time: '',
      difficulty: '',
      calories: '',
      servings: '',
      image: '',
      description: '',
      ingredients: '',
      directions: '',
      notes: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getEditRecipe();
  }

  getEditRecipe(){
    const { recipe } = this.props.location.state;

    this.setState({
      recipe: recipe,
      name: recipe.name,
      time: recipe.time,
      difficulty: recipe.difficulty,
      calories: recipe.calories,
      servings: recipe.servings,
      image: recipe.image,
      description: recipe.description,
      ingredients: recipe.ingredients,
      directions: recipe.directions,
      notes: recipe.notes
    });
  }
    
  onSubmit(e) {
      const EditRecipe = {
          name: this.refs.name.nodeValue,
          time: this.refs.time.nodeValue,
          difficulty: this.refs.time.nodeValue,
          calories: this.refs.calories.nodeValue,
          servings: this.refs.servings.nodeValue,
          image: this.refs.servings.nodeValue,
          description: this.refs.description.nodeValue,
          ingredients: this.refs.ingredients.nodeValue,
          directions: this.refs.directions.nodeValue,
          notes: this.refs.notes.nodeValue
      }
      this.EditRecipe(EditRecipe);
      e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Edit Recipe</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name}
            onChange={this.handleInputChange}/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="time" ref="time" value={this.state.time}
            onChange={this.handleInputChange}/>
            <label htmlFor="city">Time</label>
          </div>
          <div className="input-field">
            <input type="text" name="difficulty" ref="difficulty" value={this.state.difficulty}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Difficulty</label>
          </div>
          <div className="input-field">
            <input type="text" name="calories" ref="calories" value={this.state.calories}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Calories</label>
          </div>
          <div className="input-field">
            <input type="text" name="servings" ref="servings" value={this.state.servings}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Servings</label>
          </div>
          <div className="input-field">
            <input type="image" name="image" ref="image" width="48" height="48" value={this.state.image}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Image</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" value={this.state.description}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Description</label>
          </div>
          <div className="input-field">
            <input type="text" name="ingredients" ref="ingredients" value={this.state.ingredients}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Ingredients</label>
          </div>
          <div className="input-field">
            <input type="text" name="directions" ref="directions" value={this.state.directions}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Directions</label>
          </div>
          <div className="input-field">
            <input type="text" name="notes" ref="notes" value={this.state.notes}
            onChange={this.handleInputChange}/>
            <label htmlFor="address">Notes</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditRecipe;