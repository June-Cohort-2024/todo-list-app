import { TaskTable } from "../Components/TaskTable"

export const FormPostTask = () => {

    let url = import.meta.env.VITE_URL
    let endPoint = "todo_list_app"
    let token=import.meta.env.VITE_TOKEN
    let newUrl = url+endPoint
    let task=""

    const submintHandler = async ()=> {
        event.preventDefault()

        let data = {
            task
        }

        let response = await fetch(newUrl, {
            method: "POST", 
            headers: {
                'apikey': token,
                'Authorization': token, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
            console.log("Object Created")
        }
        

    }

    const changeHandler = (event)=>{
        task = event.target.value
    }

    return (
        <>
            <h1> Task Creation</h1>
            <div className="container-fluid">

                <form onSubmit={submintHandler}>
                    <div className="mb-3">
                        <label className="form-label">Task</label>
                        <input onChange={changeHandler} type="text" className="form-control" />
                    </div>
                    <button className="btn btn-success w-100" > Create </button>
                </form>
            </div>

            <TaskTable/>
        </>
    )

}