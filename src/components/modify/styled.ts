import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;

  cursor: pointer;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 20%;
  height: 30px;
  margin-bottom: 40px;
  border-radius: 7px;
  border: 1px solid #a6adbb;
`;

export const S = { ImgContainer, Title, Input, Button };
