import React from 'react'
import Slider from "react-slick";
import img1 from '../SliderImage/abc.png'
import img2 from '../SliderImage/img.png'
import img3 from '../SliderImage/xyz.png'
import img4 from '../SliderImage/img3.png'
import Bounce from 'react-reveal/Bounce';

function ImgSlider() {
  const renderSlides = () =>
    [img1, img2, img3, img4].map(num => (
      <div>
        <img style={{height:'240px'}} src={num} alt='img'/>
      </div>
    )); 

  return (
    <>
    <div className="scroll">
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div> 
    <div>
      <Bounce rigth>
        <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
          <div style={{width:'40%',padding:'2%'}}>
            <h2>
            INTERACTIVE VIDEO LECTURES
            </h2>
            <p>
            Enjoy concept-based online learning through our interactive video lectures that cover every concept in the syllabus. The lecturers make learning fun using 2D/3D animations and interesting graphics.
            </p>
          </div>
          <div style={{display:'flex', flexWrap:"wrap",width:"40%" }}>
            <img className='dummyImg' src={img1} alt='img'/>
            <img className='dummyImg' src={img2} alt='img'/>
            <img className='dummyImg' src={img3} alt='img'/>
            <img className='dummyImg' src={img4} alt='img'/>
          </div>
        </div>
      </Bounce>
    </div>
    </>   
  )
}

export default ImgSlider