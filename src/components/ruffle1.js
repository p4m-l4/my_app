import React from "react";
import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";

const Ruffle1 = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div style={{ display: 'block', 
                width: 1000,
                height: 1500, 
                paddingLeft: 100,
                margin: 100}}>
            <h3 style={{paddingBottom: 10,
                            marginLeft: 300}}>Select an option</h3>
            <Container style={{backgroundColor: 'aliceblue',
                            padding:100,
                            paddingBottom: 100,
                            borderWidth: 5,
                            borderStyle: 'ridge',
                            borderRadius: 10,
                            marginLeft: 300,
                            width: 1000,
                            height: 500,
                            marginBottom: 100
                            }}>
                <div></div>
            </Container>
            <h3 style={{paddingBottom: 10,
                            marginLeft: 300}}>Drop here</h3>
            <Container style={{backgroundColor: 'aliceblue',
                            padding:100,
                            paddingBottom: 100,
                            borderWidth: 5,
                            borderStyle: 'ridge',
                            borderRadius: 10,
                            marginLeft: 300,
                            width: 1000,
                            height: 500}}>
                <div></div>
            </Container>
            </div>
        </div>
        );
} 
export default Ruffle1;
