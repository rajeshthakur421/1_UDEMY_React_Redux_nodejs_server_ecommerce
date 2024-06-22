1. Set Up Your React Environment
npx create-react-app product-crud
cd product-crud
npm start

2. Create Components
//Product Component (Product.js)

import React from 'react';

const Product = ({ product, onDelete, onEdit }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onEdit(product.id)}>Edit</button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default Product;

//ProductForm Component (ProductForm.js)
import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, productToEdit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{productToEdit ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;


3. Create the CRUD Operations
import React, { useState } from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    setEditingProductId(null);
  };

  const handleEditProduct = (productId) => {
    setEditingProductId(productId);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProductId(null);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductForm
        onSubmit={editingProductId !== null ? handleUpdateProduct : handleAddProduct}
        productToEdit={editingProductId !== null ? products.find(p => p.id === editingProductId) : null}
      />
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

4. Integrate ProductList Component
import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;

