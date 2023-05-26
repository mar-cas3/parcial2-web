import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { getCoffees } from "../../shared/helpers";
import CoffeeDetail from "./CoffeeDetail";
import "./List.css";

function CoffeeList() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [idx, setIdx] = useState();
  useEffect(() => {
    getCoffees().then((data) => setCoffeeList(data));
  }, []);

  function showDetail(id) {
    setClicked(true);
    setIdx(id);
  }

  function drawDetail() {
    return <CoffeeDetail coffeeId={idx} />;
  }
  const buildCards = coffeeList.map((coffee) => {
    return (
      <tr onClick={() => showDetail(coffee.id)}>
        <th scope="row">{coffee.id}</th>
        <td>{coffee.nombre}</td>
        <td>{coffee.tipo}</td>
        <td>{coffee.region}</td>
      </tr>
    );
  });

  return (
    <div className="list-grid">
      <div>
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                {" "}
                <FormattedMessage id="name" />
              </th>
              <th scope="col">
                {" "}
                <FormattedMessage id="type" />
              </th>
              <th scope="col">
                {" "}
                <FormattedMessage id="region" />
              </th>
            </tr>
          </thead>
          <tbody>{buildCards}</tbody>
        </table>
      </div>
      <div>{clicked && drawDetail()}</div>
    </div>
  );
}

export default CoffeeList;
