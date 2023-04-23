import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Products from './Products'
function App() {
  const [items, setItems] = useState([])
  const id = "117286e1"
  const key = "8b9144aeca6ab3e3b4858b25c234ce94"
  const [search, setSearch] = useState("");
  const searchHandler = async (e) => {
    // e.preventDefault();
    const data = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}&from=0&to=15&calories=591-722&health=alcohol-free`);
    const jsonData = await data.json()
    setItems(jsonData.hits)
    // console.log(jsonData.hits);
    setSearch("")

  }
  return (
    <div>
      <div className='text-center'>
        <h2 className='recipe-title'>Food Recipe App</h2>
        <input type="text" onChange={(e) => { setSearch(e.target.value) }} value={search} className='input' /><br />
        <button className="searchBtn btn btn-primary" onClick={searchHandler}>Search</button>
      </div>
      {items.length < 1 ?
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
        : <Products items={items} />}
    </div>
  );
}

export default App;
