import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './AddRecipe.css';
import folderIcon from '../../Assets/folder-icon.png';
import { Link } from 'react-router-dom';
import { faArrowLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Components/Header/Header';

class AddRecipe extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
      };
    }
    
    render() {
        return (
            <div className='add-recipe'>
                <Header />
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
                <p>Ugh</p>
            </div>
        )
    }
}
export default AddRecipe;
