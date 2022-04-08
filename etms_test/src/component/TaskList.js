

const TaskList = (props) => {

    const { taskId, projectId, taskName, startDate, dueDate, status } = props.task
    

    return (

        <tr>
            <td>{taskId}</td>
            <td>{projectId}</td>
            <td>{taskName}</td>
            <td>{startDate}</td>
            <td>{dueDate}</td>
            <td>{status}</td>
            <td>
                {status !== 'Completed' && (
                    <div className="mb-3">
                        <button className="btn btn-primary">Mark as complete</button>
                    </div>

                )}
            </td>
        </tr>

    )
}

export default TaskList