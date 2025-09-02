import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export function Heading(props: { children: React.ReactNode }) {
  return (
    // AppBar é o equivalente a um cabeçalho/header.
    // position="static" faz com que ele se comporte como um elemento normal no fluxo da página.
    // O `sx` prop permite adicionar estilos customizados.
    <AppBar
      position='static'
      elevation={1} // sombra sutil
      color='default'
    >
      <Toolbar>
        {/* Typography é usado para todos os textos, garantindo consistência. */}
        <Typography variant='h5' component='h1' sx={{ color: green[700] }}>
          {props.children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
