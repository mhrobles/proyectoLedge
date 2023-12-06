import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";

const ShowVideo = () => {
    const { id } = useParams();

    return (
        <div>
            <header className="App-header">
            <VideoPlayer id = {id}/>
            </header>
        </div>
      );
};

export default ShowVideo;
