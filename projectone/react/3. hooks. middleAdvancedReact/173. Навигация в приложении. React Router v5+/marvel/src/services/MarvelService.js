import { useHttp } from '../hooks/http.hook';

const  useMarvelService = () => {
    const {loading,request,error, clearError} = useHttp();



    const _apiBase ='https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=a8f529bc9cafa04a2256af518aa5628f';
    const _baseoffset = 210;
    const _baseoffsetcomics = 0;

    const getAllCharacters = async (offset = _baseoffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseoffsetcomics) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const checkImage = (path) => {
        const reg = /image_not_available/;
        const check = reg.test(path);
        const imgStyle = {'objectFit' : 'cover'};
        const clazz = check  ? {'objectFit' : 'contain'} : imgStyle;
        return clazz;
    }


    const _transformCharacter = (char) => {
        (!char.description) ? char.description='Description Not Found' : char.description = `${char.description.slice(0, 210)}...`;
        const clazz =  checkImage(char.thumbnail.path);

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

    const _transformComics = (char) => {
        const clazz =  checkImage(char.thumbnail.path);


        return {
            id: char.id,
            title: char.title,
            description: char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.resourceURI,
            imgStyle:clazz,
            price: char.prices[0].price
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics}

}


export default  useMarvelService;