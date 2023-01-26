import ReactPlayer from 'react-player';
import './video.css';


const VideoP = () => {
    return(
        <div className="videoo">
            <ReactPlayer 
            url='https://youtu.be/t0ykU7DuA9I'
            width='100%'
            controls
            playing
            muted
            />

        </div>
    );
}

export default VideoP;
