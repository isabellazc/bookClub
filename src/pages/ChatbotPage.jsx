import { TextField } from "@mui/material"
import "./ChatbotPage.css";
import MessageBubble from "../components/messageBubble.jsx";


const ChatbotPage = () => {

    return (
        <div>
            <div className="page-title">Ask Wisely 🔮</div>
            <div className="chat-page-container">
                <div className="chat-container">

                    <MessageBubble authoe="bot" text="A React Fragment is a lightweight wrapper that allows you to group multiple elements without adding an extra node to the DOM."/>

                    <MessageBubble author="bot" text="???"/>


                </div>
               <TextField id="standard-basic" label="What do you have in mind today? " variant="standard" />
            </div>

        </div>
    )

}

export default ChatbotPage