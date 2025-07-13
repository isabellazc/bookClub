import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { supabase } from "../client.jsx";
import '../components/Card.css';
import './ReadPost.css';
import TextField from '@mui/material/TextField';

const ReadPost = (props) => {

    const [post, setPost] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
       const fetchData = async () => {

        const {data} = await supabase
            .from('bookPosts')
            .select('*')
            .order('created_at', { ascending: false })

            setPost(data)
            setFilteredResults(data); //default view = all books
       }
       
         fetchData();

    }, [props]); //changes when props changes it 

    //filter books using the search feature
    useEffect(() =>{

        const results = post.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));

        setFilteredResults(results);

    }, [searchInput, post] //runs when searchInput or book changes
    )

  
    
    return (
        <div>

            <div className="posts-page-header">
                <h1 className="page-title">Look what people are reading right now!</h1>
                <TextField id="standard-basic" label="Search" variant="standard" onChange={(inputString) => setSearchInput(inputString.target.value)}/>
            </div>

            <div className="page-container">

                    <div className="cards-container">
                    
                    {
                        filteredResults && filteredResults.length > 0 ?
                        filteredResults.map((item) => 
                        <Card id={item.id} name={item.name} description={item.description} recommend={item.recommend} author={item.author}/>
                        ) : <h2>{"Sorry I couldn't find anything like that. Try again :("}</h2>
                    }
                    </div>

            </div>  
        </div>
    )
}

export default ReadPost;   