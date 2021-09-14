import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 0 0 12px;
  padding: 10px 35px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #ba68c8;
  text-transform: capitalize;
  font-size: 1.8rem;
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
    width: 225px;
    height: 250px;
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
    box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);
    -webkit-box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);
    -moz-box-shadow: 8px 8px 9px 0px rgba(69, 69, 69, 0.75);

    :focus {
      border: 1.5px solid #ba68c6;
    }
  }
`;
