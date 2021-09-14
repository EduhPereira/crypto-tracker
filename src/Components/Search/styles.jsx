import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 0 0 12px;
  padding: 10px 25px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #ba68c8;
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 4px 4px 6px #4d4d4d;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 350px;
  }

  h1 {
    color: #1a1a1a;
    text-shadow: 4px 4px 6px #4d4d4d;
    margin: 12px 0 24px 0;
  }

  input {
    width: 250px;
    padding: 5px;
    border: 1.5px solid grey;
    border-radius: 5px;
    outline: none;
    transition: 0.4s linear;

    :focus {
      border: 1.5px solid #ba68c6;
    }
  }
`;
