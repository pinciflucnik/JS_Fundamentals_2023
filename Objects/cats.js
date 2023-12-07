function cats(data) {
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (animal of data){
        animal = animal.split(" ");
        let currentCat = new Cat(animal[0],animal[1]);
        currentCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);