import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import Album from "./type";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
        (res) => res.json().then((data) => setAlbums(data))
      );
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Pagination albums={albums} itemsPerPage={6} />
    </div>
  );
}

export default App;
