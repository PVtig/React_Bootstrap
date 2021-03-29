import React, { Component } from 'react'
import { Card, Col, Container, ListGroup, Media, Row } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src= "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not 
                                only five centuries, but also the leap into electronic
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src= "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not 
                                only five centuries, but also the leap into electronic
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src= "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not 
                                only five centuries, but also the leap into electronic
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src= "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not 
                                only five centuries, but also the leap into electronic
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-centr mt-5">Categories</h5>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="ligt">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not 
                                only five centuries, but also the leap into electronic
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
