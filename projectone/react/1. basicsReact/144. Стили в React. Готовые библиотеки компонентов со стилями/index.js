
// установка React Bootstrap
// npm install react-bootstrap bootstrap

// импорт компонентов из библиотеки
import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

// импорт css 
import 'bootstrap/dist/css/bootstrap.min.css';


// Разделение на контейнер -> строки (row) -> колонки (col)
// можно также импортировать слайдер-карусель и очень много готовых фич из документации
// файл BootstrapTest.js
import { Container, Row, Col, Carousel, Form, Button} from 'react-bootstrap';

const BootstrapTest  = () =>{
    return (
        <Container className="mt-5 mb5" >
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                <Col>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
export default BootstrapTest ;




// импорт



// файл index.js
import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTest from './BootstrapTest';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">+++</BigButton>
    <BootstrapTest />
  </React.StrictMode>,
  
  document.getElementById('root')
);


