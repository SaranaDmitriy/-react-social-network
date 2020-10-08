import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Setting from './components/Navbar//Setting/Setting';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setting' render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
