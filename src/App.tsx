 import React, { useEffect, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  BrowserRouter as Router,
  Switch,
  //  Route,
  Redirect,
} from "react-router-dom";

//  import Main from "./pages/Main/Main";
// import Header from "./components/Header";
 import Footer from "./components/Footer";
// import Cabinet from "./pages/Cabinet/Cabinet";

// import Authorise from "./components/Authorise";
// import ConfirmCode from "./components/ConfirmCode";

// import Posmining from "./pages/Posmining/Posmining";
// import Transactions from "./pages/Transactions/Transactions";
// import Support from "./pages/Support/Support";
// import Order from "./pages/Order/Order";
 import { ContextApp, reducer, intialState, setLogin } from "./store/reducer";
  import "./styles/style.scss";
// import BuyTicket from "./components/BuyTicket";
// import ShowForm from "./components/form";

function App() {
   const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(dispatch, true);
    }
  }, []);
  return (
     <ContextApp.Provider value={{ dispatch, state }}>
       <Router basename={process.env.REACT_APP_ROUTER_PUBLIC_URL}>
        <div  className="main"
         
        // style={state.loader ? { height: "100vh" } : {}}
        >
          <CssBaseline />
          <Container>
            <Grid item xs={12}>
              {/* <Header /> */}
              {/* <ShowForm /> */}
              {/* <Authorise /> */}
              {/* <ConfirmCode /> */}
              {/* <BuyTicket /> */}
              {!localStorage.getItem("token") && <Redirect to="/" />}
              <Switch>
                {/* <Route path="/" exact>
                  <Main />
                </Route> */}
                {/* <Route path="/cabinet" exact>
                  <Cabinet />
                </Route> */}
                {/* <Route path="/transactions">
                  <Transactions />
                </Route> */}
                {/* <Route path="/posmining">
                  <Posmining />
                </Route> */}
                {/* <Route path="/order/:orderNumber">
                  <Order />
                </Route> */}
                {/* <Route path="/support">
                  <Support />
                </Route> */}
              </Switch>
              <Footer />
            </Grid>
          </Container>
        </div>
       </Router>
     </ContextApp.Provider>
  );
}

export default App;
