import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
                <Button variant="primari">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
                <Button variant="primari">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
                <Button variant="primari">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        <div style="height: 50px; color=blak"></div>
      </>
    );
  }
}
