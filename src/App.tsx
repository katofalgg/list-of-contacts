import React from 'react';
import {Route} from 'react-router';
import './App.css';
import AddContact from './components/Add/AddContact';
import EditContact from './components/Edit/EditContact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Route exact path='/' component={() => <Home/>}/>
            <Route exact path='/add' component={() => <AddContact/>}/>
            <Route exact path='/edit/:id' component={() => <EditContact/>}/>
        </div>
    );
}

export default App;
