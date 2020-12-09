import React from 'react';
import './App.css';
import ActivityCard from "./features/activity-card/ActivityCard";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (<BrowserRouter><ActivityCard/></BrowserRouter>);
}

export default App;
