import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './Reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={createStore(reducer)}>
    <App />
</Provider>);