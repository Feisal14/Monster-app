import "./style.css";
import { useState, useEffect } from "react";

function App() {
  const [monsters, setMonsters] = useState({
    monsters: [],
  });

  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        setMonsters(() => {
          return { monsters: users };
        })
      );
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  // filter users name using input search bar
  const filterMonseters = monsters.monsters.filter((mon) => {
    return mon.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <>
      <input
        className="search-box"
        type="search"
        placeholder="search name"
        onChange={handleInputChange}
      />
      <h1>
        Hello
        {filterMonseters.map((e) => (
          <li>{e.name}</li>
        ))}{" "}
      </h1>
    </>
  );
}

export default App;
