import { Edit, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import "./AdmJournal.css";
import useFetch from "../../../customAPI/useFetch";

const AdminJournal = () => {
  const [formData, setFormData] = useState({ title: "", ISSN: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedOne, setSelectedOne] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { title, ISSN } = formData;

  const { fetchData, data, loading, error } = useFetch(
    "http://localhost:3000/api/alljournals"
  );

  const { fetchData: fetchUpdateData } = useFetch(
    `http://localhost:3000/api/updatejournal/${selectedOne}`,
    "PUT"
  );

  const { fetchData: fetchNewData } = useFetch(
    `http://localhost:3000/api/newjournal`,
    "POST"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, ISSN };

    try {
      let response;
      if (isEditMode) {
        response = await fetchUpdateData(payload);
      } else {
        response = await fetchNewData(payload);
      }

      if (response.success) {
        console.log("Request successfull", response.data);
      } else {
        console.error("Request failed", response.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    }

    setIsModalOpen(false);
    fetchData();
  };

  const handleEdit = (journal, id) => {
    setIsEditMode(true);
    setSelectedOne(id);
    setIsModalOpen(true);
    setFormData({ title: journal.title, ISSN: journal.ISSN });
  };

  const { fetchData: fetchDelete } = useFetch(
    `http://localhost:3000/api/deletejournal`,
    "DELETE"
  );

  const handleDelete = async (ISSN) => {
    if (window.confirm("Are you sure to delete this journal ?")) {
      try {
        const response = await fetchDelete(null, { ISSN });

        if (response.success) {
          console.log("Delete successfull", response);
          fetchData();
        } else {
          console.error("Delete failed", response.error);
        }
      } catch (error) {
        console.log("An unexpected error occured", error);
      }
    }
  };

  return (
    <div className="admin-journal-container">
      <div className="journal-header-section">
        <h1>Journal Management</h1>
        <button
          className="journal-add-btn"
          onClick={() => {
            setIsEditMode(false),
              setFormData({ title: "" }),
              setIsModalOpen(true);
          }}
        >
          <Plus size={20} /> Add New Journal
        </button>
      </div>

      <div className="journals-table-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading journals: {error.message}</p>}
        <table className="journal-table">
          <thead className="journal-table-head">
            <tr>
              <th>Journal Details</th>
              <th className="journal-action-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.journals.map((journal) => (
              <tr key={journal._id} className="journal-table-row">
                <td className="journal-details">
                  <div className="journal-name">{journal.title}</div>
                  <div className="journal-info">{journal.ISSN}</div>
                </td>
                <td className="journal-actions-cell">
                  <button
                    className="journal-edit-button"
                    onClick={() => handleEdit(journal, journal._id)}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="journal-delete-btn"
                    onClick={() => handleDelete(journal.ISSN)}
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="journal-modal-overlay">
          <div className="journal-modal-content">
            <h2>{isEditMode ? "Update Journal" : "Add New Journal"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="journal-form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter Journal Title"
                  required
                />
              </div>
              <div className="journal-form-group">
                <label>ISSN</label>
                <input type="text" name="ISSN" value={ISSN} readOnly />
              </div>
              <div className="journal-modal-actions">
                <button
                  type="button"
                  className="journal-cancel-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="journal-submit-button">
                  {isEditMode ? "Update" : "Add"} Journal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJournal;
