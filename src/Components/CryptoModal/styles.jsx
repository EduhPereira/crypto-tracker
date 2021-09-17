import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000c8;
`;

const FromBottom = keyframes`
    from{
        transform:translateY(50px);
        opacity:0;
    }
    to{
        transform:translateY(0px);
        opacity:1;
    }
`;

export const Card = styled.div`
  width: 90%;
  height: 30%;
  max-width: 375px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  background-color: #202020;
  color: #fff;

  animation: ${FromBottom} 0.5s linear;

  h1 {
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  }

  div {
    font-size: 1.2rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    margin: 15px;
    font-weight: 900;
    font-size: 3rem;
    background-color: transparent;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
    transition: all 0.2s linear;
    :hover {
      transform: scale(1.1);
    }
  }
`;
