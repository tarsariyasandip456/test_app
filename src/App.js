import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ReservationView from './Pages/ReservationView';
import DashboardView from './Pages/DashboardView';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
         <Routes>
         <Route path="/" element={<ReservationView></ReservationView>} />
          <Route path="/dashboard" element={<DashboardView></DashboardView>} />
        </Routes>
    </Router>
  );
}

export default App;