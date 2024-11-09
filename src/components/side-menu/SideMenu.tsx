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
    <div className="w-96 overflow-scroll bg-gray-100">
      <div className="mx-2 my-2 flex items-center justify-between">
        <div className="flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="yt-ringo2-svg_yt16"
            width="30"
            height="20"
            viewBox="0 0 30 20"
            focusable="false"
            aria-hidden="true"
          >
            <g>
              <path
                d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
                fill="#FF0033"
              ></path>
              <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
            </g>
          </svg>
          <h2 className="mx-1 text-2xl font-bold text-gray-900">Player</h2>
        </div>
        <button
          className="flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          onClick={signOutHandler}
        >
          Sign out
        </button>
      </div>
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
