import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Tooltip } from '@mui/material';
import Item from '@mui/material/ListItem';
// import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { previewProduct, deleteProducts } from '../redux/actions';

function Product(props) {
  // const navigate = useNavigate();
  let { id } = useParams();
  const { product } = props;

  useEffect(() => {
    props.previewProduct(id);
  }, []);

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      props.deleteProducts(id);
      // navigate('/dashboard');
    }
  };

  return (
    <>
      {product ? (
        <Card sx={{ maxWidth: 345, mt: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {product.name}
            </Typography>
            <CardMedia
              sx={{ height: 200 }}
              image="/images/nike.png"
              title="green iguana"
            />
            <Typography variant="h6" color="text.primary" align="center">
              Category: {product.category}
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {product.quantity}
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
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
                        handleDeleteProduct(product.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </Item>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ) : (
        <Typography variant="h6" align="center">
          Loading...
        </Typography>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products.products,
  };
};

export default connect(mapStateToProps, { previewProduct, deleteProducts })(
  Product
);
