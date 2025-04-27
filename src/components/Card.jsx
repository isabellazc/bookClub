import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  './Card.css'

const Card = (props) =>  {

  const [agreed, setAgreed] = useState(0);
  const [disagreed, setDisagreed] = useState(0);

  const handleAgree = () => {
    setAgreed((prev) => prev + 1);
  }
  const handleDisagree = () => {
    setDisagreed((prev) => prev + 1);
  }

  

  return (
      <div className="Card">
          
          <h2 className="name">{props.name}</h2>
          <p className="description">{props.description}</p>
          {            props.recommend === "Yes" ?
            <p className="recommend">{"Do you recommend it? " + props.recommend + "⭐️"}</p> :
            <p className="recommend">{"Do you recommend it? " + props.recommend + "👎"}</p>
          }
          
          <p className="author">{"Made with love by " + props.author +" ❤️"}</p>

          <div className="button-container">
            <button className="agree-button" onClick={handleAgree}>
              Agree ({agreed})
            </button>
            <button className="disagree-button" onClick={handleDisagree}>
              Disagree ({disagreed})
            </button>
            <Link to={'/edit/'+ props.id}>
            <button>Edit</button>
            </Link>
          </div>

          

      </div>
  );
};

export default Card;