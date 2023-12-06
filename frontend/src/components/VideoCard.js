import React from "react";
import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";


const VideoCard = ({ video }) => {
    return (
    <li key={video.id} className={styles.videoCard}>
        <Link to={`/${video.id}`} className={styles.videoLink}>
        <img src={video.img} alt={video.name} className={styles.videoImage} width={360} height={202} />
        <div>
         <h2>{video.name}</h2>
        </div>
        </Link>
    </li>
    );
};

export default VideoCard;
