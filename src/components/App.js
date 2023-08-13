
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"
const tabs = [
                {titles: "Tab 1", contents:"This is the content for Tab 1."},
                {titles: "Tab 2", contents:"This is the content for Tab 2."}, 
                {titles: "Tab 3", contents:"This is the content for Tab 3."}
            ]

const App = () => {
  return (
    <div>
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App;
