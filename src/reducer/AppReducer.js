export const InitialState = {
  mails: [],
  trash: [],
  spam: [],
  filters: []
};
export function mailReducer(state, action) {
  switch (action.type) {
    case "fetchMails": {
      return {
        ...state,
        mails: action.payload
      };
    }
    case "trash":
      return {
        ...state,
        trash: [...state.trash, action.payload],
        mails: state.mails.filter((item) => item.mId !== action.payload.mId)
      };
    case "spam":
      return {
        ...state,
        spam: [...state.spam, action.payload],
        mails: state.mails.filter((item) => item.mId !== action.payload.mId)
      };
    case "TOGGLE_STARRED":
      return {
        ...state,
        mails: state.mails.map((item) =>
          action.payload.mId === item.mId
            ? { ...item, isStarred: !item.isStarred }
            : item
        )
      };
    case "TOGGLE_UNREAD":
      return {
        ...state,
        mails: state.mails.map((item) =>
          action.payload.mId === item.mId
            ? { ...item, unread: !item.unread }
            : item
        )
      };
    case "FILTERS":
      return {
        ...state,
        filters: state.filters.includes(action.payload)
          ? state.filters.filter((item) => item !== action.payload)
          : [...state.filters, action.payload]
      };
    case "RESTORE":
      return {
        ...state,
        trash:
          action.payload.page === "trash"
            ? state.trash.filter(({ mId }) => mId !== action.payload.item.mId)
            : state.trash,
        spam:
          action.payload.page === "spam"
            ? state.spam.filter(({ mId }) => mId !== action.payload.item.mId)
            : state.spam,
        mails: [...state.mails, action.payload.item]
      };
    default:
      return state;
  }
}
