import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import dress_1 from '../../assets/dress_1.png'
import dress_2 from '../../assets/dress_2.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''></img>
            <div className="caption">
                <img src={dress_1} alt=''></img>
                <p>Buy Now</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''></img>
             <div className="caption">
                <img src={dress_2} alt=''></img>
                <p>Buy Now</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''></img>
             <div className="caption">
                <img src={dress_1} alt=''></img>
                <p>Buy Now</p>
            </div>
        </div>

    </div>
  )
}

export default Programs