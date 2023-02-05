import React from "react";
import NavBar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Ruffle2 = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div style={{ display: 'block',
                height: 1500, 
                paddingLeft: 20,
                margin: 100}}>
            
            <Container fluid style={{backgroundColor: 'white',
                                    marginTop: 100, width: 1700}}>
                <Row>
                    <Col md="auto">
                    <h3 style={{paddingBottom: 10,
                                marginLeft: 50}}>Select an option</h3>
                
                    <Container style={{backgroundColor: 'aliceblue',
                                    padding:50,
                                    paddingBottom: 100,
                                    borderWidth: 5,
                                    borderStyle: 'ridge',
                                    borderRadius: 10,
                                    marginLeft: 0,
                                    width: 600,
                                    height: 700,
                                    marginBottom: 50
                                    }}>
                        <div>
                        {/* <Draggable type="foo" data="bar">
                            <div>Drag me!</div>
                        </Draggable> */}
                            <ListGroup className="overflow-auto" style={{backgroundColor: 'black',
                                    height: 500, backgroundColor: 'white', borderRadius: 5, borderWidth: 1, borderStyle: 'ridge'}}>
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
                    </Col>
                    <Col style={{backgroundColor: 'white',
                                    marginTop: 100, width: 100}}>
                        <Container fluid style={{paddingLeft: 50}}>
                            <Row  style={{marginTop: 50}}>
                                <Col>
                                    <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Add Question</Button>{' '}
                                </Col>
                            </Row>
                            <Row  style={{marginTop: 50}}>
                                <Col>
                                    <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Edit Question</Button>{' '}
                                </Col>
                            </Row>
                            <Row  style={{marginTop: 50}}>
                                <Col>
                                    <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Delete Question</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md="auto">
                    <h3 style={{paddingBottom: 10,
                                    marginLeft: 100}}>Drop here</h3>
                    <Container style={{backgroundColor: 'aliceblue',
                                    padding:50,
                                    paddingBottom: 100,
                                    borderWidth: 5,
                                    borderStyle: 'ridge',
                                    borderRadius: 10,
                                    marginLeft: 0,
                                    width: 600,
                                    height: 700}}>
                        <div className="overflow-auto" style={{height: 500,
                                    backgroundColor: 'white', 
                                    borderRadius: 5, 
                                    borderWidth: 1, 
                                    borderStyle: 'ridge'}}>
                                        {/* <Droppable types={['foo']} onDrop={this.handleDrop}>
                                            <div>Drop here!</div>
                                        </Droppable> */}
                                    </div>
                    </Container>
                    </Col>
                </Row>
      
            </Container>
            </div>
            
        </div>
        );
} 
export default Ruffle2;
