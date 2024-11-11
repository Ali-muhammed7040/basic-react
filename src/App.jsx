// src/App.js

import React from "react";
import { complete } from "./Component/ChatbotComponent";
import ChatArea from "./Component/ChatArea";
import Footer from "./Component/Footer";
import ConversationManager from "@chatbotkit/react/components/ConversationManager";
import TicTacToe from "./Component/TicTacToe";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to the Chatbot App</h1>
      <ConversationManager endpoint={complete}>
        <div className="mx-auto w-full max-w-2xl py-20 space-y-6">
          <p className="text-lg text-gray-700">
            Please use the area below to book an appointment with me. My
            intelligent assistant will help you with selecting the right time
            and date for your appointment.
          </p>
          <ChatArea />
          <Footer />
        </div>
      </ConversationManager> */}
      <TicTacToe />
    </div>
  );
}

export default App;
