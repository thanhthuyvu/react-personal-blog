import React from 'react';
import Title from './Title';
import useFirestore from '../hooks/useFirestore';
import ContentCard from './ContentCard';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const Blog = () => {

    const {docs} = useFirestore('blogs');
    

    return(
        <div>
        <Title 
                title = 'BLOG'
                description = 'The stories of my life'
            />
        <Grid container spacing ={3} >
        {docs && docs.map(doc => (
                <ContentCard  
                    title = {doc.title}
                    text = {doc.text}
                    intro = {doc.intro}
                    createdAt = {doc.createdAt}
                    url = {doc.url}
                />
        ))}
        </Grid>

        </div>
    )
}

export default Blog;