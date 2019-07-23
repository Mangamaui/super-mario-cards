import React from 'react';

import styled from 'styled-components';


import { BEIGE, ORANGE, BLUE } from './styling/colors';

function Modal(props) {

  return (
    <React.Fragment>
      <StyledModal>
        <h2 className={props.className}>{props.title}</h2>
        {props.children}
        <Button type="submit" className="button" onClick={props.buttonHandler}
          value={props.buttonText} />
      </StyledModal>
    </React.Fragment>
  );
}

export default Modal;

const StyledModal = styled.form`
  color: ${BEIGE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${ORANGE.normal}
  border: 10px solid ${ORANGE.border};
  border-radius: 30px;
  position: relative;
  width: 500px;
  padding: 30px 20px 40px 20px;
  box-shadow: inset 0px -9px 0px 0px ${ORANGE.shadow};
  top: 40%;
  transform: translate(-50%, -50%);
  left: 50%;

  &:before {
    border-radius: 20px 20px 0 0;
    box-shadow: inset 0px 10px 0px 0px ${ORANGE.light};
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }

  fieldset {
    border: none;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 30px;

    &.endState {
      font-size: 72px;
      margin: 30px 0;
    }
  }

  .button {
    margin-top: 30px;
  }
`;

const Button = styled.input`
  background-color: ${BLUE.normal};
  border: none;
  box-shadow: 0px 5px 0px 0px ${BLUE.shadow};
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 24px;
  padding: 15px 20px 10px 20px;
  position: relative;
  width: 242px;
  transition: background 200ms;

  &:hover {
    box-shadow: 0px 4px 0px 0px ${BLUE.shadow};
    top: 1px;
  }

  &:active {
    background-color: darken(${BLUE.normal}, 7%);
    box-shadow: 0px 1px 0px 0px ${BLUE.shadow};
    top: 4px;
  }
`
