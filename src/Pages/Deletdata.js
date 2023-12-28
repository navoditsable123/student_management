import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Deletdata = () => {
    const { studentID } = useParams();
    const [student1, setstudent1] = useState();
    const navigate = useNavigate()

    async function fetchdata() {
        const result = await axios.get(` http://localhost:8001/students/get/${studentID}`)
        setstudent1(result.data)
    }
    useEffect(() => {
        fetchdata()
    }, [])

    function deletdata() {
        axios.delete(` http://localhost:8001/students/delete/${studentID}`)
        alert("Data deleted successfully...")
        navigate('/show')
    }
    return (
        <>
            <h1 className="text-center text-info">Delete Student Data</h1>
            <form onSubmit={() => deletdata()}>
                <h2 className="text-center text-dark">
                    Do You Really Want to delete data
                    <span>

                    </span>
                </h2>
                <div className="text-center">
                    <input type='submit' value='Yes' className="btn btn-outline-danger me-3 fs-3 p-2"></input>
                    <NavLink to={'/show'}><button className="btn btn-outline-warning fs-3 p-2">No</button></NavLink>
                </div>

            </form>
        </>
    )
}
export default Deletdata