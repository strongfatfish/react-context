import React, {useContext, useState} from "react";
import store from "../store";

function Input() {
    const {list,setList } = useContext(store);
    const [text,setText] = useState("");
    const handleAdd = () =>{
        if (!text) {
            alert("请输入text")
        }else {
            const item = {
                id:new Date(),
                text
            };
            setList([...list,item]);
            setText("")
        }
    };
    return (
        <div className="input-group shadow m-2">
            <input type="text" className="form-control" onChange={event => setText(event.target.value)}/>
            <span className="input-group-btn">
                <input type="button" className="btn btn-primary" onClick={handleAdd} value="ADD"/>
            </span>
        </div>
    );
}

export default Input;