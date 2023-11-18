let products = [
    {id:1, tittle: 'HP', description:'Best', price:774},
    {id:1, tittle: 'DELL', description:'Good', price:222},
    {id:1, tittle: 'ASOS', description:'Excellent', price:933},
];

let counter = 0;

class Product {
  constructor(id, tittle, description, price) {
    this.id = id;
    this.tittle = tittle;
    this.description = description;
    this.price = price;
  }

  static getAllProducts() {
    return products;
  }

  static getProductsById(id) {
    return products.find((product) => product.id == id);
  }

  save() {
    this.id = counter++;
    products.push(this);
  }

  update(id){
    const index = products.findIndex(product => product.id == id);
    if(index > -1){
        products[index] = this;
    }
    else{
        throw new Error(`Product with id: ${id} not found`);
    }
  }

  deleteById(id){
    const index = products.findIndex(product => product.id == id);
    if(index > -1){
        products.splice(index,1);
    }
    else{
        throw new Error(`Product with id: ${id} not found`);
    }
  }

  
}

module.exports = Product;
