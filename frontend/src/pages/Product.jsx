import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Tooltip } from '@mui/material';
import Item from '@mui/material/ListItem';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useNavigate } from 'react-router-dom';

function Product(props) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align="center">
          {products.name}
        </Typography>
        <CardMedia
          sx={{ height: 200 }}
          image="/images/nike.png"
          title="green iguana"
        />
        <Typography variant="h6" color="text.primary" align="center">
          Category: {products.category}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Typography variant="body2" color="text.secondary">
                Price: ${products.price}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="body2" color="text.secondary">
                Quantity: {products.quantity}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Button size="small">Edit</Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Tooltip title="Delete product">
                <Button
                  cursor="pointer"
                  onClick={() => {
                    deleteProduct(products.id);
                  }}
                >
                  Delete
                </Button>
              </Tooltip>
              {/* <Button size="small" onClick={}>Delete</Button> */}
            </Item>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Product;
