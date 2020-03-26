import React from 'react';
import Routes from './src/routes'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

// Qualquer CONTAINER vai utilizar a tag VIEW
// Qualquer TEXTO vai utilizar a tag TEXT

export default function App() {
  return (
    <Routes/>
  );
}
