import React from 'react'
import '../contentSection/Content.scss'
import Items from './Items'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Content({HeaderText,textOne,textTwo}) {
    Aos.init({
        duration: 1500
    });
  return (
    <div className='Service'>
        <div data-aos="fade-right" className="contentBlock">
             <h3 className='headerText'>{HeaderText}</h3>
             <p className='textOne'>{textOne}</p>
             <div className="line"></div>
             <p className="textTwo">{textTwo}</p>
        </div>
  
        <Items/>
    </div>
  )
}

export default Content
