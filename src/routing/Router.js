import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeIndex from "../components/Home/HomeIndex";
import ProgramAgenda from "../components/Program/ProgramAgenda";
import Header from "../components/Common/Header/Header";
import ProgramTalkDetail from "../components/Program/ProgramTalkDetail";
import NoFound from "../components/Common/NoFound/NoFound";
import SponsorsRouter from "../components/Sponsors/SponsorsRouter";

const Router = () => {
    const title = "Title Dynamic";
    return <BrowserRouter>
        <div>
            <Header title={title}/>
            <Switch>
              <Route exact path="/" component={HomeIndex} />
              <Route exact path="/program" component={ProgramAgenda} />
              <Route path="/program/:slug" component={ProgramTalkDetail} />
               <Route path="/sponsors" component={SponsorsRouter}/>
              <Route component={NoFound} />
            </Switch>
        </div>
    </BrowserRouter>
};

export default Router;