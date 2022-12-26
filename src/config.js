import { createChatBotMessage } from "react-chatbot-kit";

import DogPicture from "./DogPicture";
const botName = "Pranav";
const initMsg = `Hi! I'm ${botName}.....Type "hello" or "dog"`;
const config = {
  initialMessages: [createChatBotMessage(initMsg)],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />
    }
  ]
};

export default config;
