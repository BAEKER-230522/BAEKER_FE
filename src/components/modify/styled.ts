import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
  button {
    margin-top: 20px;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #661ae6;
    color: white;
    font-weight: 500;
  }
`;

const Button = styled.button`
  width: 25%;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #661ae6;
  color: white;
  font-weight: 500;
`;

export const S = { ImgContainer, Button };
