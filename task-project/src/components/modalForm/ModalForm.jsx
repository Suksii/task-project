import React, {useEffect} from "react";
import Input from "../forms/input/Input.jsx"
import Select from "../forms/select/Select.jsx";

const ModalForm = ({id, taskList, formData,setFormData}) => {

    useEffect(() => {
        if(id && taskList.length > 0) {
            setFormData({
                title: taskList[id - 1].title || "",
                description: taskList[id - 1].description || "",
                status: taskList[id - 1].status || ""
            })
        }
    }, [id, taskList])
    const changeForm = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div>
            <Input
                label="Type title"
                placeholder="Type new title"
                name="title"
                value={formData.title}
                onChange={(value) => changeForm("title", value)}
            />
            <Input
                label="Type description"
                placeholder="Type new description"
                name="description"
                value={formData.description}
                onChange={(value) => changeForm("description", value)}
            />
            <Select label="Choose status"
                    name="status"
                    value={formData.status}
                    onChange={(value) => changeForm("status", value)}
            />
        </div>
    )
}
export default ModalForm;