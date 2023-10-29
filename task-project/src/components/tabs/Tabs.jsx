import React from "react";
import {tabs} from "../../constants/tabs.js";
import classes from "./Tabs.module.scss";

const Tabs = ({activeTab, onTabClick}) => {
    return (
        <div className={classes['__tabs']}>
            {tabs.map((tab, index) => {
                return (
                    <div key={index}
                         className={`${classes['__tab']} ${activeTab === index ? classes['active'] : ''}`}
                         onClick={() => onTabClick(index)}>
                        {tab}
                    </div>
                )
            }
            )}
        </div>
    )
}
export default Tabs;