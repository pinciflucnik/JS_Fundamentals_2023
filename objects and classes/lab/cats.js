function cats(input){
    let nameRegex = /[A-Za-z]+/;
    let ageRegex = /[0-9]+/;
    for (let i=0; i < input.length; i++){
        let cat ={
            name: input[i].match(nameRegex),
            age: input[i].match(ageRegex),
            meow: function(){
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])