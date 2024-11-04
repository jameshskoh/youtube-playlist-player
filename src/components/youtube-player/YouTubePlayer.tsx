import LiteYouTubeEmbed from "react-lite-youtube-embed";

const YouTubePlayer = (props: {
  playlistId: string;
  thumbnailVideoId: string;
}) => {
  return (
    <div className="h-full w-full bg-black">
      <LiteYouTubeEmbed
        id={props.playlistId}
        playlistCoverId={props.thumbnailVideoId}
        adNetwork={false}
        playlist={true}
        title="YouTube embedded player"
        noCookie={true}
        wrapperClass="h-full w-full bg-contain bg-no-repeat bg-center relative"
        iframeClass="h-full w-full z-10 relative"
        playerClass="h-16 w-16 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] play-button-bg" // play button class
      />
    </div>
  );
};

export default YouTubePlayer;
