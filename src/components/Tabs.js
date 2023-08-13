import React, {useState} from "react";

const Tabs = ({tabs})=>{
    let [tabClicked, setTabClicked] = useState("");
    function handleClick(tab1){
        setTabClicked(tab1);
    }
    return (
            <div>
                    <ul>
                        {
                        tabs.map((tab1) => 
                             <li onClick={()=>handleClick(tab1)}>{tab1.titles}</li>
                        
                        )
                        }
                    </ul>
                    <p>{tabClicked.contents}</p>
            </div>
    )
    
}

export default Tabs;