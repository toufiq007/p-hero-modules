// api link : https://restcountries.com/v3.1/all

const link = `https://restcountries.com/v3.1/all`;
const countryContainer = document.querySelector(".country-container");

const loadCountries = async () => {
    try {
        await fetch(link)
            .then((res) => res.json())
            .then((data) => displayCountris(data));
    } catch (err) {
        document.write(err);
    }
};

const displayCountris = (countries) => {
    // console.log(countries[0]);
    countries.forEach((country) => {
        const div = document.createElement("div");
        const { capital, region } = country;

        div.innerHTML = `
            <img src="${country.flags.png}" width="100px" height="100px" />
            <h3>Country Name: ${country.name.common}</h3>
            <h4>Capital: ${capital ? capital[0] : "not found"}</h4>
            <h4>Region: ${region}</h4>
            <button onclick="fetchCountryDetails('${
                country.name.common
            }')">Show Details</button>
            
        `;
        div.classList.add("countryStyle");
        countryContainer.appendChild(div);
    });
};

const fetchCountryDetails = async (name) => {
    const link = `https://restcountries.com/v3.1/name/${name}`;

    await fetch(link)
        .then((res) => res.json())
        .then((data) => showCountryDetails(data[0]));
};

const showCountryDetails = (country) => {
    console.log(country);
    const selectedContry = document.getElementById("selectedContry");
    // const { capital, region } = country;

    selectedContry.innerHTML = `
    <img src="${country.flags.png}" width="100px" height="100px" />
            <h3>Country Name: ${country.name.common}</h3>
            <h4>Capital: ${
                country.capital ? country.capital[0] : "not found"
            }</h4>
            <h4>Region: ${country.region}</h4>
    `;
    selectedContry.classList.add('selectedCountry')
};

loadCountries();
