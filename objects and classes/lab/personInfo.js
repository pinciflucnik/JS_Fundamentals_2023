function personInfo(name, surname, age){
    let user = {};
    user.firstName = name;
    user.lastName = surname;
    user.age = age;
    return user;
}
personInfo("Peter", "Pan", "20")