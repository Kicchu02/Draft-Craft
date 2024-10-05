import { Button, Snackbar, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

function Hello() {
  const [isSnackBarShown, setIsSnackBarShown] = useState(false);

  return (
    <Stack
      height="100vh"
      alignItems="center"
      justifyContent="center"
      gap="32px"
    >
      <Snackbar
        message="Button clicked."
        open={isSnackBarShown}
        onClose={() => {
          setIsSnackBarShown(false);
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Typography variant="h1">Notes App</Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          setIsSnackBarShown(true);
        }}
      >
        Click Me
      </Button>
    </Stack>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
