import * as React from "react"
import Header from './Header.js';
import Welcome from './Welcome.js';
import PersonalSection from './Personal.js';
import ProjectsList from './ProjectsList';
import AllProjects from './AllProjects.js';
import Footer from './Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <BrowserRouter>
      <div id = 'app-list'>
        <Helmet title = 'Alex Lee Portfolio' />
        <Header />
          <Switch>
            <Route path = '/' exact render = {() =>
              <div>
                <Welcome />
                <PersonalSection />
                <ProjectsList />
                <Footer />
              </div>
            }
            />
            <Route path = '/projects' exact component = {AllProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default IndexPage;