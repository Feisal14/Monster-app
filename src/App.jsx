import "./style.css";
import CardList from "./Components/card-list/cardList.jsx";
import SearchBox from "./Components/search-box/SearchBox";
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
    <div>
      <SearchBox onChangeHandler = {handleInputChange} />
    <h1 className="app-title">The Dumbest Monsters</h1>
      <CardList monsters={filterMonseters} />
    </div>
  );
}

export default App;
