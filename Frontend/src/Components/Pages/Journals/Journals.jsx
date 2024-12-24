import Card from "./Card";
import "./journal.css";

function Journals() {
  return (
    <div style={{ height: "100%" }}>
      <div className="Journals" style={{ padding: "0 3.4rem" }}>
        <h1> Top Journals with Impact Factors </h1>
        <button className="tablinks">ACTIVE QUALITY JOURNALS</button>
        <h3>SCOPUS INDEXED JOURNALS</h3>
      </div>
      <div style={{ padding: "3.4rem" }}>
        <div className="cards grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* flex flex-wrap justify-start gap-8 */}
          <Card title="Scopus Q1 / Scimago Q2" ISSN="empty" />
          <Card
            title="South Eastern European Journal of Public Health"
            ISSN="2197-5248"
          />
          <Card title="Nanotechnology Perceptions" ISSN="1660-6795" />
          <Card
            title="European Economics Letters"
            ISSN="2323-5233 / 2323-5233"
          />
          <Card title="Library Progress International" ISSN="0970-1052" />
          <Card title="Frontiers in Health Informatics" ISSN="2676-7104" />
          <Card
            title="Journal of Computational Analysis and Applications"
            ISSN="1521-1398"
          />
          <Card title="Letters in High Energy Physics" ISSN="2632-2714" />
          <Card title="Analysis and Metaphysics" ISSN="1584-8574" />
          <Card
            title="African Journal of Biological Sciences"
            ISSN="2663-2187"
          />
          <Card title="Journal of Electrical Systems (JES)" ISSN="1112-5209" />
          <Card
            title="Educational Administration: Theory and Practice"
            ISSN="2148-2403"
          />
          <Card
            title="International Journal of Applied Engineering and Technology (London)"
            ISSN="2633-4828"
          />
          <Card title="Obstetrics and Gynaecology Forum" ISSN="1029-1962" />
          <Card
            title="International Journal of Intelligent Systems and Applications in Engineering (IJISAE)"
            ISSN="2147-6799"
          />
          <Card title="Migration Letters" ISSN="1741-8984" />
          <Card title="Journal of Namibian Studies" ISSN="1863-5954" />
          <Card title="Journal of Advanced Zoology" ISSN="0253-7214" />
          <Card title="European Chemical Bulletin" ISSN="2063-5346" />
          <Card
            title="Journal of Survey in Fisheries Sciences"
            ISSN="2368-7487"
          />
          <Card
            title="Journal of Pharmaceutical Negative Results"
            ISSN="2229-7723 / 0976-9234"
          />
          <Card title="AIP Conference Proceedings" ISSN="0094-243X" />
          <Card
            title="Natural Volatiles and Essential Oilss"
            ISSN="2148-9637"
          />
          <Card
            title="Journal of International Dental and Medical Research - Open Access Journal"
            ISSN="1309-100X"
          />
          <Card title="Experimental Oncology" ISSN="1812-9269" />
          <Card
            title="Colombian Journal of Chemical-Pharmaceutical Sciences"
            ISSN="0034-7418"
          />
          <Card title="Foods and Raw Materials" ISSN="2308-4057" />
          <Card title="Materiale Plastice" ISSN="0025-5289" />
          <Card
            title="International Journal of Food and Nutritional Sciences"
            ISSN="2320-7876 / 2319-1775"
          />
          <Card
            title="Biological Forum-An International Journal"
            ISSN="0975-1130"
          />
          <Card title="Journal of Electrical Systems (JES)" ISSN="1112-5209" />
          <Card title="Naturalista Campano" ISSN="1827-7160" />
          <Card title="Migration Letters" ISSN="1741-8984" />
          <Card title="Journal of Advanced Zoology" ISSN="0253-7214" />
          <Card
            title="European Economics Letters"
            ISSN="2323-5233 / 2323-5233"
          />
          <Card
            title="Journal of Pharmaceutical Negative Results"
            ISSN="2229-7723 / 0976-9234"
          />
          <Card title="Chemical Methodologies" ISSN="2588-4344" />
          <Card title="Cardiometry" ISSN="2304-7232" />
          <Card title="Foods and Raw Materials" ISSN="2308-4057" />
          <Card
            title="Advances in Pharmacology and Pharmacy"
            ISSN="2332-0036 (Print); 2332-0044 (Online)"
          />
          <Card title="Eurasian Chemical Communications" ISSN="2676-6280" />
        </div>
      </div>
    </div>
  );
}

export default Journals;
