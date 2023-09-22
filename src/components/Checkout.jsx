import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { createOrder } from "../services";
import Field from "./Field";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const total = getCartTotal(cart);

  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    age: "",
  });

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  const { name, phone, email } = formState;

  const onChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const isFormValid = name && phone && email;

  const onSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      console.log(`Tu nombre es: ${name}, telefono: ${phone}, email: ${email}`);
    }
  };

return (
    <div>
      <h1>Checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p>COMPRA EXITOSA, N° de pedido: {orderId}</p>}

      {!orderId && (
        <>
          <div>
            <h4>Formulario de contacto</h4>
              <form onSubmit={onSubmit}>
                <Field label="Nombre" name="name" onChange={onChange} />
                <Field label="Telefono" name="phone" onChange={onChange} />
                <Field label="Email" name="email" onChange={onChange} />

                <div>
                  <h4>Productos en el carrito</h4>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio por unidad: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                    <p>Total de la compra: {total}</p>
                </div>

                <div>
                  <button disabled={!isFormValid} onClick={handleCheckout} type="submit">Finalizar compra</button>
                </div>

              </form>
          </div>

          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
