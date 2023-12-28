import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Showstudent = () => {

    const [student, setstudent] = useState([])
    const [search, setsearch] = useState("")
    async function getstudentData() {
        const result = await axios.get("  http://localhost:8001/students");
        setstudent(result.data)
    }
    useEffect(() => {
        getstudentData()
    }, [])

    const filterdata = student.filter((stu1) => {
        return stu1.fname.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="search" className="form-label fs-3 fw-bold text-info mt-4">Enter Student Name:-</label>
                    </div>
                    <div className="col-8">
                        <input type='search' className="form-control mt-4" value={search} onChange={(e) => setsearch(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Roll No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Course</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        filterdata.map((stu) => {
                            return (
                                <tr key={stu.id}>
                                    <td>{stu.rollno}</td>
                                    <td>{stu.fname}</td>
                                    <td>{stu.lname}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.course}</td>
                                    <td>{stu.date}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.state}</td>
                                    <td>{stu.city}</td>
                                    <td>{stu.address}</td>
                                    <td>{stu.pin}</td>
                                    <td>
                                        <NavLink to={`/student/update/${stu.rollno}`}><button className="btn btn-warning">Upadate Data</button></NavLink> || &nbsp;
                                        <NavLink to={`/student/delete/${stu.rollno}`}><button className="btn btn-danger">Delet</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}
export default Showstudent;