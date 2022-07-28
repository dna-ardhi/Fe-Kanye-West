import React, { useEffect, useState } from 'react';
import {
  Container,
  Image,
  ButtonGroup,
  Button,
  ListGroup,
  InputGroup,
  Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addMyQuote, fetchQuote } from './redux/action';

function App() {
  const dispatch = useDispatch();
  const { quote, favorites, myQuotes } = useSelector((state) => state.quotes);

  const [newQuote, setNewQuote] = useState('');

  const getQuote = () => {
    dispatch(fetchQuote());
  };

  const addToFavoriteHandler = () => {
    dispatch(addFavorite(quote));
  };

  const addQuote = (e) => {
    e.preventDefault();
    dispatch(addMyQuote(newQuote));
    setNewQuote('');
  };

  useEffect(() => {
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className='d-flex flex-column align-items-center justify-content-between vh-100 w-100'>
      <div className='d-flex flex-column align-items-center'>
        <Image src='./assets/kanye.png' className='img-fluid kanye-pict' />
        <h1 className='mt-5'>Kanye West Quote</h1>
        <figure className='text-center my-4'>
          <blockquote className='blockquote'>
            <p>
              <em>"{quote}"</em>
            </p>
          </blockquote>
          <figcaption className='blockquote-footer'>kanye-west</figcaption>
        </figure>

        <ButtonGroup>
          <Button variant='primary' onClick={getQuote}>
            Get Quote
          </Button>
          <Button variant='outline-primary' onClick={addToFavoriteHandler}>
            Add Favorite
          </Button>
        </ButtonGroup>

        <Form onSubmit={addQuote}>
          <InputGroup className='my-4'>
            <Form.Control
              placeholder='create your own quote'
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
            />
            <Button type='submit' variant='outline-dark'>
              Add
            </Button>
          </InputGroup>
        </Form>
      </div>

      {favorites.length > 0 && (
        <div className='favorite'>
          <h5>Favorite</h5>
          <div className='list-quote'>
            <ListGroup>
              {favorites.map((favQuote, idx) => (
                <ListGroup.Item
                  key={`fav_${idx}`}
                  className='text-wrap'
                  style={{ width: '350px' }}
                >
                  {favQuote}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      )}

      {myQuotes.length > 0 && (
        <div className='myquote'>
          <h5 className='text-end'>My Quotes</h5>
          <div className='list-quote'>
            <ListGroup>
              {myQuotes.map((myQuote, idx) => (
                <ListGroup.Item
                  key={`my_${idx}`}
                  className='text-wrap'
                  style={{ width: '350px' }}
                >
                  {myQuote}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;
