import MenuOption from "./menu-option/MenuOption.tsx";
import { PlaylistResult } from "../../services/Playlists.service.ts";
import { useNavigate } from "react-router-dom";

type SideMenuProps = {
  playlistResults: PlaylistResult[];
  handleSelectPlaylist: (playlistId: string) => void;
};

const SideMenu = (props: SideMenuProps) => {
  const navigate = useNavigate();

  const signOutHandler = () => {
    navigate("/logout");
  };

  return (
    <div className="w-64 overflow-scroll bg-gray-100">
      <div>Title</div>
      <div onClick={signOutHandler}>Sign out</div>
      {props.playlistResults.map((result) => {
        return (
          <MenuOption
            key={`${result.channelId}_${result.id}`}
            playlistId={result.id}
            title={result.title}
            handleSelectPlaylist={props.handleSelectPlaylist}
          />
        );
      })}
    </div>
  );
};

export default SideMenu;
