import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));

export default useStyles;
