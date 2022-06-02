

// Импорт картинок в проект
import decoration from '../../resources/img/vision.png';


class MarvelService {

    _apiBase ='https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a8f529bc9cafa04a2256af518aa5628f';

    getResource = async (url) => {
        let res = await fetch(url);
        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }
        return await res.json();
    };

    getAllCharacters = () =>{
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getAllCharacter = (id) =>{
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}


export default  MarvelService;


// Экземпляр класса
const marvelService  = new MarvelService();
marvelService.getAllCharacter(1011052).then( res => console.log(res));
marvelService.getAllCharacters().then( res => console.log(res));
marvelService.getAllCharacters().then( res => res.data.results.forEach(element => console.log(element.name)));