import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 500px) {
    gap: 20px;
  }
`;

const RatingBarWrapper = styled.div`
  margin-top: 40px;
  background-color: black;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  border-radius: 30px;
  border: none;

  @media screen and (max-width: 500px) {
    padding: 0 25px;
    margin-top: 20px;
  }
`;

const RatingItem = styled.button<{ $active: boolean; $color: string }>`
  border: none;
  background-color: transparent;
  font-size: 18px;
  transform: ${(props) => (props.$active ? "scale(1.1)" : "scale(1)")};
  color: ${(props) => (props.$active ? props.$color : "gray")};
  cursor: pointer;
  transition: color 0.2s;
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  `;

const Comments = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  font-family: "Poppins", sans-serif;
  height: 120px;
  resize: none;
  color: black;
  font-size: 12px;
  border: 2px solid black;
  border-radius: 10px;
  &::placeholder {
    color: gray;
  }
  padding: 10px 10px;
`;

export { Form, RatingBarWrapper, RatingItem, Comments };
