// src/components/VideoPage.jsx
import React from "react";
import { Container } from "@mui/material";
import VideoPlayer from "./VideoPlayer";

const VideoPage = () => {
  const videoData = {
    title: "サンプル動画",
    description: "これはサンプル動画の説明です。",
    videoSrc:
      "https://videocdn.cdnpk.net/joy/content/video/free/2022-01/large_preview/220114_01_Drone_4k_017.mp4?token=exp=1728711172~hmac=ae2c91f9edc5f5e6203cd82d441a6c0656d0e104a6d1bf817c5ca2b5cc15bd1b", // サンプル動画のURL
  };

  return (
    <Container maxWidth="md">
      <VideoPlayer
        title={videoData.title}
        description={videoData.description}
        videoSrc={videoData.videoSrc}
      />
    </Container>
  );
};

export default VideoPage;
