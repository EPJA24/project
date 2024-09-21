import { styled } from "styled-components";

const BookDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  padding: 70px 50px;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const EditionList = styled.ul`
  display: flex;
  max-width: 1000px;
  min-width: 500px;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
`

const Description = styled.p`
  color: gray;
  max-width: 700px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 20px;
  margin-bottom: 40px;
`

export { BookDescriptionContainer, Description, Container, EditionList }