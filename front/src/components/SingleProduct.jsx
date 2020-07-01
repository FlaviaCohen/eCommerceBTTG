import React from "react";
import { Carousel } from "react-bootstrap";
import { ListGroupItem, ListGroup, Form, Button } from "react-bootstrap"

const SingleProduct = ({
  product,
  handlerSubmitCart,
  handleDeleteCart,
  cart,
  reviews,
  description,
  rate,
  handlerDescriptionChange,
  handlerRateChange,
  handlerReviewSubmit,
  rateAverage,
  revCounter,
  user

}) => {
  
  return (
  <div>
    <div className="container-fluid" style={{ width: "80%" }}>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={product.img1Url} />
              </Carousel.Item>
              {product.img2Url ? (
                <Carousel.Item>
                  <img className="d-block w-100" src={product.img2Url} />
                </Carousel.Item>
              ) : null}
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">$ {product.price}</p>
              <small className="text-muted">Stock: {product.stock}</small>
              <div>
              <br/>
              {<p className="card-text">Valoraciones: {revCounter}</p>}
              {<p className="card-text">Promedio: {rateAverage}</p>}
              </div>

              <div>
                <br></br>
                <br></br>
                {cart.includes(product.id) ? (
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      handleDeleteCart(product.id);
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      handlerSubmitCart(product.id, product.price);
                    }}
                  >
                    Añadir al carro
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>     

{/* REVIEW SECTION  */}
    {user.id ? 
    <div className="reviewCard">
      <div className="reviewCardCont">
          <Form onSubmit={(event)=>handlerReviewSubmit(event, product.id)}>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label><h5>Califica el producto</h5></Form.Label>
            <Form.Control
            as="select" multiple 
            onChange={handlerRateChange} 
            value={rate} >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label><h5>Escribe una pequeña reseña</h5></Form.Label>
              <Form.Control 
              as="textarea" 
              rows="3"
              onChange={handlerDescriptionChange}
              value={description}/>
            </Form.Group>
        <Button 
          type="submit" 
          className="btn btn-dark" 
          >Calificar
        </Button>
      </Form>
    </div>

        <div>
          <ListGroup className="list-group-flush">
            <div>{reviews.length >=1 ? reviews.map((review)=>(
            <div key={review.id} className="reviewCards"><ListGroupItem>
              {`Usuario: ${review.user.firstName}`}<br></br>
              {`Calificación: ${review.rate}`}<br></br>
              {`Descripción: ${review.description}`}
            </ListGroupItem>
            </div>
            )) : <div><h5>Este productor aún no tiene calificaciones</h5></div>}
            </div>
            </ListGroup>
          </div>
    </div>
        :
    <div className="reviewCard">
     <ListGroup className="list-group-flush">
        <div>{reviews.length >=1 ? reviews.map((review)=>(
        <div key={review.id} className="reviewCards">
        <ListGroupItem>
          {`Usuario: ${review.user.firstName}`}<br></br>
          {`Calificación: ${review.rate}`}<br></br>
          {`Descripción: ${review.description}`}
          </ListGroupItem>
        </div>
        )) : <div><h5>Este productor aún no tiene calificaciones</h5></div>}
        </div>
      </ListGroup>
    </div>
    }
{/* REVIEW SECTION  */}

  </div>
</div>
  );
};

export default SingleProduct;
