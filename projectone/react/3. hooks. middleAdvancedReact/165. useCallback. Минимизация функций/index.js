
// useCallBack - возвращает мемомизированную версию коллбэка
// ТО есть Реакт внутри компонента запоминает функцию и не вызывает ее несколько раз
// не пересоздает заново данные при ренднеринге внутри компонента

//импорт
import {useCallback} from 'react';


// нужна для того чтобы кэшировать данные 
// к примеру при звпросе на сервер подгружать данные только один раз
// 1 аргумент это коллбэк функция 
// 2 аргумент массив зависимостей

const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ]
}, [slide]);

// прием полезен при передаче дочернему компоненту который не должен каждый раз меняться 


// Когда функция getSomeImages изменится только в том случае будет запускаться useEffect
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

<SlideFunc getSomeImages={getSomeImages}/>

function App() {
    const [slider, setSlider] = useState(true);

  return (
      <>
        <button onClick={()=>setSlider(false)}>Click</button>
        {slider ?  <Slide/> : null}
      </>
    );

}