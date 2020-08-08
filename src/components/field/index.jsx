import React from "react";
import { StyledFieldWrapper, StyledLine, StyledCell } from "./styled";

const fieldArray = [];

for (let i = 0; i < 23; i++) {
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

const currentFigure = tetrominoe.L_0;

fieldArray.map((line, lineIndex) => {
  line.map((cell, cellIndex, line) => {
    if (currentFigure.length === 3) {
      if (currentFigure[lineIndex] !== undefined) {
        currentFigure[lineIndex].map((tmp, figureIndex) => {
          console.log(lineIndex);
          fieldArray[lineIndex][figureIndex + 4] = tmp;
        });
      }
    } else if (currentFigure.length === 4) {
    }
  });
});

export const Field = () => {
  return (
    <StyledFieldWrapper>
      <div>
        {fieldArray.map((line) =>
          line.map((cell, key) => {
            return <StyledCell painted={cell} key={key}></StyledCell>;
          })
        )}
      </div>
    </StyledFieldWrapper>
  );
};
