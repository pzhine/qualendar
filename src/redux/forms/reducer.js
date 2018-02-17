export default function appReducer(state = { fields: {} }, action) {
  switch (action.type) {
    case 'FORM_FIELD_CHANGED': {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.field]: action.payload.value,
        },
      }
    }
    default: {
      return state
    }
  }
}
