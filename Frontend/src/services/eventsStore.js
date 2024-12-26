import { create } from 'zustand';
import axios from 'axios';

const useEventsStore = create((set) => ({
  events: [],
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('http://localhost:3000/api/events');
      const formattedEvents = response.data
        .map(event => ({
          ...event,
          month: new Date(event.date.split('-').reverse().join('-')).toLocaleString('en-US', { month: 'long' })
        }))
        .sort((a, b) => {
          const dateA = new Date(a.date.split('-').reverse().join('-'));
          const dateB = new Date(b.date.split('-').reverse().join('-'));
          return dateA - dateB;
        });
      set({ events: formattedEvents, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addEvent: async (eventData) => {
    set({ loading: true });
    try {
      const response = await axios.post('http://localhost:3000/api/events', eventData);
      set(state => {
        const updatedEvents = [...state.events, {
          ...response.data,
          month: new Date(eventData.date.split('-').reverse().join('-')).toLocaleString('en-US', { month: 'long' })
        }].sort((a, b) => {
          const dateA = new Date(a.date.split('-').reverse().join('-'));
          const dateB = new Date(b.date.split('-').reverse().join('-'));
          return dateA - dateB;
        });
        return { events: updatedEvents, loading: false };
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updateEvent: async (id, eventData) => {
    set({ loading: true });
    try {
      const response = await axios.put(`http://localhost:3000/api/events/${id}`, eventData);
      set(state => {
        const updatedEvents = state.events
          .map(event => 
            event._id === id ? {
              ...response.data,
              month: new Date(eventData.date.split('-').reverse().join('-')).toLocaleString('en-US', { month: 'long' })
            } : event
          )
          .sort((a, b) => {
            const dateA = new Date(a.date.split('-').reverse().join('-'));
            const dateB = new Date(b.date.split('-').reverse().join('-'));
            return dateA - dateB;
          });
        return { events: updatedEvents, loading: false };
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deleteEvent: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`http://localhost:3000/api/events/${id}`);
      set(state => ({
        events: state.events.filter(event => event._id !== id),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useEventsStore;