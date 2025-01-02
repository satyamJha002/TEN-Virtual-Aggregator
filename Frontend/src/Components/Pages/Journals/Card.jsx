import { Link } from "react-router-dom";
const Card = ({ title, ISSN }) => {
  const shortISSN = ISSN.toString().split("-");
  const lastISSN = shortISSN[shortISSN.length - 1];

  return (
    <div className="card">
      <div className="row">
        <div className="topofrow">
          <h5 className="text-center">{title}</h5>
          <div className="max-sm:text-md max-md:text-md text-left">
            <p>
              <strong>ISSN : </strong>
              {lastISSN}
            </p>
            <p>
              <strong>Indexed In :</strong> High Impact Indexing Database
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex ">
        <Link
          to="/submit"
          state={{ title }} // Passing the title via state
          className="journal-btn"
        >
          Submit Paper
        </Link>
      </div>
    </div>
  );
};

export default Card;
