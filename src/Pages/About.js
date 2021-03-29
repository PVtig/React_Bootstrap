import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'




export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Freimeworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://v5q9w3t5.rocketcdn.me/wp-content/uploads/2018/08/blog-webdesigntrends-2019.jpg"/>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://rau.ua/wp-content/uploads/2020/04/team-climbing.jpg"/>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://zendenwebdesign.com/wp-content/uploads/2017/10/Top-7-Programing-Languages-for-Web-Development.jpg"/>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://envisionitagency.com/uploads/2018/04/frameworks.png"/>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://cdn.vox-cdn.com/thumbor/rJo5JNmus4V80mFmFVrTcxQMiYg=/0x0:5929x3514/1200x800/filters:focal(3552x1752:4500x2700)/cdn.vox-cdn.com/uploads/chorus_image/image/60477059/902931802.jpg.0.jpg"/>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
