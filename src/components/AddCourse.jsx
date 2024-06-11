import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddCourse = () => {
    const [data,getData]= useState(
        {
            "courseTitle":"",
            "courseDescription":"",
            "courseDate":"",
            "duration":"",
            "venue":"",
            "trainerName":""
        }
    )
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        // console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Course Added successfully")
                } else {
                 alert("An error occured")   
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CourseTitle</label>
                            <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CourseDescription</label>
                            <textarea name="courseDescription" value={data.courseDescription} onChange={inputHandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CourseDate</label>
                            <input type="date" className="form-control" name='courseDate' value={data.courseDate} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TrainerName</label>
                            <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" name="duration" id="" className="form-control" value={data.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse