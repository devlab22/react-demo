import './App.css';
import React, { useState, useEffect } from 'react';
import { MyVerticalTabs, GridView } from './components';
import { About } from './pages';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {

    let tmp = []


    tmp.push({ "id": 0, "name": `About`, 'link': "/about", "component": <About /> })
    tmp.push({ "id": 1, "name": `Data`, 'link': "/about", "component": <GridView /> })

    setItems(tmp)

  }, [])

  const handleOnClick = (id) => {
    //console.log(id)

    const item = items.filter(item => item.id === id)[0]
    console.log(item)
  }
  return (
    <div className="App">
      {/*  <MyVerticalTabs
        items={items}
        onClick={handleOnClick}
      /> */}

      <GridView />
    </div>
  );
}

export default App;
