import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #a6adbb;
  margin-bottom: 20px;
`;

const Slider = styled.input`
  accent-color: #a6adbb;
  transition: 0.3s ease-in-out;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Value = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-left: 10px;
  span {
    width: 5%;
    height: 10px;
    color: #a6adbb;
  }
`;

export const S = { Container, Slider, Value, Title };
