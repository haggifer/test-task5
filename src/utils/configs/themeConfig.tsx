import { Color } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    palette: Palette;
    extra: {
      headerHeight: number;
      footerHeight: number;
      maxContentWidth: number;
    };
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
    extra?: {
      headerHeight: number;
      maxContentWidth: number;
    };
  }

  interface Palette {
    primarySpectrum: Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;
  }

  interface PaletteOptions {
    primarySpectrum?: Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;
  }
}

export const themeConfig: ThemeOptions = {
  spacing: 5,
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          minHeight: '40px',
          borderRadius: '10px',
          padding: '5px 20px',
          fontSize: '14px',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          '&, &:hover, &:active': {
            borderWidth: '2px',
          },
        }),
      },
    },
  },
  palette: {
    primarySpectrum: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
  extra: {
    headerHeight: 100,
    maxContentWidth: 1200,
  },
};
