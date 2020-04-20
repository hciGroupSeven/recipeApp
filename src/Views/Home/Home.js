import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Home.css';
import folderIcon from '../../Assets/folder-icon.png';
import Header from '../../Components/Header/Header';
import RecipeView from '../../Components/RecipeView/RecipeView';
import Modal from 'react-bootstrap/Modal';

import folderData from '../../Data/folders';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      currentFolder: 'All',
      folders: folderData,
      newFolderName: '',
    };
  }

  renderFolders = () => {
    return (
      <div>
        {this.state.folders.map((element, index) => {
          return (
            <div onClick={() => this.setState({ currentFolder: element })}>
              <Row>
                <img src={folderIcon} className='navbar-image' />
                <p
                  className={
                    this.state.currentFolder === element
                      ? 'navbar-selected-text'
                      : 'navbar-text'
                  }
                >
                  {element}
                </p>
              </Row>
              <hr size='1' width='100%' />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    console.log(this.state.currentFolder);
    return (
      <div className='Home'>
        <Header />
        <Container fluid className='home-container'>
          <Row flex className='navbar-container'>
            <div className='navbar'>
              {this.renderFolders()}

              <Button
                variant='primary'
                type='customizeYourPrint'
                class='navbar-button'
                size='lg'
                onClick={() => this.setState({ showModal: true })}
                block
              >
                Add Folder
              </Button>

              <Modal
                show={this.state.showModal}
                onHide={() => this.setState({ showModal: false })}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <label>
                      Folder name:&nbsp;
                      <input
                        type='text'
                        value={this.state.newFolderName}
                        onChange={(event) => {
                          this.setState({ newFolderName: event.target.value });
                        }}
                      />
                    </label>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant='secondary'
                    onClick={() => this.setState({ showModal: false })}
                  >
                    Close
                  </Button>
                  <Button
                    variant='primary'
                    onClick={() => {
                      let temp = this.state.folders;
                      temp.push(this.state.newFolderName);
                      this.setState({
                        showModal: false,
                        folders: temp,
                        newFolderName: '',
                      });
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className='home-recipe-container'>
              <RecipeView currentFolder={this.state.currentFolder} />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
