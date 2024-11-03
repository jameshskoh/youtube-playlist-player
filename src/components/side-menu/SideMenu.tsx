import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import MenuOption from "./menu-option/MenuOption.tsx";
import { PlaylistResult } from "../../services/Playlists.service.ts";

type SideMenuProps = {
  playlistResults: PlaylistResult[];
};

const SideMenu = (props: SideMenuProps) => {
  return (
    <div className="w-64 overflow-scroll bg-gray-100">
      <div>Title</div>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            {props.playlistResults.map((result) => {
              return (
                <NavigationMenu.Link>
                  <MenuOption title={result.title} />
                </NavigationMenu.Link>
              );
            })}
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default SideMenu;
