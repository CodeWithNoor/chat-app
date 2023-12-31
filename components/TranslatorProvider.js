import React from 'react'
const axios = require('axios');

const postApi = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', 'Hello, world!');
    encodedParams.set('target', 'es');
    encodedParams.set('source', 'en');

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'a0ba129034msh9fc9cbb9223370bp1306cejsne52154bbd95d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.err
        or(error);
    }
}

const getAPI = async () => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'X-RapidAPI-Key': 'a0ba129034msh9fc9cbb9223370bp1306cejsne52154bbd95d',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
const TranslatorProvider = async () => {
    const postData = await postApi()
    const getData = await getAPI()

    console.log(postData, getData)

    return (
        <>
            <div className="btn-group dropright translate">
                <button id="langSel" onChange={getAPI} type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Translate to
                </button>
                <div className="dropdown-menu translate-option">
                    <li className="dropdown-item" tolang="en">En</li>
                    <li className="dropdown-item" tolang="it">It</li>
                    <li className="dropdown-item" tolang="es">Sp</li>
                    <li className="dropdown-item" tolang="de">Ge</li>
                </div>
            </div>
        </>
    )
}

export default TranslatorProvider