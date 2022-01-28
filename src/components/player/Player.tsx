import React from 'react';
import "./style.css";

const Player = (props: { streamUrl: string }) => {
  return (
    <div>
      <iframe
        title='Movie'
        src={props.streamUrl}
        allowFullScreen
        allow='autoplay'
        scrolling='no'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default Player;
