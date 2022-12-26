import Chatbot from "react-chatbot-kit";
import "./styles.css";

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const App = () => {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default App;
