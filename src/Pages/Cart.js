import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/slice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const deleteFromCart = (id) => {
    dispatch(removeCart(id));
  };

  // Manage quantity per item using an object
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cartData.forEach((item) => {
      initialQuantities[item.id] = 1; // Default quantity is 1
    });
    return initialQuantities;
  });

  // Calculate total amount with quantity
  const totalAmount = cartData.reduce((total, item) => {
    const quantity = quantities[item.id] || 1; // Get the quantity from state
    return total + item.price * quantity;
  }, 0);

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">
                    {cartData && cartData.length <= 0
                      ? 'No items in your cart'
                      : cartData.length + ' items'}
                  </h5>
                </div>
                <div className="card-body">
                  {cartData.map((value, index) => {
                    return (
                      <div key={index}>
                        <div className="row">
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={value.image}
                                className="w-25"
                                alt="Product"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <p>
                              <strong>{value.title}</strong>
                            </p>
                            <p>{value.category}</p>
                            <button
                              onClick={() => deleteFromCart(value.id)}
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-tooltip-init
                              title="Remove item"
                            >
                              <DeleteForeverIcon />
                            </button>
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-tooltip-init
                              title="Move to the wish list"
                            >
                              <FavoriteIcon />
                            </button>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 me-2"
                                onClick={() => handleDecrease(value.id)}
                              >-
                                <i className="fas fa-minus" />
                              </button>
                              <div data-mdb-input-init className="form-outline">
                                <input
                                  id="form1"
                                  min={1}
                                  name="quantity"
                                  value={quantities[value.id] || 1} // Display quantity
                                  type="number"
                                  className="form-control"
                                  readOnly //Prevent direct input.
                                />
                                <label className="form-label" htmlFor="form1">
                                  Quantity
                                </label>
                              </div>
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 ms-2"
                                onClick={() => handleIncrease(value.id)}
                              >+
                                <i className="fas fa-plus" />
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>₹{value.price * (quantities[value.id] || 1)}</strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* ... (rest of your component) ... */}
            </div> <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>₹{totalAmount}</span> {/* Display total here */}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>₹{totalAmount}</strong> {/* Total amount */}
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      
    
            <div className="col-md-4">
              {/* ... (summary) ... */}
            </div>
          
        
      </section>
    </>
  );
}