import React from 'react';
import PropTypes from 'prop-types';
import './YouTubePlayer.scss';

const YouTubePlayer = ({ videoId }) => {
    return (
        <div className="video-responsive">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube video"
            />
        </div>
    )
}

YouTubePlayer.propTypes = {
    videoId: PropTypes.string.isRequired
}

export default YouTubePlayer;
