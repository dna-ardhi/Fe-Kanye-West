import { QUOTE } from '../action';

const initialState = {
  quote: '',
  favorites: [],
  myQuotes: [],
};

const quoteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case QUOTE.SET_QUOTE:
      return {
        ...state,
        quote: payload,
      };
    case QUOTE.SET_FAVORITE:
      return {
        ...state,
        favorites: payload,
      };
    case QUOTE.SET_MY_QUOTE:
      return {
        ...state,
        myQuotes: payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
