import React from "react";
import { auth } from '../firebase'

const style = {
  button: `bg-grey-200 px-4 py-2 hover:bg-grey-100 text-white border`
};


const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  }

  return (
    <button onClick={() => {auth.signOut()}} className={style.button}>
      Log Out
    </button>
  );
};

export default LogOut;