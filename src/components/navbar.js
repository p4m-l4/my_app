import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Brand link</Navbar.Brand>
                <Navbar.Brand href="/question-answer">Questionnaire</Navbar.Brand>
                <Navbar.Brand href="/ruffle1">Ruffle</Navbar.Brand>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBar;