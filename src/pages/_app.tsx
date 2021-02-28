import { useState } from 'react';

import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {


  return (
<ChallengesProvider >
  <Component {...pageProps} />
</ ChallengesProvider>
  )
}

export default MyApp
 /**  Quando um elemento recebe algo dentro dele se chama childre*/