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
import Title from '../components/Dashboard/Title';
// import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { previewProduct, deleteProducts } from '../redux/actions';

function Product(props) {
  // const navigate = useNavigate();
  let { id } = useParams();
  const { product, previewProduct, deleteProducts, isLoading } = props;

  useEffect(() => {
    previewProduct(id);
  }, []);

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      deleteProducts(id);
      // navigate('/dashboard');
    }
  };

  return (
    <>
      {isLoading && <Title>Loading...</Title>}
      {
        !isLoading && product ? (
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
        ) : null
        // (
        //   <Typography variant="h6" align="center">
        //     No products found
        //   </Typography>
        // )
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  product: state.products.products,
  isLoading: state.products.loading,
});

const mapDispatchToProps = (dispatch) => ({
  previewProduct: (id) => dispatch(previewProduct(id)),
  deleteProducts: (id) => dispatch(deleteProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
