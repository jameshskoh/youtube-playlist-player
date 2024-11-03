export type PlayerProps = {
  playlistId: string;
};

const Player = (props: PlayerProps) => {
  return (
    <iframe
      className="h-full w-full"
      data-testid="player"
      src={`https://www.youtube.com/embed/?listType=playlist&list=${props.playlistId}`}
      allowFullScreen
    >
      Unfortunately, the player iframe is not working!
    </iframe>
  );
};

export default Player;
