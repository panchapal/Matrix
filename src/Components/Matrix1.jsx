import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import MatrixTable from './Matrix2';
import ResultTable from './Matrix3';

function Matrix1() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [resultMatrix, setResultMatrix] = useState(null);

  const handleGenerate = () => {
    const newMatrixA = [];
    const newMatrixB = [];

    for (let i = 0; i < rows; i++) {
      const rowA = [];
      const rowB = [];

      for (let j = 0; j < columns; j++) {
        rowA.push(i + j);
        rowB.push(i * j);
      }
      newMatrixA.push(rowA);
      newMatrixB.push(rowB);
    }
    setMatrixA(newMatrixA);
    setMatrixB(newMatrixB);
    setResultMatrix(null);
  };

  const handleMatrixChange = (matrix, row, col, value) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[row][col] = value;
    if (matrix === matrixA) {
      setMatrixA(newMatrix);
    } else {
      setMatrixB(newMatrix);
    }
  };

  const handleOperation = (operation) => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      const resultRow = [];
      for (let j = 0; j < columns; j++) {
        const a = matrixA[i][j];
        const b = matrixB[i][j];
        let cellResult;
        if (operation === 'add') {
          cellResult = a + b;
        } else if (operation === 'subtract') {
          cellResult = a - b;
        } else if (operation === 'multiply') {
          cellResult = a * b;
        } else {
          cellResult = 0;
        }
        resultRow.push(cellResult);
      }
      result.push(resultRow);
    }
    setResultMatrix(result);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Matrix
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={2}>
        <Grid item>
          <TextField
            type="number"
            label="Rows"
            // value={rows}
            onChange={(e) => setRows(+e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            label="Columns"
            // value={columns}
            onChange={(e) => setColumns(+e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>   
      </Grid>

      <Grid container justifyContent="center" mb={2}>
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
      </Grid>

      <Grid container spacing={3} justifyContent="center" mb={2}>
        <Grid item>
          <MatrixTable matrix={matrixA} onChange={(row, col, value) => handleMatrixChange(matrixA, row, col, +value)} />
        </Grid>
        <Grid item>
          <MatrixTable matrix={matrixB} onChange={(row, col, value) => handleMatrixChange(matrixB, row, col, +value)} />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" mb={2}>
        <Grid item>
          <Button variant="contained" onClick={() => handleOperation('add')}>
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleOperation('subtract')}>
            Subtract
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleOperation('multiply')}>
            Multiply
          </Button>
        </Grid>
      </Grid>

      {resultMatrix && (
        <div>
          <Typography variant="h5" gutterBottom align="center">
            Result Matrix
          </Typography>
          <ResultTable matrix={resultMatrix} />
        </div>
      )}
    </div>
  );
}
export default Matrix1;
