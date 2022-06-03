
class MarvelService {

    _apiBase ='https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a8f529bc9cafa04a2256af518aa5628f';
    _baseoffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);
        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }
        return await res.json();
    };

    getAllCharacters = async (offset = this._baseoffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${this._baseoffset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        (!char.description) ? char.description='Description Not Found' : char.description = `${char.description.slice(0, 210)}...`;
        const reg = /image_not_available/;
        const check = reg.test(char.thumbnail.path);
        const imgStyle = {'objectFit' : 'cover'};
        const clazz = check  ? {'objectFit' : 'contain'} : imgStyle;


        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            imgStyle:clazz,
            comics: char.comics.items
        }
    }

}


export default  MarvelService;