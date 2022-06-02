
// Отправить запрос
// Получить данные
// Записать в state
// Использовать в верстке


// Нужно отделять сетевые компоненты от основоного кода

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

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        if(!char.description){
            char.description='Description Not Found';
        }else{
            char.description = `${char.description.slice(0, 210)}...`
        }
        return {
            name: char.name,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }

}


export default  MarvelService;




