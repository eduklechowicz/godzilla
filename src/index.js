import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from "styled-components";

const Mountains = styled.img`
  position: absolute;
  width: 750px;
  left: -77px;
  bottom: -1090px;
`;

const contentJudder = keyframes`
  0% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(0);;
  }
  80% {
    transform: translateY(-5px);;
  }
  90% {
    transform: translateY(0);
  }
`;

const Content = styled.div`
  animation: ${contentJudder} 1s infinite;
`;

const godzillaWalk = keyframes`
  100% {
    transform: translateX(1080px);
  }
`;

const GodzillaWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: -450px;
  bottom: -40px;
  animation:
    ${godzillaWalk} 15s infinite linear;
`;

const godzillaStomp = keyframes`
  0% {
    transform: rotate(0);
  }
  60% {
    transform: translateY(-13px) rotate(-4deg);
  }
  70% {
    transform: rotate(0);;
  }
`;

const Godzilla = styled.img`
  width: 440px;
  animation: ${godzillaStomp} 1s infinite;
`;

const GodzillaComponent = () => (
  <div>
    <Content>
      <Mountains
        src={require("./images/mountains.png")} />
    </Content>
    <GodzillaWrapper>
      <Godzilla
        src={require("./images/godzilla.png")} />
    </GodzillaWrapper>
  </div>
);

export default GodzillaComponent;

ReactDOM.render(<GodzillaComponent />, document.getElementById('root'))