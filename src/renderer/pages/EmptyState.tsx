import { Button, colors, Snackbar, Stack, Typography } from '@mui/material';
import { ListX, Plus } from 'lucide-react';
import React, { useState } from 'react';

export default function EmptyState(): React.ReactElement {
  const [isSnackbarShown, setIsSnackbarShown] = useState(false);

  const getAddNewNoteButton = (): React.ReactElement => {
    return (
      <Button
        size="large"
        variant="outlined"
        onClick={() => {
          setIsSnackbarShown(true);
        }}
      >
        <Stack direction="row" gap={1}>
          <Plus />
          <Typography variant="button">Add new note</Typography>
        </Stack>
      </Button>
    );
  };

  return (
    <Stack height="100vh" alignItems="center" justifyContent="center" gap={2}>
      <Snackbar
        open={isSnackbarShown}
        onClose={() => {
          setIsSnackbarShown(false);
        }}
        message="This feature is still under development."
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <ListX size={256} color={colors.grey[800]} />
      <Typography variant="h4">No Notes Found</Typography>
      <Typography variant="subtitle1">Please create a new note.</Typography>
      {getAddNewNoteButton()}
    </Stack>
  );
}
