import { Link } from "react-router-dom";
const Card = ({ title, ISSN }) => {
  return (
    <div className='card'>
      <div className='row'>
        <div className='topofrow'>
          <h5>{title}</h5>
          <p>
            <strong>ISSN :</strong>
            {ISSN}
          </p>
          <p>
            <strong>Indexed In :</strong> High Impact Indexing Database
          </p>
        </div>
      </div>
      <div>
        <Link
          to='/submit'
          state={{ title }} // Passing the title via state
          className='journal-btn'
        >
          Submit Paper
        </Link>
      </div>
    </div>
  );
};

export default Card;
