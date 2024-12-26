import React, { useState, useEffect } from "react";
import { Edit, Trash2, Plus } from "lucide-react";
import useEventsStore from "../../../services/eventsStore";
import "./AdminEvents.css";

const AdminEvents = () => {
  const {
    events,
    loading,
    error,
    fetchEvents,
    addEvent,
    updateEvent,
    deleteEvent,
  } = useEventsStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    venue: "",
  });

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateEvent(selectedEvent._id, formData);
      } else {
        await addEvent(formData);
      }
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setFormData({
      date: event.date,
      name: event.name,
      venue: event.venue,
    });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      date: "",
      name: "",
      venue: "",
    });
    setIsEditMode(false);
    setSelectedEvent(null);
  };

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="admin-container">
      <div className="header-section">
        <h1>Scientific Events Management</h1>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="add-button"
        >
          <Plus size={20} /> Add New Event
        </button>
      </div>

      <div className="events-table-container">
        <table>
          <thead>
            <tr>
              <th>Event Details</th>
              <th className="actions-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td className="event-details">
                  <div className="event-name">{event.name}</div>
                  <div className="event-info">Date: {event.date}</div>
                  <div className="event-info">Venue: {event.venue}</div>
                </td>
                <td className="actions-cell">
                  <button
                    onClick={() => handleEdit(event)}
                    className="edit-button"
                    aria-label="Edit event"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="delete-button"
                    aria-label="Delete event"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="2" className="no-events">
                  No events found. Add your first event!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isEditMode ? "Edit Event" : "Add New Event"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="DD-MM-YYYY"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Event Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="venue">Venue</label>
                <input
                  id="venue"
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  {isEditMode ? "Update" : "Add"} Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
