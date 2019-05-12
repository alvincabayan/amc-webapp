import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const Styles = styled.div`
    .particlecss {
        // background-color: blue;
        opacity: 0.5;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index -1;
    }
`
const particlesOpt = {
    particles : {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}

export const HomeParticles = () => (
    <Styles>
        <Particles className="particlecss" params={particlesOpt} />
    </Styles>
)