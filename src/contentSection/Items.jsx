
import ImageOne from "./icons/f44c6a425a7d9ee0d4cbe855d3cc4bf8.png";
import ImageTwo from "./icons/8cd2fe86cb15f501edf5742f73e0136d.png";
import ImageThree from "./icons/c7e45ecebdf8cd136e20e88a46304f99.png";
import ImageFour from "./icons/2fd14e71b6cad29113b19c077b5479fb.png";
import ImageFive from "./icons/bb2e85c566cc0f4b8dcc7224ae371da5.png";
import ImageSix from "./icons/86604a6dd4bb6cde07fb4efd08f7c503.png";
import ImageSeven from "./icons/2213877206057d44ebf24c83a058eab2.png";
import ImageEight from "./icons/ca06e0a843b98fcd3f4f8f4c7dae729d.png";
import { FaTimes } from "react-icons/fa";
import {useState,useRef} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import UiItem from './UiItem';
function Items() {
   Aos.init({
    duration: 2000
   });

       const [uiData,setUiData] = useState([])
    const modalref = useRef(null)
    const handleClick = () =>{
    modalref.current.classList.add("active")
    }

    const closeModal = ()=>{
        modalref.current.classList.remove("active")   
    }

    fetch("https://aramo98.github.io/fakeapifortest/database.json")
    .then((resp)=>resp.json())
     .then((result)=>{
       setUiData(result);
      
     })



  return (
    <>
<div ref={modalref} className="ModalBlock">
    <button className='closeBtn' onClick={()=> closeModal()}><FaTimes /></button>

    <h3>UX Дизайны</h3>

    <div className="templateBlock">
    {uiData.map((data)=>{
        return(
            <>
             <UiItem key={data.id} links={data.link} template ={data.templateImage}/>
            </>
        )
    })}
    </div>


</div>
    <div className="itemsBlock">
    <div data-aos="fade-up" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageOne} alt="" />
            </div>
        <h5>СТРАТЕГИЯ</h5>
     </div>
    <div data-aos="fade-down" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageTwo} alt="" />
            </div>
        <h5>АНАЛИЗ</h5>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageThree} alt="" />
            </div>
        <h5>СОЦ СЕТИ</h5>
    </div>
    <div data-aos="fade-down" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageFour} alt="" />
            </div>
        <h5>РАЗВИТИЕ</h5>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageFive} alt="" />
            </div>
        <h5>КОНТЕНТ</h5>
    </div>
    <div data-aos="fade-down" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageSix} alt="" />
            </div>
        <h5>ДИЗАЙН UX</h5>
        <p>Создадим уникальный и <br /> удобный дизайн.</p>
        <button onClick={()=>handleClick()}>ПОДРОБНЕЕ →</button>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageSeven} alt="" />
            </div>
        <h5>ТАРГЕТИРОВАННАЯ <br /> РЕКЛАМА</h5>
    </div>
    <div data-aos="fade-down" data-aos-duration="1500" className='item'>
        <div className="iconBlock">
            <img src={ImageEight} alt="" />
            </div>
        <h5>ПРОДУКТ</h5>
    </div>
    </div>

  
    </>
   
  )
}

export default Items