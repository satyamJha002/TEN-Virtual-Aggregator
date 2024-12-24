import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Trash2, Plus } from 'lucide-react';
import './AdminEvents.css';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    venue: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:3000/api/events/${selectedEvent._id}`, formData);
      } else {
        await axios.post('http://localhost:3000/api/events', formData);
      }
      fetchEvents();
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`http://localhost:3000/api/events/${id}`);
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setFormData({
      date: event.date,
      name: event.name,
      venue: event.venue
    });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      date: '',
      name: '',
      venue: ''
    });
    setIsEditMode(false);
    setSelectedEvent(null);
  };

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
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="delete-button"
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
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditMode ? 'Edit Event' : 'Add New Event'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="DD-MM-YYYY"
                  required
                />
              </div>
              <div className="form-group">
                <label>Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Venue</label>
                <input
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
                  {isEditMode ? 'Update' : 'Add'} Event
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