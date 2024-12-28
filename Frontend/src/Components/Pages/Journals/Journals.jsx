import { useEffect, useState } from "react";
import Card from "./Card";
import "./journal.css";
import useFetch from "../../../customAPI/useFetch";

function Journals() {
  const [dataJournals, setDataJournals] = useState(null);

  const { fetchData, data, error } = useFetch(
    "http://localhost:3000/api/alljournals",
    "GET"
  );

  useEffect(() => {
    if (data) {
      setDataJournals(data);
    }
    fetchData();
  }, [data]);

  return (
    <div style={{ height: "100%" }}>
      <div className="Journals mt-8 " style={{ padding: "1rem" }}>
        <h1 className="all-heading max-w-6xl mx-auto border-red border-gray" style={{marginBottom: "0"}}> Top Journals with Impact Factors </h1>
        <div className="text-center w-100 mt-8">
        <button className=" tablinks">ACTIVE QUALITY JOURNALS</button>
        </div>
        <h3>SCOPUS INDEXED JOURNALS</h3>
      </div>
      <div style={{ padding: "2rem" }}>
        <div className="cards grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* flex flex-wrap justify-start gap-8 */}
          {error && <div>Error .... {error}</div>}

          {dataJournals?.journals?.map((journal) => (
            <Card
              key={journal._id}
              title={journal.title}
              ISSN={journal.ISSN || "N/A"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journals;
