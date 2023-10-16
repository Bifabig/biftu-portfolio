import React from 'react';
import { signInWithGoogle } from '../../firebase';

const Login = () => (
  <div className="dashboard">
    <button onClick={signInWithGoogle} type="submit">
      Sign In With Google
    </button>
  </div>
);

export default Login;
