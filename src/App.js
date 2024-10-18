import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { Container, Typography, CssBaseline } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL_V1 } from './utils/data';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL_V1}/products`);
      setProducts(response.data);
    } catch (error) {
      toast.error('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success('Product added successfully!');
    fetchProducts(); // Refresh the list
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Product Management
        </Typography>
        <ProductForm onAddProduct={addProduct} />
        <ProductList products={products} />
      </Container>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
