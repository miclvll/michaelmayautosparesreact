import styled from "styled-component";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid LightBlue;
  border-color: ${(props) => (props.cart ? yellow : LightBlue)};
  color: ${(props) => (props.cart ? yellow : lightBlue)};
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) => (props.cart ? yellow : LightBlue)};
    color: blue;
  }
  &:focus {
    outline: none;
  }
`;
