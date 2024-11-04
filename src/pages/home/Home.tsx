import { useQuery } from "react-query";
import { getPlaylists } from "../../services/Playlists.service.ts";
import SideMenu from "../../components/side-menu/SideMenu.tsx";
import YouTubePlayer from "../../components/youtube-player/YouTubePlayer.tsx";

const Home = (props: { bearerToken: string }) => {
  const playlistId = "PLUl4u3cNGP62EXoZ4B3_Ob7lRRwpGQxkb";

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
    return <>Loading</>;
  }

  return (
    <div>
      <div className="flex h-screen">
        <SideMenu playlistResults={playlistResults} />
        <YouTubePlayer playlistId={playlistId} />
      </div>
    </div>
  );
};

export default Home;
