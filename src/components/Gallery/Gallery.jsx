import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='outfit'>
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>

    </div>
  )
}

export default Gallery