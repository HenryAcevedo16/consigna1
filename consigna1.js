class ProductManager {
    constructor() {
      this.products = [];
      this.autoIncrementId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("El código ya está en uso. Por favor, elija otro.");
        return;
      }
  
      const newProduct = {
        id: this.autoIncrementId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log(`Producto "${title}" agregado con éxito.`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado.");
      }
    }
  }
  
  // Ejemplo de uso:
  const productManager = new ProductManager();
  
  productManager.addProduct("Smartphone", "Potente smartphone con pantalla AMOLED", 699.99, "smartphone.jpg", "S1", 50);
  productManager.addProduct("Laptop", "Laptop ultradelgada con procesador de última generación", 1299.99, "laptop.jpg", "L1", 30);
  productManager.addProduct("Smart TV", "Televisor inteligente 4K con tecnología HDR", 899.99, "smarttv.jpg", "TV1", 20);
  productManager.addProduct("Tablet", "Tablet ligera y compacta para uso diario", 299.99, "tablet.jpg", "T1", 15);
  productManager.addProduct("Cámara DSLR", "Cámara réflex digital con sensor de alta resolución", 1499.99, "camera.jpg", "C1", 40);
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const productById = productManager.getProductById(3);
  console.log("Producto por ID:", productById);
  
  const nonExistingProduct = productManager.getProductById(7);
  