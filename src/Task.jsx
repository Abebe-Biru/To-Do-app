export const Task = (props) => {
  return (
    <h1>
      {props.taskName}
      &nbsp;
      <button
        className={props.completed ? "btn btn-success" : "btn btn-warning"}
        onClick={() => props.completeTask(props.id)}
      >
        {props.completed ? "Xumurameera" : "Xumuri"}
      </button>
      &nbsp;
      <button
        className="btn btn-danger"
        onClick={() => props.deleteTask(props.id)}
      >
        Haqi
      </button>
    </h1>
  );
};
