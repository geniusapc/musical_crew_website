import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    function tick() {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }
    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{
     position:'absolute',
     top:'50%',
     left:'50%',
     transform:'translate(-50%, -50%)',
    }}>
      <CircularProgress variant="determinate" value={progress} color="primary" />
    </div>
  );
}