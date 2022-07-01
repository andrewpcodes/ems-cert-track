import styled from 'styled-components';

const Button = styled.button`
  margin-left: 1ex;
  font-style: italic;
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 3px 3px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
    opacity: 0.75;
  }
`;

export default Button;