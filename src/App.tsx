import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import './assets/scss/index.scss';
import { router } from './routing/router';
import CustomProgress from './components/common/CustomProgress/CustomProgress';

export default function App(): ReactElement {
  return (
    <>
      <CssBaseline enableColorScheme />

      <StyledEngineProvider injectFirst>
        <RouterProvider
          router={router}
          fallbackElement={<CustomProgress type="page" />}
        />
      </StyledEngineProvider>
    </>
  );
}
