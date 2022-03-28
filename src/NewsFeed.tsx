/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState } from 'react';

function NewsFeed() {
    const [data, setData] = useState(null);

    console.log(process.env);
    const onClick = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            );
            setData(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>OnClick</button>
            </div>
            {data && (
                <textarea rows={7} value={JSON.stringify(data, null, 2)} />
            )}
        </div>
    );
}

export default NewsFeed;
