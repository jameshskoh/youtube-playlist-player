import YouTubePlayer from "./components/youtube-player/YouTubePlayer.tsx";
import SideMenu from "./components/side-menu/SideMenu.tsx";
import { useQuery } from "react-query";
import { getPlaylists } from "./services/Playlists.service.ts";

function App() {
  const playlistId = "PLUl4u3cNGP62EXoZ4B3_Ob7lRRwpGQxkb";

  const {
    data: playlistResults,
    error,
    isLoading,
  } = useQuery("", async () => getPlaylists("invalid-token"));

  if (error) {
    return <>{`Failed loading playlists! Error: ${error}`}</>;
  }

  if (isLoading || !playlistResults) {
    return <>Loading</>;
  }

  return (
    <div className="flex h-screen">
      <SideMenu playlistResults={playlistResults} />
      <YouTubePlayer playlistId={playlistId} />
    </div>
  );
}

export default App;
