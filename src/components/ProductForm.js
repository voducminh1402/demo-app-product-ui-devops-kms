import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { BASE_URL_V1 } from '../utils/data';
import { toast } from 'react-toastify';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      toast.error('Both fields are required');
      return;
    }

    const newProduct = { name, price: parseFloat(price) };

    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL_V1}/products`, newProduct);
      onAddProduct(response.data);
      setName('');
      setPrice('');
    } catch (error) {
      toast.error('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Adding...' : 'Add Product'}
      </Button>
    </Box>
  );
}

export default ProductForm;
