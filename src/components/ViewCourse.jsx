import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,changeData] = useState([])
    const fetchData = ()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">CourseTitle</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index}</th>
                                                <td>{value.courseTitle}</td>
                                                <td>{value.courseDescription}</td>
                                                <td>{value.courseDate}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.trainerName}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse