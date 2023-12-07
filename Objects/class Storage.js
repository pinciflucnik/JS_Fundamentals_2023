class Storage {
    constructor (capacity){
      this.capacity = Number(capacity),
      this.totalCost = 0
      this.jsonArr = []
    }
    addProduct(obj){
      let key = obj.name
      this[key] = obj;
      this.capacity -= Number(this[key]["quantity"]);
      this.totalCost += (Number(this[key]["price"]) * Number(this[key]["quantity"]));
      this.jsonArr.push(JSON.stringify(this[key]))
    }
    getProducts(){
      return this.jsonArr.join("\n");
      
    }
  }
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
 let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
 let productThree = {name: 'Bread', price: 1.10, quantity: 8};
 let storage = new Storage(50);
 storage.addProduct(productOne);
 storage.addProduct(productTwo);
 storage.addProduct(productThree);
 console.log(storage.getProducts());
 console.log(storage.capacity); 
console.log(storage.totalCost);