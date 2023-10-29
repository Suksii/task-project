import  React from "react";
import Modal from "../modal/Modal.jsx";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import "./Table.scss";
import ModalForm from "../modalForm/ModalForm.jsx";
import { headers } from "../../constants/tasks.js";
import { actionHeaders } from "../../constants/tasks.js";

const
    Table = ({ taskList, onClick, openModal, setOpenModal, formData, setFormData, openModalRow, activeTab, filteredTasks, setTaskList }) => {
        const handleEdit = (id) => {
            const updatedTaskList = taskList.map((task) => {
                if (task.id === id) {
                    return { ...task, ...formData };
                }
                return task;
            });
            setTaskList(updatedTaskList);
            setOpenModal(false);
        }
    return (
        <div>
            <div className="__table_container">
                <table className="__table">
                    <thead>
                        <tr>
                            {headers.map((header, index) => {
                                return (
                                    <th key={index}>{header.title}</th>
                                )
                            })}
                            {activeTab !== 5 && actionHeaders.map((header, index) => {
                                return (
                                    <th key={index}>{header.title}</th>
                                )
                            }
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.length > 0 ? filteredTasks.map((task) => {
                            return (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.status}</td>
                                    {activeTab !== 5 && <td>
                                        <FaEdit className="__change_icon" onClick={() => openModalRow(task.id)} />
                                        {openModal[task.id] && ( <Modal title={`Change ${task.id}. task`}
                                                                        closeModal={setOpenModal}
                                                                        onClick={() => handleEdit(task.id)}>
                                                                    <ModalForm taskList={taskList}
                                                                               id={task.id}
                                                                               formData={formData}
                                                                               setFormData={setFormData}/>
                                                                 </Modal>
                                                                    )}
                                        <FaTrashAlt className="__delete_icon"
                                                    onClick={() => onClick(task.id)}/>
                                    </td>}
                                </tr>
                            )
                        })
                        : (
                        <tr>
                            <td colSpan="5">
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <IoMdAlert style={{margin:"30px"}} size={60}/>
                                    <span style={{margin:"0 30px 30px 30px", fontSize:"30px"}}>No tasks!</span>
                                </div>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Table;