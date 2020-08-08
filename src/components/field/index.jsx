import React from "react";
import { StyledFieldWrapper, StyledLine, StyledCell } from "./styled";

const fieldArray = [];

for (let i = 0; i < 20; i++) {
  let line = [];
  for (let i = 0; i < 10; i++) {
    line.push(0);
  }
  fieldArray.push(line);
}

const tetrominoe = {
  L_0: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
  ],
};

export const Field = () => {
  return (
    <StyledFieldWrapper>
      {fieldArray.map((line) =>
        line.map((cell, key) => {
          return <StyledCell painted={cell} key={key} />;
        })
      )}
    </StyledFieldWrapper>
  );
};
