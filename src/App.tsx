import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListType={
 id:string 
 title:string 
 filter: FilterValuesType
}

type TasksType={
    [key:string]:Array<TaskType>
}





function App() {

    let todoListId1=v1();
    let todoListId2=v1();

    let [todoList,setTodoList]=useState<Array<TodoListType>>([
        {id:todoListId1,title:"What to learn",filter:"all"},
        {id:todoListId2,title:"What to buy",filter:"completed"},
    ])

    

    let [tasks, setTasks] = useState<TasksType>({

        [todoListId1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],

        [todoListId2]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ]
    });



    // let [filter, setFilter] = useState<FilterValuesType>("all");




    function removeTask(todoListId:string, taskId: string) {
        
        setTasks({...tasks,[todoListId]:tasks[todoListId].filter(el=>el.id !== taskId)})

    }

    function addTask(todoListId: string, title: string) {

        let newTask = { id: v1(), title: title, isDone: false };
        setTasks({ ...tasks, [todoListId]:[newTask,...tasks[todoListId]]})

    }

    function changeStatus(todoListId:string, taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        // setTasks([...tasks]);
        setTasks=({...tasks,[todoListId]:tasks[todoListId].map(el=>el.id===taskId ? {...el,isDone}: el)})
    }


    // let tasksForTodolist = tasks;

    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todoListId:string, value: FilterValuesType): void {
       setTodoList ( todoList.map ( el=>  el.id===todoListId ? { ...el, filter:value } : el ))
    }


    return (
        <div className="App">
            {todoList.map((el)=>{

                   let tasksForTodolist = tasks[el.id];

                  if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }

                return(
                    <Todolist
                    key={el.id}
                    todoListId={el.id}
                    title={el.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                    />
                )
            }
            )}
        
            {/* <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            /> */}
            
          
        </div>
    );
}

export default App;
