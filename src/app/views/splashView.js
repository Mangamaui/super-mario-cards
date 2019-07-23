import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/super-mario-cards-logo.svg';


const SplashView = () => {
  return (
    <React.Fragment>
      <StyledLogo alt="Super Mario Cards" />
    </React.Fragment>
  )
}

export default SplashView;


const StyledLogo = styled(Logo)`
  left: 50%;
  transform: translateX(-50%);
  padding-top: 3vh;
  position: relative;
  height: auto;
  width: 35vw;
  max-width: 600px;
`
