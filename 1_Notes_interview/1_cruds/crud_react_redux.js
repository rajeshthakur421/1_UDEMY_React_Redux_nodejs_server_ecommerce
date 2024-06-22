Step 1: Setup a React App

npx create-react-app react-redux-crud
cd react-redux-crud

Step 2: Install Redux and Axios
npm install redux react-redux redux-thunk axios

Step 3: Define Redux Actions and Reducers
//productActions.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/products'; // Replace with your API URL

// Action Types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Action Creators
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

export const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product
});

export const deleteProductSuccess = (productId) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productId
});

// Async Actions
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const addProduct = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, productData);
      dispatch(addProductSuccess(response.data));
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
};

export const updateProduct = (productId, productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/${productId}`, productData);
      dispatch(updateProductSuccess(response.data));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${productId}`);
      dispatch(deleteProductSuccess(productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
};

//productReducers.js
import {
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_SUCCESS
  } from '../actions/productActions';
  
  const initialState = {
    products: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          products: [...state.products, action.payload]
        };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id ? action.payload : product
          )
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default productReducer;

  Step 4: Create Redux Store and Combine Reducers

  In your index.js, create the Redux store and combine reducers.

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { createStore, applyMiddleware, combineReducers } from 'redux';
  import { Provider } from 'react-redux';
  import thunk from 'redux-thunk';
  import './index.css';
  import App from './App';
  import productReducer from './reducers/productReducers';
  
  const rootReducer = combineReducers({
    products: productReducer,
    // Add other reducers here if needed
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  
  
  Step 5: Create Components for CRUD Operations
  //ProductList.js

  import React, { useEffect } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { fetchProducts, deleteProduct } from '../actions/productActions';
  
  const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const handleDelete = (productId) => {
      if (window.confirm('Are you sure you want to delete this product?')) {
        dispatch(deleteProduct(productId));
      }
    };
  
    return (
      <div>
        <h2>Product List</h2>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  
//ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../actions/productActions';

const ProductForm = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description
    };
    if (product) {
      dispatch(updateProduct(product.id, productData));
    } else {
      dispatch(addProduct(productData));
    }
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{product ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
};

export default ProductForm;

Step 6: Integrate Components in App.js
//Use the components in your App.js or other entry point of your application.

import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux CRUD Example</h1>
      </header>
      <main>
        <ProductList />
        <ProductForm />
      </main>
    </div>
  );
}

export default App;


