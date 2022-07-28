import axios from 'axios';
import { QUOTE } from '../action';

export const fetchQuote = () => async (dispatch) => {
  const response = await axios('https://api.kanye.rest');
  dispatch({
    type: QUOTE.SET_QUOTE,
    payload: response.data.quote,
  });
};

export const addFavorite = (quote) => (dispatch, getState) => {
  const favorites = getState().quotes.favorites;

  const exist = favorites.find((item) => item === quote);

  if (!exist) {
    const newFavorite = [...favorites, quote];
    dispatch({
      type: QUOTE.SET_FAVORITE,
      payload: newFavorite,
    });
  }
};
export const addMyQuote = (quote) => (dispatch, getState) => {
  const myQuote = getState().quotes.myQuotes;

  const exist = myQuote.find((item) => item === quote);

  if (!exist && quote !== '') {
    const newQuote = [...myQuote, quote];
    dispatch({
      type: QUOTE.SET_MY_QUOTE,
      payload: newQuote,
    });
  }
};
