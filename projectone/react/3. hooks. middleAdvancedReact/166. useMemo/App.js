
import {Component, useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


const countTotal = (num) =>{
    return num +10;
}

const SlideFunc = ({getSomeImages}) =>{
    const [images, setImages] = useState([]);

    useEffect(()=>{
        setImages(getSomeImages());
    },[getSomeImages]);

    return (
        <>
         {images.map( (url,i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

const Slide = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    // -----------------------------------------------//
    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        ]
    }, [slide]);

    function logging(){
        console.log('log!');
    }

    useEffect(()=>{
        document.title = `Slide Update: ${slide}`;
        window.addEventListener('click',logging);
        return () =>{
            window.removeEventListener('click',logging);
        }
    }, [slide]);

    // -----------------------------------------------//

    useEffect(()=>{
        document.title = `Slide: ${slide}`;
    }, []);

    useEffect(()=>{
        console.log('autoplay');
    }, [autoplay]);

    // -----------------------------------------------//

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    // -----------------------------------------------//
    const total = useMemo(()=>{
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(()=>{
        color: slide > 4 ? 'red' : 'black'
    },[slide]);

    // отслеживание изменения стилей
    useEffect(()=>{
        console.log('style!');
    }, [style]); 

    // -----------------------------------------------//

 
     return (
         <Container>
             <div className="slider w-50 m-auto">
                 <SlideFunc getSomeImages={getSomeImages}/>
                 <div className="text-center mt-5">Active slide {slide} <br/> 
                    {autoplay ? 'auto' : null}
                 </div>
                 <div style={style} className="text-center mt-5">Total slides: {total} </div>
                 <div className="buttons mt-3">
                     <button 
                         className="btn btn-primary me-2"
                         onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                         className="btn btn-primary me-2"
                         onClick={() => changeSlide(1)}>+1</button>
                     <button 
                         className="btn btn-primary me-2"onClick={toggleAutoplay}>
                             toggle autoplay</button>
                 </div>
             </div>
         </Container>
     )
 }


function App() {
    const [slider, setSlider] = useState(true);

  return (
      <>
        <button onClick={()=>setSlider(false)}>Click</button>
        {slider ?  <Slide/> : null}
      </>
    );

}

export default App;
