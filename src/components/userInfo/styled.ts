import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 350px;
  background-color: #4b5563;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  margin: 5px;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: aqua;
`;

const BigFont = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #a6adbb;
  margin-bottom: 20px;
`;

const SmallFont = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #a6adbb;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: #661ae6;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Name = styled.div`
  color: #a6adbb;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Title = styled.div`
  color: #747b88;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Introduce = styled.p`
  color: #a6adbb;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

export const S = {
  Container,
  Image,
  Button,
  Line,
  Name,
  Introduce,
  Title,
  BigFont,
  SmallFont,
};
