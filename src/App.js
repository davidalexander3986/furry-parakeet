import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello from V2</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

