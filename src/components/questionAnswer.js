import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuestionAnswer = () => {
    return ( 
    
    <div>
    <div>
    
</div>
<NavBar></NavBar>
<div style={{ display: 'block', 
                width: 900,
                height: 1500, 
                paddingLeft: 100,
                margin: 100}}>
    <Form  style={{ backgroundColor: 'aliceblue',
                    padding:100,
                    paddingBottom: 100,
                    borderWidth: 5,
                    borderStyle: 'ridge',
                    borderRadius: 10,
                    marginLeft: 300,
                    width: 1000}}>
    <h3 style={{paddingBottom: 50}}>Create a new Question and Answer sheet</h3>
    <Container>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Question 1:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter your question" />
        </Form.Group>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Answer:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter the question response" />
        </Form.Group>
    </Container>
    <Container>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Question 2:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter your question" />
        </Form.Group>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Answer:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter the question response" />
        </Form.Group>
    </Container>
    <Container>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Question 3:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter your question" />
        </Form.Group>
        <Form.Group>
        <Form.Label style={{paddingTop: 20}}>Answer:</Form.Label>
        <Form.Control type="text" 
                        placeholder="Enter the question response" />
        </Form.Group>
    </Container>
    <Container fluid>
        <Row  style={{marginTop: 50}}>
            <Col>
                <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Add Question</Button>{' '}
            </Col>
            <Col>
                <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Edit Question</Button>{' '}
            </Col>
            <Col>
                <Button variant="secondary" style={{marginLeft: 0, width: 200}}>Delete Question</Button>{' '}
            </Col>
        </Row>
        </Container>
    
    <Button variant="primary" type="submit" style={{marginTop: 100}}>
        Click here to submit
    </Button>
    </Form>
</div>
</div>
        );
}

export default QuestionAnswer;