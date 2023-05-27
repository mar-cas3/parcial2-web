import { useEffect, useState } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import { getCoffeeById } from "../../shared/helpers";
import "./Detail.css";

function CoffeeDetail(props) {
  const [coffee, setCoffee] = useState({});
  // const params = useParams();
  const coffeeId = props.coffeeId;

  useEffect(() => {
    getCoffeeById(coffeeId).then((data) => setCoffee(data));
  }, [coffeeId]);
  return (
    <div className="coffee-data">
      {coffee.nombre && <h2 className="coffee-name">{coffee.nombre.toUpperCase()}</h2>}
      {coffee.fecha_cultivo && <FormattedDate
        value={new Date(coffee.fecha_cultivo)}
        year="numeric"
        month="numeric"
        day="numeric"
      />}
      <img className="coffee-img" src={coffee.imagen} alt={coffee.nombre}></img>
      <ul>
        <li>
          <FormattedMessage id="notes" />
        </li>
        <li> {coffee.notas}</li>
        <br></br>
        <li className="height-data">
          <FormattedMessage id="height" />
          <FormattedNumber value={coffee.altura} /> 
          <FormattedMessage id="height-units" />
        </li>
      </ul>
    </div>
  );
}

export default CoffeeDetail;
