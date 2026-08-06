
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  // Your first name - change this to your actual name
  const firstName = "John"; // Change this to your name, or leave empty
  
  return (
    <Container className="app-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="product-card">
            <Image />
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
          
          {/* Greeting message */}
          <div className="greeting-container">
            <p className="greeting-message">
              Hello, {firstName ? firstName : "there!"}
            </p>
            {/* Display image if firstName is provided */}
            {firstName && (
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="profile-image"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
