// components/backgroundVideo.js
import React from 'react';
import styles from './backgroundVideo.module.css';

const BackgroundVideo = ({ videoSource }) => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
