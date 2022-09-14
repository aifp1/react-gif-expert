import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css';

import {GifExpertApp} from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
  //strictmode solo se aplica en desarrollo
  //strictmode ayuda a que todo se haga como esperamos disparando una dos veces la ejecucion del codigo
)
