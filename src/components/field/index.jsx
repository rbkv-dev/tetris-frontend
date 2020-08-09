import React, { useEffect, useState } from "react";
import { StyledFieldWrapper, StyledCell } from "./styled";


export const Field = () => {
  // =================================================//
  const [fieldArray, setField] = useState([])

  useEffect(() => {
    createField()
  }, [])


  const createField = () => {
    let array = [];

    for (let i = 0; i < 23; i++) {
      let line = [];
      for (let i = 0; i < 10; i++) {
        line.push(0);
      }
      array.push(line);
    }

    setField(array)
  }


  const createFigure = (fieldArray) => (e) => {
    const tetrominoe = {
      L_0: [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ],
    };
    let array = [...fieldArray];

    const currentFigure = tetrominoe.L_0;

    for (let i = 0; i < currentFigure.length; i++) {
      for (let j = 3; j < array[i].length - 4; j++) {
        if (array[i][j] !== currentFigure[i][j - 3]) {
          array[i][j] = currentFigure[i][j - 3];
        } else {
          array[i][j] = 0;
        }
      }
    }

    setField(array)
  }

  const startAnimation = (fieldArray) => (e) => {
    setInterval(() => {
      let array = [...fieldArray];

      for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] == 1) {
            array[i][j] = 0;
            array[i + 1][j] = 1;
          }

        }
      }
      setField(array)
    }, 1000)
  }
  // =================================================//

  return (
    <div>
      <StyledFieldWrapper onClick={createFigure(fieldArray)}>

        {fieldArray.length !== 0 ?
          <div>
            {fieldArray.map((line) => (
              line.map((cell, key) => {
                return <StyledCell painted={cell} key={key}></StyledCell>;
              })
            )
            )}
          </div>
          : null}
      </StyledFieldWrapper>
      <button onClick={startAnimation(fieldArray)}>button</button>

    </div>
  );
};
