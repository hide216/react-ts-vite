import { Box, Typography } from "@mui/material";
interface VideoPlayerProps {
  title: string;
  description: string;
  videoSrc: string; // MP4動画のURL
}

const VideoPlayer = ({ title, description, videoSrc }: VideoPlayerProps) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#141414", color: "white" }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
        {title}
      </Typography>
      <video controls style={{ width: "100%", borderRadius: "8px" }}>
        <source src={videoSrc} />
        Your browser does not support the video tag.
      </video>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default VideoPlayer;
