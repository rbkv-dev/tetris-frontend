import styled from "styled-components";

export const StyledFieldWrapper = styled.div`
  height: fit-content;
  width: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledCell = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: ${(props) => `${props.painted ? "red" : "green"}`};
`;
