import React, { ReactElement } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultPublicPath } from "../../../routing/routes/publicRoutes";

export default function Header(): ReactElement {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <Box component="header" sx={theme => ({
      display: 'flex',
      justifyContent: 'center',
      background: theme.palette.primary.dark,
    })}>
      <Box sx={theme => ({
        display: 'flex',
        justifyContent: isXs ? 'center' : undefined,
        width: '100%',
        maxWidth: theme.extra.maxContentWidth,
        height: theme.extra.headerHeight,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '15px 20px',
      })}>
        <Box
          component={Link}
          to={defaultPublicPath}
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            '*': {
              color: theme.palette.primary.contrastText,
              fill: theme.palette.primary.contrastText,
              stroke: theme.palette.primary.contrastText,
            }
          })}
        >
          <Box component={Logo} sx={{
            mr: 3,
            height: '60px',
          }}/>
          <Typography variant="subtitle1" sx={{
            fontSize: '30px',
          }}>Tree View</Typography>
        </Box>
      </Box>
    </Box>
  )
}
