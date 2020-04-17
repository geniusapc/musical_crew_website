import React from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//       height: '80vh',
//       '& > * ': {
//         marginTop: theme.spacing(8),
//         marginLeft: theme.spacing(2),
//       },
//     },
//   }),
// );

export default function Loader() {
  // const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{
      height: '80vh',
      textAlign: 'center',
      margin: '5rem auto',
    }}>
      <CircularProgress variant="determinate" value={progress} color="primary" />
    </div>
  );
}