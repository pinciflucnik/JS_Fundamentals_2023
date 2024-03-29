class Storage {
    constructor(capacity) {
        this.capacity = Number(capacity),
        this.storage = []
    }
    get totalCost() {
        return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
    }
    addProduct(product) {
      this.storage[product["name"]] = product;
      this.totalCost += product["price"] * product["quantity"];
      this.capacity -= product["quantity"]
  
    }
    getProducts(){
      let jsonArr = [];
      for (let item in this.storage){
        jsonArr.push(JSON.stringify(this.storage[item]));
      }
      return jsonArr.join("\n")
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