export default {
  toggleMenuIsActive(isActive) {
    return {
      type: 'TOGGLE_MENU_ACTIVE',
      payload: isActive,
    }
  },
  saveEvent(eventData) {
    return {
      type: 'SAVE_EVENT',
      payload: eventData,
    }
  },
  deleteEvent(id) {
    return {
      type: 'DELETE_EVENT',
      payload: id,
    }
  },
}
