/* eslint-disable react/button-has-type */
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core';
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
import { Button, TopToolbar } from 'react-admin';

const useStyles = makeStyles(theme => ({
    alignCard: {
        justifyContent: 'space-around',
    },
    btnCategory: {
        marginRight: '1rem',
        backgroundColor: theme.palette.success.light,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
        },
        '& span': {
            paddingLeft: 0,
        },
    },
}));

const NewsFeedTopToolbar = ({ onClick }: any) => {
    const classes = useStyles();

    return (
        <TopToolbar>
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('all');
                }}
                label="전체보기"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('business');
                }}
                label="비즈니스"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('entertainment');
                }}
                label="엔터테인먼트"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('health');
                }}
                label="건강"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('science');
                }}
                label="과학"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('technology');
                }}
                label="기술"
            />
            <Button
                variant="contained"
                className={classes.btnCategory}
                onClick={() => {
                    onClick('sports');
                }}
                label="스포츠"
            />
        </TopToolbar>
    );
};

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
    const [category, setCategory] = useState('all');
    const classes = useStyles();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
                );

                console.log('response', response);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };

        fetchData();
    }, [category]);

    if (loading) {
        return (
            <>
                <NewsFeedTopToolbar onClick={setCategory} />
                <Card>
                    <CardContent>{'대기중...'}</CardContent>
                </Card>
            </>
        );
    }

    if (articles.length === 0) {
        return null;
    }

    return (
        <>
            <NewsFeedTopToolbar onClick={setCategory} />
            <Card>
                <CardContent>
                    <Grid container className={classes.alignCard}>
                        {articles.map((article: any) => (
                            <NewsItem article={article} />
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default NewsFeed;
