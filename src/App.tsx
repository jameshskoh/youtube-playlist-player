import Player from "./player/Player.tsx";

function App() {
  const playlistId = "PLUl4u3cNGP62EXoZ4B3_Ob7lRRwpGQxkb";

  return (
    <div className="box-border h-screen">
      <Player playlistId={playlistId} />
    </div>
  );
}

export default App;
