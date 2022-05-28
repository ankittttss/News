import "./App.css";

import React, { useState } from "react";
import Navbar from "./compoment/Navbar";
import News from "./compoment/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS__API;

  const [progress, setprogress] = useState(0);

  const pageNo = 9;
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={4} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="buisness"
              pageSize={pageSize}
              country="in"
              category="buisness"
            />
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="entertainment"
              pageNo={pageNo}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="health"
              pageSize={pageNo}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            {" "}
            <News
              setProgress={setprogress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
