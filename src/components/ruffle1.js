import React from "react";
import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Draggable, Droppable } from 'react-drag-and-drop';

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
                <div>
                {/* <Draggable type="foo" data="bar">
                    <div>Drag me!</div>
                </Draggable> */}
                    <ListGroup className="overflow-auto" style={{backgroundColor: 'black',
                            height: 300, backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderStyle: 'ridge'}}>
                        <ListGroup.Item style={{height: 50}}>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item style={{height: 50}}>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
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
                <div className="overflow-auto" style={{height: 300,
                            backgroundColor: 'white', 
                            borderRadius: 5, 
                            borderWidth: 1, 
                            borderStyle: 'ridge'}}>
                                {/* <Droppable types={['foo']} onDrop={this.handleDrop}>
                                    <div>Drop here!</div>
                                </Droppable> */}
                            </div>
            </Container>
            </div>
            
        </div>
        );
} 
export default Ruffle1;
