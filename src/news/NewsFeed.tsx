/* eslint-disable react/button-has-type */
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsItem = ({ article }: any) => {
    console.log(article);
    const { title, description, url, urlToImage } = article;

    return (
        <Card
            sx={{
                marginBottom: '1rem',
                marginRight: '1rem',
                maxWidth: '300px',
                minHeight: '300px',
            }}
        >
            <CardActionArea
                onClick={() => {
                    location.href = url;
                }}
            >
                {urlToImage && <CardMedia component="img" image={urlToImage} />}
                <CardHeader title={title} subheader={description} />
            </CardActionArea>
        </Card>
    );
};

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
                );

                console.log('response', response);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                {'대기중...'}
            </Box>
        );
    }

    if (articles.length === 0) {
        return null;
    }

    return (
        <Grid container>
            {articles.map((article: any) => (
                <NewsItem article={article} />
            ))}
        </Grid>
    );
};

export default NewsFeed;
