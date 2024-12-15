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
        {/* <a
          href='https://www.ardaconference.com/journals/scopus-indexed/paper-submission?jid=1242'
          target='_blank'
          className='journal-btn'
        >
          Submit Paper
        </a> */}
        <Link to='/submit' target='_blank' className='journal-btn'>
          Submit Paper
        </Link>
      </div>
    </div>
  );
};

export default Card;
