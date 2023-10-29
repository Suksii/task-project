import React, {useState} from "react";
import classes from "./App.module.scss"
import MainPage from "./pages/mainPage/MainPage.jsx";
import Button from "./components/button/Button.jsx";
import AdministrationPage from "./pages/administrationPage/AdministrationPage.jsx";
import {tasks} from "./constants/tasks.js";


function App() {

    const [toggle, setToggle] = useState("Go to admin page");
    const [taskList, setTaskList] = useState(tasks);

    return (
        <div>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button
                    style={{position: 'fixed'}}
                    className={classes['button_change']}
                    onClick={() => setToggle(prevState => prevState === "Go to admin page" ? "Go to main page" : "Go to admin page")}
                    label={toggle}/>
            </div>
            {toggle === "Go to admin page" ? <MainPage taskList={taskList} /> : <AdministrationPage taskList={taskList} setTaskList={setTaskList}/>}
        </div>
    )
}


export default App
