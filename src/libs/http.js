class Http {
    static instance = new Http();

    get = async (url) => {
        try {
            let req     = await fetch(url);
            let json    = await req.json();
            return json;
        } catch (error) {
            console.log("http get method err", error);
            throw Error(error);
        }
    }

    post = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: "POST",
                body
            });
            let json = await (await req).json();
            return json;
        } catch (error) {
            console.log("http post method err", error);
            throw Error(error);
        }
    }
}

export default Http;