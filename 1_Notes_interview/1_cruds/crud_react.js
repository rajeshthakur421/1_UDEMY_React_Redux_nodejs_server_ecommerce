//Setting Up Your React Project

npx create-react-app react-crud-app
cd react-crud-app

npm install axios react-router-dom formik yup jwt-decode js-cookie

1. Product CRUD Operations
//ProductList.js
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import axios from 'axios';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddOrUpdateProduct = async (productData) => {
    try {
      let response;
      if (editingProduct) {
        response = await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          productData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        response = await axios.post('http://localhost:5000/api/products', productData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductForm editingProduct={editingProduct} onSubmit={handleAddOrUpdateProduct} />
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


//ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ editingProduct, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: editingProduct ? editingProduct.name : '',
    price: editingProduct ? editingProduct.price : '',
    description: editingProduct ? editingProduct.description : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      price: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;


//ProductItem.js
import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  const handleEditClick = () => {
    onEdit(product);
  };

  const handleDeleteClick = () => {
    onDelete(product._id);
  };

  return (
    <li>
      <div>
        <strong>{product.name}</strong> - ${product.price}
        <p>{product.description}</p>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default ProductItem;

2. Authentication Middleware with JWT and Session Cookies
//AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded.user); // Assuming your JWT payload has a 'user' field
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (token) => {
    setToken(token);
    Cookies.set('token', token, { expires: 1 }); // Expires in 1 day
  };

  const logout = () => {
    setToken(null);
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//PrivateRoute.js (to protect routes requiring authentication)
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;


3. Pagination, CORS, Child to Parent, Validation, Custom Hook, and Webpack
For pagination, CORS, child to parent communication, validation without a library, custom hooks, and webpack configuration, here are basic snippets to guide you:

Pagination Example:
Implement pagination logic in ProductList.js:

import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import axios from 'axios';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]); // Reload products when currentPage changes

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        params: {
          page: currentPage,
          limit: itemsPerPage,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddOrUpdateProduct = async (productData) => {
    try {
      let response;
      if (editingProduct) {
        response = await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          productData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        response = await axios.post('http://localhost:5000/api/products', productData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductForm editingProduct={editingProduct} onSubmit={handleAddOrUpdateProduct} />
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

//Validation without Library:
Implement simple form validation directly in your component:

const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit(formData);
    setFormData({
      name: '',
      price: '',
      description: '',
    });
  };

  //Custom Hook Example:
  //Create a custom hook for reusable logic:
  import { useState } from 'react';

  const usePagination = (initialPage, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
  
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
  
    return {
      currentPage,
      nextPage,
      prevPage,
    };
  };
  
  export default usePagination;
  






