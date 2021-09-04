import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { Add as AddIcon } from '@material-ui/icons';
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from '@material-ui/core';

import useStyles from './styles';
import Alert from '../SuccessAlert';

const Add: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const classes = useStyles();

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container className={classes.modalContainer}>
            <form className={classes.form}>
              <div className={classes.item}>
                <TextField
                  id="standard-text-field"
                  label="Título"
                  className={classes.input}
                />
              </div>

              <div className={classes.item}>
                <TextField
                  id="outlined-text-field"
                  label="Descrição"
                  className={classes.input}
                  multiline
                  minRows={4}
                  maxRows={10}
                  variant="outlined"
                />
              </div>

              <div className={classes.item}>
                <TextField
                  id="standard-select-field"
                  label="Visibilidade"
                  select
                  value="public"
                >
                  <MenuItem value="public">
                    {' '}
                    Público para todos os amigos{' '}
                  </MenuItem>
                  <MenuItem value="private">
                    Reservado para uma lista de amigos
                  </MenuItem>
                  <MenuItem value="unlisted"> Público para todos </MenuItem>
                </TextField>
              </div>

              <div className={classes.item}>
                <FormLabel component="legend"> Quem pode comentar? </FormLabel>
                <RadioGroup defaultValue="Todo mundo">
                  <FormControlLabel
                    value="Todo mundo"
                    control={<Radio />}
                    label="Todo mundo"
                  />

                  <FormControlLabel
                    value="Todos os meus amigos"
                    control={<Radio />}
                    label="Todos os meus amigos"
                  />

                  <FormControlLabel
                    value="Somente um grupo específico de amigos"
                    control={<Radio />}
                    label="Somente um grupo específico de amigos"
                  />
                </RadioGroup>
              </div>

              <div className={classes.item}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setOpenAlert(true);

                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                >
                  Criar post
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: 15 }}
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Container>
        </Fade>
      </Modal>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Seu post foi criado
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
