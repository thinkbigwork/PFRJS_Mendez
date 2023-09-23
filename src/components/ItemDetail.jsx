import PropTypes from "prop-types";
import ItemQuantitySelector from "./ItemQuantitySelector";
const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container ">
      <div className="row justify-content-md-center">
        <div className="col-6 mt-5">
      <h1>{item.title}</h1>
      <img src={`../src/assets/${item.image}`}/>
      <p>Descripción: {item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoría: {item.categoryId}</p>
      <div>
      <ItemQuantitySelector />
      </div>
      <button className="btn me-4 mt-3 btn-outline-primary" onClick={() => addItem(item, 1)}>Agregar al carrito</button>
      </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
