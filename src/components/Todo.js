import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"
function Todo({t}){

    const dispatch=useDispatch();

    return (
        <div className="todo">
            <h2>{t.todo}</h2>
            <button className="close material-symbols-outlined" onClick={()=>dispatch(deleteTodo(t.id))}>delete</button>

        </div>
    )
}



export default Todo