/* eslint-disable react/prop-types */
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MuiButton from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    padding: '10px',
    position: 'absolute',
    top: '40px',
    width: '800px',
    height: '400px',
  },
  button: {
    backgroundColor: '#fff',
    color: 'grey',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'grey',
    },
  },
  dialogTitle: {
    paddingRight: '0px',
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const fullScreen = useMediaQuery('(max-width:800px)');
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
      fullScreen={fullScreen}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <MuiButton
            color="primary"
            style={{}}
            onClick={() => {
              setOpenPopup(false);
            }}
            className={classes.button}
          >
            <CloseIcon />
          </MuiButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
