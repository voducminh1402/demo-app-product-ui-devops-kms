import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";

function ProductList({ products }) {
  return (
    <Box mt={5}>
      <Typography variant="h6" gutterBottom>
        Product List
      </Typography>
      {products.length > 0 ? (
        <List>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ListItem>
                <ListItemText
                  primary={product.name}
                  secondary={`Price: $${product.price.toFixed(2)}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography variant="body1" color="textSecondary" align="center">
          No data available
        </Typography>
      )}
    </Box>
  );
}

export default ProductList;
