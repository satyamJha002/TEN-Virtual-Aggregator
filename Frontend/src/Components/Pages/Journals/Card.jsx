import { Link } from "react-router-dom";
const Card = ({ title, ISSN }) => {
  return (
    <div className='card'>
      <div className='row'>
        <div className='topofrow'>
          <h5 className="text-center">{title}</h5>
          <div className="p-2 text-center">
          <p>
            <strong>ISSN :</strong>
            {ISSN}
          </p>
          <p>
            <strong>Indexed In :</strong> High Impact Indexing Database
          </p>
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
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
