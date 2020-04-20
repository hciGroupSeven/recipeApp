import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  checkCreds = () => {
    if (this.state.username === 'user' && this.state.password === 'pass') {
      this.setState({
        username: '',
        password: '',
      });
      this.props.history.push('/home');
    } else {
      alert("'user', 'pass'");
    }
  };

  render() {
    return (
      <Container fluid>
        <Row
          style={{
            paddingTop: '20vh',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ color: 'blue' }}>Good Cookin'</h1>
        </Row>
        <Row
          style={{
            paddingTop: '5vh',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Form>
            <Form.Group
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            >
              <Form.Control type='text' placeholder='Username' />
            </Form.Group>

            <Form.Group
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            >
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button type='submit' onClick={() => this.checkCreds()} block>
              Log In
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
export default Login;
