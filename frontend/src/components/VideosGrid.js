import React, { useState, useEffect } from 'react';
import api from '../services/api';
import styles from "./VideosGrid.module.css";
import VideoCard from './VideoCard';

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
