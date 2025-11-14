import React, { useState } from 'react'

const TodoList = () => {

    const [todolist, setTodolist] = useState([])
    // const[]
    const SaveTodoList = (e) => {

        let toname = e.target.toname.value
        // alert(toname)
        if (!todolist.includes(toname)) {
            let finalDolist = [...todolist, toname]
            setTodolist(finalDolist)

        } else {
            alert('todo allready  exist')
        }
        e.preventDefault();



    }
    let list = todolist.map((value, index) => {
        return (

            <ToDoListItem value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} />
        )



    })

    return (
        <div className='text-center m-3'>

            <h1>TODo List</h1>
            <form onSubmit={SaveTodoList}>
                <input className='border-1 border-red-600 rounded-2xl text-2xl p-3' placeholder='Enter Your Task ' name='toname' type="text" />
                <button className='border-2 w-[100px] text-red-600  rounded-2xl text-2xl p-2 m-3'>Save</button>
            </form>
            <div className='w=[500px]'>
                <ul>
                    {list}


                </ul>
            </div>

        </div>
    )
}

export default TodoList

function ToDoListItem({ value, todolist, setTodolist, indexNumber }) {
    const [status, setStatus] = useState(false)
    let deletRow = () => {
        let finanData = todolist.filter((v, i) => i != indexNumber)
        // console.log(finanData);
        setTodolist(finanData)

    }
    let check = () => {
        setStatus(!status)


    }

    return (
        <li
            onClick={check}
            className={`bg-black text-white text-xl p-3 flex items-center justify-center relative rounded-lg m-3 ${status ? 'line-through' : ''}`}
        >
            {indexNumber + 1}. {value}
            <span
                onClick={deletRow}
                className="absolute right-4 text-red-500 text-3xl cursor-pointer"
            >
                &times;
            </span>
        </li>

    )
}