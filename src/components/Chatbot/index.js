// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// import BotMessage from "./components/BotMessage";
// import UserMessage from "./components/UserMessage";
// import Messages from "./components/Messages";
// import Input from "./components/Input";

// import API from "./ChatbotAPI";

// import "./styles.css";
// import Header from "./components/Header";

// function Chatbot(props) {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
    
//     async function loadWelcomeMessage() {
//       setMessages([
//         <BotMessage
//           key="0"
//           fetchMessage={async () => await API.GetChatbotResponse(scheduleID,"hi")}
//         />
//       ]);
//     console.log("This is schedule i\d")
//     console.log(props.scheduleID);
//     }
//     loadWelcomeMessage();
//   }, []);

//   const send = async text => {
//     const newMessages = messages.concat(
//       <UserMessage key={messages.length + 1} text={text} />,
//       <BotMessage
//         key={messages.length + 2}
//         fetchMessage={async () => await API.GetChatbotResponse(scheduleID,text)}
//       />
//     );
//     setMessages(newMessages);
//   };

//   return (
//     <div className="chatbot">
//       <Header />
//       <Messages messages={messages} />
//       <Input onSend={send} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Chatbot />, rootElement);
