import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import {HomeParticles} from './HomeParticles'
import styled from 'styled-components';
import beerImage from '../assets/beerImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${beerImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const HomeJumbotron = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay"></div>
      <HomeParticles/>
      <Container>
        <h1>Alvin Cabayan</h1>
        <p>Software Developer</p>
        <p>React; Java; </p>
      </Container>
    </Jumbotron>
  </Styles>
)