import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  width: 300px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 3px;
  margin: 8px 0;
  background-color: #202020;
  color: #ebebeb;
  cursor: pointer;

  box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);
  -webkit-box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);
  -moz-box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);
  img {
    width: 100px;
    height: 100px;
  }
`;
