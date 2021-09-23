import React from 'react';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Home from './Home.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Home />
      <AmplifySignOut buttonText="Cerrar Sesión"></AmplifySignOut>
    </div>
  );
}
export default withAuthenticator(App, true);
