function vacation(peopleCount, groupType, day){
    let singlePrice = 0;
    let totalPrice = 0;
    if (groupType === "Students"){
        switch (day){
            case "Friday": singlePrice = 8.45;
                break;
            case "Saturday": singlePrice = 9.80;
                break;
            case "Sunday": singlePrice = 10.46;
                break;
        }

    }
    else if (groupType === "Business"){
        switch (day){
            case "Friday": singlePrice = 10.90;
                break;
            case "Saturday": singlePrice = 15.60;
                break;
            case "Sunday": singlePrice = 16;
                break;
        }
    }
    else if (groupType === "Regular"){
        switch (day){
            case "Friday": singlePrice = 15;
                break;
            case "Saturday": singlePrice = 20;
                break;
            case "Sunday": singlePrice = 22.50;
                break;
        }
    }
    if (groupType === "Students" && peopleCount >= 30){
        totalPrice = (singlePrice*peopleCount)*0.85;
    }
    else if (groupType === "Business" && peopleCount >= 100){
        peopleCount -= 10;
        totalPrice = (singlePrice*peopleCount);
    }
    else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice = (singlePrice*peopleCount)*0.95;
    }
    else {
        totalPrice = singlePrice*peopleCount;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,"Regular", "Saturday")