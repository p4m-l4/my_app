import React from "react";
import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";

const Ruffle1 = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container style={{backgroundColor: 'aliceblue',
                            padding:100,
                            paddingBottom: 100,
                            borderWidth: 5,
                            borderStyle: 'ridge',
                            borderRadius: 10,
                            marginLeft: 300,
                            width: 1000,
                            height: 500,
                            }}>
                <div></div>
            </Container>
        </div>
        );
} 
export default Ruffle1;
