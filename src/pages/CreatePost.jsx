import {React, useState} from 'react';
import { supabase } from "../client.jsx";

const CreatePost= () => {
    const [book, setBook] = useState({name: "", description: "", recommend: "", author: ""});
    

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('bookPosts')
            .insert({name: book.name, description: book.description, recommend: book.recommend, author: book.author})
            .select();

        window.location = "/";
    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        setBook((prevBook) => {
            return {
                ...prevBook,
                [name]: value,
            }
        })
    }

   

    return (
        <div>
        <form>
            <div className="page-title">Tell us about the book you are currently reading!</div>
                <label for="name">Name Of The Book</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
            <br/>

            <label for="description">What do you think about it?</label> <br />
            <div>
                <textarea value={book.description} type="text" id="description" name="description" className = "text-container" rows="5" cols="33" onChange={handleChange}>
                    This is the default comment...  
                </textarea>
            </div>
             
            
            <label>Would you recommend this book?</label>
        <div className="radio-container">
          <div>
            <input
              name="recommend"
              className="radio-input"
              type="radio"
              id="recommend-no"
              value="No"
              checked={book.recommend === "No"}
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="recommend-no">No</label>
          </div>

          <div>
            <input
              name="recommend"
              className="radio-input"
              type="radio"
              id="recommend-yes"
              value="Yes"
              checked={book.recommend === "Yes"}
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="recommend-yes">Yes</label>
          </div>
        </div>
        <br/>

        <label for="author">Post created by:</label> <br />
        <input type="text" id="author" name="author" onChange={handleChange} /><br />
        <br/>

            <input type="submit" value="Submit" onClick ={createPost}/>
        </form>
    </div>
    )
}

export default CreatePost;