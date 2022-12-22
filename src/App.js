import { useState, useEffect } from "react";

import SearchBox from "./components/search-box/search-boc.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

const App = () => {
  console.log("render");

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
