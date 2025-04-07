const Tasks = ({tasks, setTasks}) => {

    const deleteTask = (idxToDelete) => {
        const updatedTask = tasks.filter((_, idx) => idx !== idxToDelete)   
        console.log(updatedTask)
        setTasks(updatedTask)
    }

    return (
        <div>
            <ul>
                {tasks.map((task, idx) => {
                    return (
                        <div key={idx}>
                            <li >{task}</li>
                            <button onClick={()=> deleteTask(idx)} >Delete</button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Tasks;