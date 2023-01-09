import React, { useState } from "react";
import "./App.css";
import data from "./sampleData";
import AddNewCard from "./components/AddNewCard";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const [newData, setNewData] = useState(data);

  const increase = (name) => {
    //console.log("name is, increase", name);

    let copyData = { ...newData };
    for (let i = 0; i < copyData.users.length; i++) {
      if (copyData.users[i].name === name) {
        copyData.users[i].followers += 1;
      }
    }
    setNewData({ ...copyData });
  };

  const decrease = (name) => {
    //console.log("name is, decrease", name);

    let copyData = { ...newData };
    for (let i = 0; i < copyData.users.length; i++) {
      if (copyData.users[i].name === name) {
        copyData.users[i].followers -= 1;
      }
    }
    setNewData({ ...copyData });
  };

  const addUser = (user) => {
    let copyData = { ...newData };
    copyData.users.push(user);
    setNewData({ ...copyData });
  };

  return (
    <div className="root">
      <Header />
      {newData.users.map((item) => (
        <User
          icon={newData.icon}
          name={item.name}
          followers={item.followers}
          difference={item.difference}
          increase={increase}
          decrease={decrease}
        />
      ))}

      <AddNewCard addUser={addUser} />
    </div>
  );
}

export default App;
