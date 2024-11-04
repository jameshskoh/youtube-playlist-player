import MenuOption from "./menu-option/MenuOption.tsx";
import { PlaylistResult } from "../../services/Playlists.service.ts";

type SideMenuProps = {
  playlistResults: PlaylistResult[];
  handleSelectPlaylist: (playlistId: string) => void;
};

const SideMenu = (props: SideMenuProps) => {
  return (
    <div className="w-64 overflow-scroll bg-gray-100">
      <div>Title</div>
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
