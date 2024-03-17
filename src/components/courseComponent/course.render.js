import React from 'react';
import { useState } from 'react';
import './course.css'

const Course = ({name,code,des,enrolled}) => {
    
    const [isEnrolled, setIsEnrolled] = useState(enrolled);

    function handleEnroll(){
        setIsEnrolled(!isEnrolled);
    }

    return (
        <div className='box'>
            <strong>{name}</strong>
            <p>Course Code: {code}</p>
            <p>Description: {des}</p>
            <button onClick={handleEnroll} className={isEnrolled?'enrolled':'notenrolled'}>
                {isEnrolled ? "Enrolled" : "Enroll Now"}
            </button>
        </div>
    )
}

export default Course;