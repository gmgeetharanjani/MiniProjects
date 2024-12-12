
import { fetchCountries } from './utils/fetchData.js';

// const result = await fetchCountries("India"); 
// console.log(result);


const initializeTypeAheadSystem = () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', handleSuggestions);
}

const handleSuggestions = async (event) => {
    const keyword = event.target.value;
    const countries = await fetchCountries(keyword);
    const countryNames = countries.map(country => country.name.common);
    console.log(countryNames);

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = countryNames.map(country => `<li>${country}</li>`).join('');

};

initializeTypeAheadSystem();