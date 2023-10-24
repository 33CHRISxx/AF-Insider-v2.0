import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import { LayoutDefault } from './layouts/LayoutDefault';
import {LinkLayout} from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Index from './views/pubgm/Index';
import Events from './views/pubgm/Events';
import Scrims from './views/pubgm/Scrims';
import insTeams from './views/insTeams';
import Contact from './components/sections/Contact';
import Sponsor from './components/sections/Sponsor';
import FAQs from './components/sections/FAQs';
import About from './components/sections/About';
import Disclaimer from './components/sections/Disclaimer';
import Top32 from './views/pubgm/ranking/Top32';
import RankedEvents from './views/pubgm/ranking/RankedEvents';
import RequestTick from './views/pubgm/RequestTick';
import adminIndex from './views/admin/pubgm/Index';

import SEL from './views/pubgm/SEL';
import Boards from './views/pubgm/Boards/Boards';
import ZEC from './views/codm/ZEC';

//Teams
import Existence from './views/pubgm/Existence';
import Slime4kt from './views/pubgm/Slime4kt';
import Teams from './views/admin/pubgm/Teams';
import Sidizens from './views/pubgm/Sidizens';
import Prototype from './views/pubgm/Prototype';
import Active from './views/pubgm/Active';
import OldGuard from './views/pubgm/OldGuard';
import Links from './components/sections/Links';
import AddEvent from './views/admin/pubgm/Ranking/AddEvents';
import DecayEvents from './views/admin/pubgm/Ranking/DecayEvents';
import Ranking from './views/admin/pubgm/Ranking/Ranking';
import RankedEvent from './views/admin/pubgm/Ranking/RankedEvents';
import Team from './views/pubgm/Team';
import Hero from './components/sections/Hero';
import TeamCheck from './views/pubgm/TeamCheck';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/links" component={Links} layout={LinkLayout}/>
          <AppRoute exact path="/requestVerification" component={RequestTick} layout={LayoutDefault} />
          <AppRoute exact path="/admin/77events" component={AddEvent} layout={LayoutDefault} />
          <AppRoute exact path="/admin/77decay" component={DecayEvents} layout={LayoutDefault} />
          {/* <AppRoute exact path="/admin/77ranking" component={Ranking} layout={LayoutDefault} />
          <AppRoute exact path="/admin/77rankedevents" component={RankedEvent} layout={LayoutDefault} /> */}
          {/* <AppRoute exact path="/pubgm/honoredsoulsaf" component={Existence} layout={LayoutDefault} /> */}
          {/* <AppRoute exact path="/pubgm/sidizens" component={Sidizens} layout={LayoutDefault} />
          <AppRoute exact path="/pubgm/prototype" component={Prototype} layout={LayoutDefault} />
          <AppRoute exact path="/pubgm/active" component={Active} layout={LayoutDefault} />
          <AppRoute exact path="/pubgm/oldguards" component={OldGuard} layout={LayoutDefault} /> */}

<AppRoute exact path="/events" component={Events} layout={LayoutDefault} />
<AppRoute exact path="/scrims" component={Scrims} layout={LayoutDefault} />
<AppRoute exact path="/teams" component={insTeams} layout={LayoutDefault} />
          
          <AppRoute exact path="/pubgm/" component={Index} layout={LayoutDefault} />
          
          <AppRoute exact path="/Contact/" component={Contact} layout={LayoutDefault} />
          <AppRoute exact path="/Sponsor/" component={Sponsor} layout={LayoutDefault} />
          <AppRoute exact path="/FAQs/" component={FAQs} layout={LayoutDefault} />
          <AppRoute exact path="/About/" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/Disclaimer/" component={Disclaimer} layout={LayoutDefault} />
          <AppRoute exact path="/top20" component={Top32} layout={LayoutDefault} />
          <AppRoute exact path="/rankedevents" component={RankedEvents} layout={LayoutDefault} />
          <AppRoute  path="/pubgm/:teamCode" component={TeamCheck} layout={LayoutDefault} />

        
          <AppRoute exact path="/sel/" component={SEL} layout={LayoutDefault} />
          <AppRoute exact path="/codm/aer/" component={ZEC} layout={LayoutDefault} />
          <AppRoute exact path="/pubgm/boards/" component={Boards} layout={LayoutDefault} />


          <AppRoute exact path="/admin/pubgm/4x" component={adminIndex} layout={LayoutDefault} />
          <AppRoute exact path="/pubgm/apiTest" component={Teams} layout={LayoutDefault} />
          
          <AppRoute component={Contact} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;