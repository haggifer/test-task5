import { Box, Button, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultPublicPath } from '../../../routing/routes/publicRoutes';

export default function NotFound(): ReactElement {
  const navigate = useNavigate();

  const goPrevPage = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(defaultPublicPath);
  };

  return (
    <Box
      sx={() => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: '150px',
            lineHeight: '1',
            color: '#ff000266',
          }}
        >
          404
        </Typography>
        <Typography
          component="h2"
          sx={{
            marginBottom: '20px',
            fontSize: '35px',
            lineHeight: '1',
            color: '#ff000266',
          }}
        >
          Page not found!
        </Typography>

        <Box
          sx={{
            '> *:not(:first-child)': {
              marginLeft: '10px',
            },
          }}
        >
          <Button variant="outlined" onClick={goPrevPage}>
            Go Back
          </Button>
          <Button variant="outlined" onClick={goHome}>
            Go Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
