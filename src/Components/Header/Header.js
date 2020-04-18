import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../Assets/logo.png";
import profile from "../../Assets/profile-pic.png";
import style from "./Header.css";

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid className="header-container">
                <Row flex>
                    <img src={logo} className="header-logo"/>
                    <p className="header-text">Good Cookin'</p>
                    <img src={profile} className="header-profile"/>
                </Row>
            </Container>
        )
    }
}