import React, {useState} from 'react';
import { redirect } from 'react-router-dom';
import './Login.scss';
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  console.log(auth?.currentUser?.email);
  const signIn = async (e) => {
    try {
      e.preventDefault();
      // await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      redirect('/home');
    }catch (e) {
      console.error(e);
    }
  };
  return (
    <div className='login'>
      <form>
        <input
          onChange={(e) => {setEmail(e.target.value)}}
          type="text"
          placeholder='Email...'
        />
        <br/> <br/>
        <input
          onChange={(e) => {setPassword(e.target.value)}}
          type='password'
          placeholder='Password...'
        />
        <br/> <br/>
        <button
          onClick={(e) => signIn(e)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
