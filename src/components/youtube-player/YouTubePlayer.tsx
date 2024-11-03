export type PlayerProps = {
  playlistId: string;
};

const YouTubePlayer = (props: PlayerProps) => {
  return (
    <div className="box-border h-screen flex-1 overflow-y-auto">
      <iframe
        className="h-full w-full"
        data-testid="player"
        src={`https://www.youtube.com/embed/?listType=playlist&list=${props.playlistId}`}
        allowFullScreen
      >
        Unfortunately, the player iframe is not working!
      </iframe>
    </div>
  );
};

export default YouTubePlayer;
