function meetings(data){
    let meetingAssociative = {};
    for (element of data){
        let tokens = element.split(" ");
        let day = tokens[0];
        let name = tokens[1];
        if (meetingAssociative.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetingAssociative[day] = name;
        }
    }
    for (weekday in meetingAssociative){
        console.log(`${weekday} -> ${meetingAssociative[weekday]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])