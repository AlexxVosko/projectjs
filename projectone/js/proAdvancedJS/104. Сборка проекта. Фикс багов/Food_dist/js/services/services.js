
    const postData = async (url,data) => {
        //помещаем в переменную проимис от фетча
        const res = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:data
        });

        // !асинхронный код
        // необходимо дождаться ответа сервера а потом только возвращать значение
        return await res.json(); //  промис
    };

    const getResource = async (url) => {
        const res = await fetch(url);

         // обработка ошибок http
        if(!res.ok){
           throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }
        return await res.json(); //  промис
    };

    export {postData};
    export {getResource};