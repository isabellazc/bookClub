import {React, useState} from 'react';
import "./MessageBubble.css"


const MessageBubble = (props) => {


    return(
        <>
       
            {props.author === "bot" ? ( //!!! maybe there is a better way to to this inneficient
                //bot
                <div className="bubble bot-bubble">
                    <p>
                        {props.text}
                    </p>
                </div>
            ) : (
                //user
                <div className="bubble user-bubble">
                    <p>
                        {props.text}
                    </p>
                </div>
            )}   
         </>
        
            
    )

}

export default MessageBubble