const parse = (response) => {
    if(!response) return;

   try {
        return JSON.parse(response);
    } catch(e) {
        return null
    }
}

module.exports = {
    fetchURI,
    getSentiment,
    parse
};