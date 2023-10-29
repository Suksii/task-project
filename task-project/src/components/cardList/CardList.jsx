import React from 'react';
import Card from "../card/Card.jsx";
import { FaSadCry } from "react-icons/fa";
import classes from "./CardList.module.scss";

const CardList = ({ taskList, searchTerm }) => {

    const groupedTasks = taskList.reduce((groups, task) => {
        if (task.status !== 'Deleted' && (searchTerm.length < 2 ? true : task.title.toLowerCase().includes(searchTerm.toLowerCase()))) {
            if (!groups[task.status]) {
                groups[task.status] = [];
            }
            groups[task.status].push(task);
        }
        return groups;
    }, {});
    const columns = Object.entries(groupedTasks).map(([status, tasks]) => (
        <div key={status}>
            <h3 className={`${classes.__status} ${classes[`__status-${status.toLowerCase().replace(' ', '-')}`]}`}>{status}</h3>
            {tasks.map((task, index) => (
                <div key={index}>
                    <Card
                        title={task.title}
                        description={task.description}
                        status={task.status}
                    />
                </div>
            ))}
        </div>
    ));

    return (
        // <div className={classes['__card-list']}>
        //     {taskList.filter((task) => task.status !== 'Deleted').length > 0 ? (
        //         taskList
        //             .filter((task) => task.status !=='Deleted' && (searchTerm.length < 2 ? task : task.title.toLowerCase().includes(searchTerm.toLowerCase())))
        //             .map((task, index) => (
        //             <div key={index}>
        //                 <Card
        //                     title={task.title}
        //                     description={task.description}
        //                     status={task.status}
        //                 />
        //             </div>
        //         ))
        //     )
        //         : (
        //         <div style={{display:"flex", flexDirection:"column", alignItems:"center", fontSize:"28px"}}>
        //             <h3>No tasks found!</h3>
        //             <FaSadCry size={60} />
        //         </div>
        //     )}
        // </div>
        <div className={classes['__sort-task']}>
            {columns.length > 0 ? (
                columns
            ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "28px" }}>
                    <h3>No tasks found!</h3>
                    <FaSadCry size={60} />
                </div>
            )}
        </div>

    );
};

export default CardList;