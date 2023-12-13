import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll } from "../redux/orderSlice";
import "./ThanksModal.css";

function ThanksModal(props) {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteAll());

    props.onHide(false);
    console.log(props.onHide);
  };
  console.log(order);

  const totalPrice = order.reduce((acumulator, currentProduct) => {
    const productPrice = currentProduct.price * currentProduct.qty;
    return acumulator + productPrice;
  }, 0);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="gracias" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ¡Gracias por tu compra!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="detalle-modal">
        <div className="row">
          <div className="col-9">
            <strong>Detalle del pedido:</strong>
            <ul className="ul-modal">
              {order.map((product) => (
                <li key={product.id}>
                  {product.name} - $
                  {product.price * product.qty}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">
            <p>Total: <strong>${totalPrice}</strong></p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="cerrar-modal">
        <Button className="btn-cerrar-modal" onClick={handleOnClick}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThanksModal;
