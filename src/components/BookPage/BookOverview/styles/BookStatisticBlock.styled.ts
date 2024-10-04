import { styled } from "styled-components";

const Block = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: 0;

  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
`;

const BlockValue = styled.p`
  font-size: 16px;
  color: gray;
  margin: 0;
`;

export { Block, BlockTitle, BlockValue };
