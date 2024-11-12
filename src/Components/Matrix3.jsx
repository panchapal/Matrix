import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function ResultTable({ matrix }) {
  return (
    <Box sx={{ border: 1, borderColor: 'grey', borderRadius: 1, padding: 2 }}>
      <Typography variant="h6" gutterBottom align="center">
        Result Matrix
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {matrix.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex} justifyContent="center">
            {row.map((cell, colIndex) => (
              <Grid item key={colIndex} xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'grey',
                    padding: 1,
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body1">{cell}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ResultTable;
