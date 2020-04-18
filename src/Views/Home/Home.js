import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./Home.css";
import folderIcon from "../../Assets/folder-icon.png";
import Header from "../../Components/Header/Header";
import RecipeView from "../../Components/RecipeView/RecipeView";

import folderData from "../../Data/folders";

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentFolder: "All",
            folders: folderData
        }
    }

    renderFolders = () => {
        return (
            <div>
                {this.state.folders.map((element, index) => {
                    return (
                        <div onClick={()=>this.setState({currentFolder: element})}>
                            <Row>
                                <img src={folderIcon} className="navbar-image" />
                                <p className={(this.state.currentFolder === element) ? "navbar-selected-text" : "navbar-text"}>{element}</p>
                            </Row>
                            <hr size="1" width="100%" />
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        console.log(this.state.currentFolder)
        return (
            <div className="Home">
                <Header />
                <Container fluid className="home-container">
                    <Row flex className="navbar-container">
                        <div className="navbar">
                            {this.renderFolders()}
                            <Button variant="primary" type="customizeYourPrint" class="navbar-button" size="lg" block>Add Folder</Button>
                        </div>
                        <div className="home-recipe-container">
                            <RecipeView currentFolder={this.state.currentFolder}/>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;