const getCountries = async (keyword) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const data = await response.json();

        if(response.status === 404) {
            throw new Error('Country not found');
        }
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    } 
};
export { getCountries as fetchCountries };