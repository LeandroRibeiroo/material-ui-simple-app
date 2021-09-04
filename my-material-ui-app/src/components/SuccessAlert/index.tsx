import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

import { NewAlertProps } from '../../utils/interfaces';

const Alert = ({ children, onClose, severity }: NewAlertProps): JSX.Element => {
  return (
    <MuiAlert
      onClose={onClose}
      severity={severity}
      elevation={6}
      variant="filled"
    >
      {children}
    </MuiAlert>
  );
};

export default Alert;
