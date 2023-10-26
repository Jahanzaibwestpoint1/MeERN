import logo from './logo.svg';
import './App.css';
import RouterDiver from './router/Router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleAllShoppingList } from './store/Action';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleAllShoppingList())
  }, [])


  return (
    <div>
      <RouterDiver />
    </div>
  );
}

export default App;


// port:5432