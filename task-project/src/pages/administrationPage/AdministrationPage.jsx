import React, {useState} from "react";
import Table from "../../components/table/Table.jsx";
import Button from "../../components/button/Button.jsx";
import classes from "../../App.module.scss"
import Modal from "../../components/modal/Modal.jsx";
import ModalForm from "../../components/modalForm/ModalForm.jsx";
import Tabs from "../../components/tabs/Tabs.jsx"
const AdministrationPage = ({taskList, setTaskList}) => {

    const [openModal, setOpenModal] = useState({});
    const [selectedTask, setSelectedTask] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: ""
    })
    const filteredTasks = taskList.filter((task) => {
        if (activeTab === 0) {
            return task.status !== "Deleted";
        } else if (activeTab === 1) {
            return task.status === "Wishlist";
        } else if (activeTab === 2) {
            return task.status === "To Do";
        } else if (activeTab === 3) {
            return task.status === "In Progress";
        } else if (activeTab === 4) {
            return task.status === "Done";
        } else if (activeTab === 5) {
            return task.status === "Deleted";
        }
        return true;
    });
    const handleDelete = (id) => {
        const updatedTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, status: "Deleted" };
            }
            return task;
        });
        const updatedTaskListWithIds = updatedTaskList
            .filter((task) => task.status !== "Deleted")
            .map((task, index) => ({
                ...task,
                id: index + 1,
            }));
        const deletedTasks = updatedTaskList
            .filter((task) => task.status === "Deleted")
            .map((task, index) => ({
                ...task,
                id: index + 1,
            }));
        const finalTaskList = updatedTaskListWithIds.concat(deletedTasks);

        setTaskList(finalTaskList);
    };
    const handleAdd = () => {
        const newTask = {
            ...formData,
            id: taskList.length + 1,
        };
        const updatedTaskList = [...taskList, newTask];
        setTaskList(updatedTaskList);
        setOpenModal(false);
    }
    const openModalRow = (id) => {
        setOpenModal((prevState) => ({
            ...prevState,
            [id]: true
        }))
        setSelectedTask(id);
    }
    const openModalAdd = () => {
        setFormData(
            {
                title: "",
                description: "",
                status: ""
            }
        )
        setOpenModal((prevState) => ({
            ...prevState,
            add: true
        }))
        setSelectedTask(null);
    }
    return (
        <div>
            {taskList.length > 0 && <Tabs activeTab={activeTab} onTabClick={setActiveTab}/>}
            <Table  filteredTasks={filteredTasks}
                    taskList={taskList}
                    onClick={handleDelete}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                    formData={formData}
                    setFormData={setFormData}
                    openModalRow={openModalRow}
                    activeTab={activeTab}
                    setTaskList={setTaskList}
            />
            <div style={{marginLeft: '15%'}}>
                <Button label="Add new task"
                        className={classes['button_change']}
                        onClick={openModalAdd} />
                {openModal.add && ( <Modal title="Add new task"
                                           closeModal={setOpenModal}
                                            onClick={handleAdd}>
                                        <ModalForm
                                            formData={formData}
                                            setFormData={setFormData}
                                        />
                                    </Modal>
                )}
            </div>
        </div>
    )
}
export default AdministrationPage;

