export type MenuOptionProps = {
  title: string;
};

const MenuOption = (props: MenuOptionProps) => {
  return (
    <div className="m-1 flex h-24 items-center rounded-sm bg-white p-4 shadow-md">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-amber-200"></div>
      </div>
      <div className="ml-4 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900">{props.title}</h3>
      </div>
    </div>
  );
};

export default MenuOption;
