import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      <h1 className="text-center mt-5">PRODUCTOS</h1>
    <div className="text-center">
    <Link to="/checkout">Ir a finalizar compra</Link>
    </div>

      <div className="container text-center">
        <div className="row">
            {items.map((item) => (
              <div className="col-4 mt-5" key={item.id}>
                <Link className="navbar-brand" to={`/item/${item.id}`}>
                  <div className=" border rounded p-2">
                  <h3 className="fs-4 mt-4">{item.title}</h3>
                  <img src={`../src/assets/${item.image}`}/>
                  <p>Precio: ${item.price}</p>
                  <p>Categoría: {item.categoryId}</p>
                  </div>
                </Link>
              </div>
            ))}  
        </div>
      </div>
    </div>

  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
