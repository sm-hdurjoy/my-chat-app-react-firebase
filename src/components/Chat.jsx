import Message from "./Message";
import { db } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {/* Chat Message Component */}

        {messages && messages.map((message) => (
          <Message key={message.id} message={message} />
        ) )}

      </main>
      {/* Send Message Component */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
