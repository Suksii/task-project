import React,{useState} from "react";
import CardList from "../../components/cardList/CardList.jsx";
import Search from "../../components/search/Search.jsx";
import Title from "../../components/title/Title.jsx";

const MainPage = ({taskList}) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Title/>
            {taskList.filter((task) => task.status !== 'Deleted').length > 0 && <Search searchTerm={searchTerm}
                                                                                                 setSearchTerm={setSearchTerm}/>}
            <CardList taskList={taskList}
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}/>
        </div>
    )
}
export default MainPage;