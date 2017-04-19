/**
 * Created by Brian on 4/17/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // top curly braces in video argument is equivalent to line below
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt="youtube_image" src={imageUrl}></img>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;