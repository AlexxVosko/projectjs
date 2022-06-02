
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