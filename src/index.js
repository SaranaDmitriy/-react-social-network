import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you?', numLike: '15' },
  { id: 2, message: "It's my first post", numLike: '10' },
  { id: 3, message: "Work?", numLike: '7' },
  { id: 4, message: "Hello", numLike: '1' },
];

let dialogs = [
  { id: 1, name: 'Dimka' },
  { id: 2, name: 'Valerka' },
  { id: 3, name: 'Vita' },
  { id: 4, name: 'Maksik' },
  { id: 5, name: 'Bratishkin' },
  { id: 6, name: 'Tatiyana' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Good morning' },
  { id: 6, message: 'Miya' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
