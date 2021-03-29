import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import battl from '../assets/battl.jpg'
import boba from '../assets/boba.jpg'
import gabriel from '../assets/gabriel.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={battl}
                        alt="Battl"
                        
                    />
                    <Carousel.Caption>
                        <h3>IMG</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={boba}
                        alt="Boba"
                        
                    />
                    <Carousel.Caption>
                        <h3>IMG</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gabriel}
                        alt="Gabriel"
                        
                    />
                    <Carousel.Caption>
                        <h3>IMG</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
