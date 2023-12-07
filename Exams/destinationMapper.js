function destinationMapper(input) {
    let validPattern = /([\=|\/])[A-Z]{1}[A-Za-z]{2,}\1/g;
    let validDestinations = input.match(validPattern);
    let travelPoints = 0;
    let destinations = [];
    if (validDestinations) {
        for (let dest of validDestinations) {
            let toBeReplaced = dest[0];
            while (dest.includes(toBeReplaced)){
                dest = dest.replace(toBeReplaced,'');
            }
            // dest = dest.slice(1, dest.length - 1);
            let currentPoints = dest.length;
            travelPoints += currentPoints;
            if (!destinations.includes(dest)){
            destinations.push(dest);
            }
        }
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid=/invalid==i5valid=/I5valid/=i=");
console.log('----DIVIDER----');
destinationMapper("ThisIs some InvalidInput");