import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from "../client.jsx";

const EditPost= () => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", description: "", recommend: "", author: ""});

    console.log("ID from useParams:", id);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('bookPosts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching posts :(", error);
            } else {
                setPost(data);
            }
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        });
    }

    const updatePost = async (event) => {   
        event.preventDefault();

        await supabase
            .from('bookPosts')
            .update({name: post.name, description: post.description, recommend: post.recommend, author: post.author})
            .eq('id', id);
    

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('bookPosts')
            .delete()
            .eq('id', id);

        window.location = "/";
    }


    return (
        <div>
            <div className="page-title">Edit your post</div>

                

            <form>
            {/* Author */}
            <label for="name"> Name of the book</label> <br />
            <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
            <br/>
            {/* Description */}
            <label htmlFor="description">Description</label><br />
            <textarea className='text-container' id="description" name="description" value={post.description} onChange={handleChange} rows="4" cols="50"></textarea><br />
            <br/>
            {/* Recommended */}
            <label>Would you recommend this book?</label>
    <div className="radio-container">
      <div>
        <input
          name="recommend"
          className="radio-input"
          type="radio"
          id="recommend-no"
          value="No"
          checked={post.recommend === "No"} 
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
          checked={post.recommend === "Yes"} 
          onChange={handleChange}
        />
        <label className="radio-label" htmlFor="recommend-yes">Yes</label>
      </div>
    </div>

            {/* Author */}
            <label for="author">Author</label><br />
            <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />

            <br />

            <input className='editButton' type="submit" value="Submit" onClick ={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;