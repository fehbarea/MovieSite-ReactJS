import Slider from "react-slick";
import "./carousel.css";

function Caroulse({children}) {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: 1
    }
  
    return (
        <div>
            <Slider {...settings} >
                {children}
            </Slider>
        </div>
    );
}

export default Caroulse;