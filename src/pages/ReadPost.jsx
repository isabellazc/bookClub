import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { supabase } from "../client.jsx";
import '../components/Card.css';
import './ReadPost.css';

const ReadPost = (props) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
        const {data} = await supabase
            .from('bookPosts')
            .select()
            .order('created_at', { ascending: false })

            setPost(data)
       }
       
         fetchData();
    }, [props]);

  
    
    return (
        <div className="posts-container">
                <h1 className="page-title">Look what people are reading right now!</h1>
                <div className="cards-container">
                {
                    
                    post && post.length > 0 ?
                    post.map((post ,index) => 
                    <Card id={post.id} name={post.name} description={post.description} recommend={post.recommend} author={post.author}/>
                    ) : <h2>{'No Characters yet'}</h2>
                }
                </div>

        </div>  
    )
}

export default ReadPost;     