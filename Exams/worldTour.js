function worldTour(input){
    let stops = input.shift();
    let index = 0;
    let line = input[index];
    index++;
    while (line !== 'Travel'){
        let tokens = line.split(':');
        let command = tokens[0];
        let firstIndex = Number(tokens[1]);
        let isFirstIndexValid = (firstIndex > -1 && firstIndex < stops.length);
        switch (command){
            case 'Add Stop':
                let newStop = tokens[2];
                if (isFirstIndexValid){
                    let buffer = stops.slice(0,firstIndex);
                    stops = buffer + newStop + stops.slice(firstIndex);
                }
                break;
            case 'Remove Stop':
                let endIndex = Number(tokens[2]);
                let isEndIndexValid = (endIndex > -1 && endIndex < stops.length);
                if (endIndex < firstIndex){
                    let buffer = endIndex;
                    endIndex = firstIndex;
                    firstIndex = buffer;
                }
                if (isFirstIndexValid && isEndIndexValid){
                    let buffer = stops.slice(0, firstIndex);
                    if (endIndex + 1 < stops.length){
                    stops = buffer + stops.slice(endIndex + 1);
                    break;
                    }
                    stops = buffer;
                }
                break;
            case 'Switch':
                let oldString = tokens[1];
                let newString = tokens[2];
                let isOldStringValid = stops.includes(oldString);
                if (isOldStringValid){
                    stops = stops.replace(oldString, newString);
                }
                break;
        }
        console.log(stops);
        line = input[index];
        index++;
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
console.log('---DIVIDER---');
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);