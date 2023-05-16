function city({ name, area, population, country, postCode }){
    let input = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode
    };
    let keysArr = Object.keys(input);
    for (let i = 0; i < keysArr.length; i++){
        let prop = keysArr[i];
        console.log(`${keysArr[i]} -> ${input[prop]}`);
    }
}
city({ name: "Sofia", area: 492,population: 1238438, country: "Bulgaria", postCode: "1000"})