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
    <>
      <div className="coffee-data">
        <h2>{coffee.nombre}</h2>
        <FormattedDate
                value={new Date(coffee.fecha_cultivo)}
                year="numeric"
                month="numeric"
                day="numeric"
              />
        <img src={coffee.imagen} alt={coffee.nombre}></img>
        <ul>
          <li><FormattedMessage id="notes" /></li>
          <li>  {coffee.notas}</li>
          <li> <FormattedMessage id="height" />
         <FormattedNumber value={coffee.altura}/></li>
          </ul>
          </div>
    </>
  );
}

export default CoffeeDetail;
