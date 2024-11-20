import { useEffect, useState } from "react"

export const TaskTable = () => {

    let url = import.meta.env.VITE_URL
    let endPoint = "todo_list_app"
    let token = import.meta.env.VITE_TOKEN
    let newUrl = url + endPoint

    const [data, setData] = useState([])

    const getData = async () => {

        let response = await fetch(newUrl, {
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


    useEffect(() => {

        getData()

    }, [])

    return (
        <>
            <h1>Report</h1>
            <div className="table table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr id={item.id}>
                                    <td> {item.id} </td>
                                    <td> {item.task} </td>
                                    <td> { item.completed  } </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}