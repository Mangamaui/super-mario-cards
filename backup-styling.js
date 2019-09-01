import React from 'react';
import styled from 'styled-components'

import { ReactComponent as BigCloud } from '../../assets/big-cloud.svg';
import { ReactComponent as MediumCloud } from '../../assets/medium-cloud.svg';
import { ReactComponent as TinyHill } from '../../assets/hill3.svg';
import { ReactComponent as AverageHill } from '../../assets/hill2.svg';
import { ReactComponent as LargeHill } from '../../assets/hill1.svg';
import { ReactComponent as PalmTree } from '../../assets/long-palmtree.svg';

import { ReactComponent as FullBackground } from '../../assets/background.svg';

import { BLUE } from './colors';

const Background = (props) => {
  return (
    // <StyledBackground className="background">
    //   <StyledSky className="sky" />
    //   <CloudGroup className="cloud-group">
    //     <BigCloud className="cloud cloud1"/>
    //     <BigCloud className="cloud cloud2"/>
    //     <MediumCloud className="cloud cloud3"/>
    //     <MediumCloud className="cloud cloud4"/>
    //     <MediumCloud className="cloud cloud5"/>
    //   </CloudGroup>
    //   <HillGroup className="hill-group--left">
    //     <BigHill className="hill--big hill" alt="big hill" />
    //     <SmallHill className="hill--small hill" alt="small hill" />
    //   </HillGroup>
    //   <PalmTree className="palmTree palmTree--long" />
    //   <PalmTree className="palmTree palmTree--short" />
    //   <HillGroup className="hill-group--right">
    //     <BigHill className="hill--big hill" alt="big hill" />
    //     <MediumHill className="hill--medium hill" alt="medium hill" />
    //     <SmallHill className="hill--small hill" alt="small hill" />
    //   </HillGroup>
    // </StyledBackground>
    <BackgroundScene />
  )
}

export default Background;

const BackgroundScene = styled(FullBackground)`
  position: absolute;
  height: calc(100vh - 70px);
  width: auto;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 0;
`


const StyledSky = styled.div`
  height: 80vh;
  width: calc(100vw + 100px);
  z-index: 0;
  border-radius: 40% 40% 0 0;
  background: ${BLUE.sky};
  translateX(-50%);
  position: absolute;
`

const CloudGroup = styled.div`
  position: absolute;
  width: 100%;
  height: calc(80vh - 30px);
  bottom: 0;
  left: 0

  .cloud {
    height: auto;
    position: absolute;
  }

  .cloud1 {
    width: 220px;
    top: 20px;
    right: 12vw;
    translateX(-50%);
  }

  .cloud2 {
    width: 180px;
    left: 50%;
    top: calc(45%);
    transform: scaleX(-1) translateX(40%);
  }

  .cloud3 {
    left: 25%;
    top: 20%;
    translateX(-50%);
    width: 230px;
  }

  .cloud4 {
    top: 50%;
    left: 16%;
    width: 200px;
    transform: scaleX(-1);


  }
  .cloud5 {
    width: 100px;
    top: 45%;
    right: calc(22% + 20px);
  }
`

const HillGroup = styled.div`
  display: block;
  position: absolute;
  z-index: 5;

  &.hill-group--left {
    left: 30px;
    width: 358px;

    .hill--small {
      right: 0;
    }

    .hill--big {
      left: 0;
    }
  }

  &.hill-group--right {
    right: -3vw;
    width: 550px;

    .hill--small {
      left: 0;
    }

    .hill--medium {
      right: 0;
    }

    .hill--big {
      left: 25%;

    }
  }
`;

const SmallHill = styled(TinyHill)`
  position: absolute;
  bottom: -5px;
  height: auto;
  width: 188px;
`;

const MediumHill = styled(AverageHill)`
  position: absolute;
  bottom: -5px;
  height: auto;
  width: 220px;
`;

const BigHill = styled(LargeHill)`
  position: relative
  bottom: -10px;
  height: auto;
  width: 220px;
`;

const StyledBackground = styled.div`
  display: flex;
  align-items: flex-end
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  bottom: -5px;
  overflow: hidden;
  z-index: -1;

  .palmTree {
    position: absolute;
    display: block;

    height: auto;
    width: 12vw;
    max-width: 230px;
  }

  .palmTree--long {
    bottom: -30px;
    left: calc(50% - 12vw);
    transform: translateX(-50%);
  }

  .palmTree--short {
    bottom: -170px;
    left: calc(50% - 12vw + 3vw);
  }
`;
