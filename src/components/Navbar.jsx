import React from "react";
import { auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`
}

export default function Navbar() {

  const [user] = useAuthState(auth);
  console.log(user);

  return (
  <div className={style.nav}>
    <h1 className={style.heading}>My Chat App</h1>
    <SignIn />
  </div>
  )
}
