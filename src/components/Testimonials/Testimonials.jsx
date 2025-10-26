import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider =useRef();
    let tx =0;

    const slideForward=()=>{

        if(tx>-50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;


    }

    const slideBackward=()=>{

        if(tx<0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

 
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Aurora</h3>
                                <span>Customer, Hydrabad</span>
                            </div>
                        </div>
                        <p>
                            “I absolutely love the quality of the dresses! The fabric feels premium,
                            and the fit is perfect. I received so many compliments on my outfit.
                            Definitely my go-to brand now!”
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Riya</h3>
                                <span>Customer, Spain</span>
                            </div>
                        </div>
                        <p>
                            The size guide was really accurate! I usually struggle with online clothing sizes,
                            but this one fit perfectly. 
                            I’ll be ordering again soon!”                     
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Supraja</h3>
                                <span>Customer, Chennai</span>
                            </div>
                        </div>
                        <p>
                           “Trendy, affordable, and amazing quality! Every time I wear one of their outfits, 
                           someone asks me where I got it from. 
                           Highly recommend this store!”
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Priyanka</h3>
                                <span>Customer, Boston</span>
                            </div>
                        </div>
                        <p>
                            “The delivery was super fast, and the packaging was beautiful. 
                            The dress looked exactly like the pictures — elegant and comfortable. 
                            Totally worth it!”
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials