import "./set.css";
import Places from "./place.json";

const Set = () => {
  return (
    <div>
      <div id="city-links" className="box">
        <h4 className="heading">WE DELIVER TO</h4>
        <div className="items">
          {Places.place.map((place, index) => (
            <ul className="itemslist" key={index}>
              {place.map((locaton, index_i) => (
                <li className="item" key={index_i}>
                  <a href={`/city/${locaton}`} className="item_a item_b">
                    {locaton}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Set;
