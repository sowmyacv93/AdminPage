import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  fab:{
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(10),
  }
}));
export default function FormDialog({onSubmit}) {
  const [open, setOpen] = React.useState(false);
  
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.fab}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      <Dialog maxWidth ="sm" fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add note start here...
          </DialogContentText>
          <TextField
    
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
          <TextField

           
            multiline
            rows={4}
            margin="dense"
            id="details"
            label="Details"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}