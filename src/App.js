import './App.css';
import Home from "./pages/home/Home";
import ReservationList from "./pages/reservationList/ReservationList";
import Reservation from "./pages/reservation/Reservation";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactAndInfo from "./pages/contactAndInfo/ContactAndInfo";

function App() {
  return (

      <div className="App">
        <Router>
             <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/info">info & contact</Link>
                    </li>
                    <li>
                        <Link to="/reservation">Reservation</Link>
                    </li>
                    <li>
                        <Link to="/list">list</Link>
                  </li>
               </ul>
            </nav>

        <Switch>
          <Route exact path="/home">
              <Home />
          </Route>
          <Route exact path="/reservation">
              <Reservation />
          </Route>
            <Route exact path="/info">
                <ContactAndInfo/>
            </Route>
          <Route exact path="/list">
              <ReservationList />
          </Route>
      </Switch>

    </Router>
</div>
  );
}

export default App;
