import { useEffect, useState } from "react"

export const TaskTable = () => {

    let url = import.meta.env.VITE_URL
    let endPoint = "todo_list_app"
    let token = import.meta.env.VITE_TOKEN
    let newUrl = url + endPoint

    const [data, setData] = useState([])

    const getData = async () => {

        let response = await fetch(newUrl+"?order=id.asc", {
            method: "GET",
            headers: {
                "Autorization": token,
                "apikey": token
            }
        })

        if (response.ok) {
            let info = await response.json()
            setData(info)
        }

    }

    const completeHandler = async( id, actual_state )=>{
        let is_completed = ""

        if (actual_state ==="Yes"){
            is_completed = "No"
        }else{
            is_completed = "Yes"
        }

        let data = {
            is_completed
        }


        let urlPatch = newUrl + `?id=eq.${id}`

        
        let response = await fetch (urlPatch, {
            method: "PATCH", 
            headers: {
                "Autorization" : token, 
                "apikey" : token, 
                "Content-Type": "application/json"
            }, 
            body:  JSON.stringify(data)
        })

        if (response.ok){
            window.location = "/createTask"
        }


    }

    const deleteHandler = async (id)=> {

        let urlDelete = newUrl + `?id=eq.${id}`

        let response = await fetch ( urlDelete, {
            method : "DELETE", 
            headers: {
                "Authorization" : token, 
                "apikey": token
            }
        } )

        if (response.ok){
            window.location="/createTask"
        }

    }


    useEffect(() => {

        getData()

    }, [])

    return (
        <>
            <h1>Report</h1>
            <div className="table table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Completed</th>
                            <th>Completed</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td> {item.id} </td>
                                    <td> {item.task} </td>
                                    <td> { item.is_completed  } </td>
                                    <td> <button  onClick={  ()=> completeHandler(item.id, item.is_completed)} className="btn btn-success" > Completed </button> </td>
                                    <td>
                                        <button onClick={ ()=> deleteHandler(item.id)  }
                                         className="btn btn-danger" >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}