class API {
    static init() {
        this.API = "http://localhost:3000";
        this.USERS_API = `${this.API}/users`;
        this.CARDS_API = `${this.API}/cards`;
    }

    static getData (url) {
        return fetch(url).then(response => response.json())
    };

    static postData (url, obj) {
        const params = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        };

        return fetch(url, params).then(response => response.json());
    };

    static addUser (userObj) { return this.postData(this.USERS_API, userObj) };
    static addCard (cardObj) { return this.postData(this.CARDS_API, cardObj) };

    static getUsers () { return this.getData(this.USERS_API) };
    static getCards () { return this.getData(this.CARDS_API) };
}

API.init();

export default API;