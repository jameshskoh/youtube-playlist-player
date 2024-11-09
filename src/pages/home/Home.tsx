import { useQuery } from "react-query";
import {
  getPlaylists,
  PlaylistResult,
} from "../../services/Playlists.service.ts";
import SideMenu from "../../components/side-menu/SideMenu.tsx";
import { useState } from "react";
import YouTubePlayer from "../../components/youtube-player/YouTubePlayer.tsx";
import LoadingIndicator from "../../components/loading/LoadingIndicator.tsx";

const Home = (props: { bearerToken: string }) => {
  const [playlistId, setPlaylistId] = useState<string | null>(null);

  const {
    data: playlistResults,
    error,
    isLoading,
  } = useQuery(props.bearerToken, async () => getPlaylists(props.bearerToken), {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
  });

  if (error) {
    return <>{`Failed loading playlists! Error: ${error}`}</>;
  }

  if (isLoading || !playlistResults) {
    return (
      <div className="mt-[30vh] flex h-screen w-full flex-col items-center">
        <LoadingIndicator message="Loading playlists, please wait ..." />
      </div>
    );
  }

  const pickPlaylistId = () => {
    if (playlistId !== null) {
      return playlistId;
    }

    return playlistResults![0].id;
  };

  const handleSelectPlaylist = (playlistId: string) => {
    setPlaylistId(playlistId);
  };

  const finalPlaylistId = pickPlaylistId();

  const getThumbnailVideoIdByPlaylistId = (
    playlistResults: PlaylistResult[],
    playlistId: string,
  ): string => {
    return playlistResults.find((result) => result.id === playlistId)!
      .thumbnailVideoId;
  };

  return (
    <div>
      <div className="flex h-screen">
        <SideMenu
          playlistResults={playlistResults}
          handleSelectPlaylist={handleSelectPlaylist}
        />
        <YouTubePlayer
          playlistId={finalPlaylistId}
          thumbnailVideoId={getThumbnailVideoIdByPlaylistId(
            playlistResults,
            finalPlaylistId,
          )}
        />
      </div>
    </div>
  );
};

export default Home;
