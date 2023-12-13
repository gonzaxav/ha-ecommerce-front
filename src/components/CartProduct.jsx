import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../pages/Cart.css";
import { addProduct, removeProduct, reduceQty } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";

function CartProduct({ product }) {
  const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
  const [itemAmount, setItemAmount] = useState(product.qty);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const plusItem = () =>
    itemAmount < 9 &&
    itemAmount < product.stock &&
    dispatch(
      addProduct({
        productId: product.productId,
        name: product.name,
        photo: product.photo,
        price: product.price,
        slug: product.slug,
        qty: 1,
        stock: product.stock,
      })
    ) &&
    setItemAmount(itemAmount + 1);

  const minusItem = () => {
    itemAmount > 1 &&
      dispatch(reduceQty(product.productId)) &&
      setItemAmount(itemAmount - 1);
    itemAmount === 1 && dispatch(removeProduct(product.productId));
  };

  const handleRemove = () => dispatch(removeProduct(product.productId));

  return (
    <tr>
      <td>
        <span className="span-carrito">
          <img
            onClick={() => navigate(`/producto/${product.slug}`)}
            className="img-carrito d-none d-lg-inline"
            src={supabaseUrl + "img/" + product.photo[0]}
            alt=""
          />
        </span>
        <span
          id=""
          className="span-carrito descripcion-1 ms-2"
          onClick={() => navigate(`/producto/${product.slug}`)}
        >
          {product.name}
        </span>
      </td>

      <td>
        <span className="span-carrito">$U {product.price}</span>
      </td>
      <td className="cantidad">
        <div className="select-container">
          <button onClick={minusItem} className="border-0 plus-item">
            -
          </button>
          <span className="mx-1 fs-6 border px-2 py-1 rounded">
            {itemAmount}
          </span>
          <button onClick={plusItem} className="border-0 plus-item">
            +
          </button>

          <button
            onClick={handleRemove}
            type="button"
            className="btn btn-secondary btn-borrar-2 ms-4"
          >
            Borrar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CartProduct;
