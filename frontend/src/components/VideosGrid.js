import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./VideosGrid.module.css";
import VideoCard from './VideoCard';

const api = axios.create({
    baseURL: 'http://localhost:3002', // Por el momento solo obtendré el video con id 1
});

const VideosGrid = () => {
    const [videos, setVideos] = useState([]);

    async function fetchVideos() {
        try {
            const response = await api.get('/datos');
            setVideos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <ul className={styles.videosGrid}>
            {videos.map(video => (
                <VideoCard video={video} />
            ))}
        </ul>
      );
};

export default VideosGrid;
