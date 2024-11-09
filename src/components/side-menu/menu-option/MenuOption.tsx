export type MenuOptionProps = {
  playlistId: string;
  title: string;
  handleSelectPlaylist: (playlistId: string) => void;
};

const MenuOption = (props: MenuOptionProps) => {
  return (
    <div>
      <button className="block w-full">
        <div
          onClick={() => props.handleSelectPlaylist(props.playlistId)}
          className="mx-3 my-1 flex h-24 items-center rounded-lg bg-white p-4 shadow-md"
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-amber-200"></div>
          </div>
          <div className="ml-4 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900">{props.title}</h3>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuOption;
