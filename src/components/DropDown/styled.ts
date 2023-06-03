import styled from "styled-components";

const Position = styled.div`
  position: absolute;
  top: 115%;
  right: -100%;

  overflow: hidden;
  z-index: 1;
`;

interface IContainer {
  dropdownState: number[];
  styledProp: number;
}

const Container = styled.div<IContainer>`
  padding: 20px;
  width: max-content;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: gray;
  border-radius: 7px;
  transition-delay: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${(props) =>
    props.dropdownState[props.styledProp] === 1 &&
    ` 
    @keyframes dropdown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }
    animation: dropdown 0.5s ease;
   `}

  ${(props) =>
    props.dropdownState[props.styledProp] === 0 &&
    ` 
    top : -100%
    @keyframes dropdown {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-100%);
      }
    }
    animation: dropdown 0.5s ease;
   `}
`;

const Item = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  &:not(:first-child) {
    margin-top: 10px;
  }
  &:hover {
    background-color: aquamarine;
  }
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const S = {
  Container,
  Item,
  Position,
};
