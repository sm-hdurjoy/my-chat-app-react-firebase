import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 max-w-[782px] w-full flex text-xl fixed bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[150px] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (messageInput === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: messageInput,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setMessageInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={messageInput}
        onChange={(event) => setMessageInput(event.target.value)}
        className={style.input}
        type="text"
        placeholder="Type Message"
      />
      <button className={style.button} type="submit">
        SEND
      </button>
    </form>
  );
};

export default SendMessage;
