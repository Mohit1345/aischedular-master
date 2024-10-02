import React, { useState, useEffect } from "react";
import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import API from "./ChatbotAPI";
import Header from "./components/Header";

import "./styles.css";

function Chatbot({schedule}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(schedule);
    async function loadWelcomeMessage() {
      try {
        const response = await API.GetChatbotResponse("hi",schedule);
        setMessages([
          <BotMessage key="0" fetchMessage={() => Promise.resolve(response)} />
        ]);
      } catch (error) {
        console.error("Error fetching welcome message:", error);
      }
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    try {
      const userMessage = <UserMessage key={messages.length + 1} text={text} />;
      const botMessage = (
        <BotMessage
          key={messages.length + 2}
          fetchMessage={async () => await API.GetChatbotResponse(text,schedule)}
        />
      );
      const newMessages = messages.concat(userMessage, botMessage);
      setMessages(newMessages);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

export default Chatbot;
