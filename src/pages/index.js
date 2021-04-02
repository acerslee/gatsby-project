import * as React from "react"
import Header from './Header.js';
import Welcome from './Welcome.js';
import PersonalSection from './Personal.js';
import ProjectsList from './ProjectsList';
import AllProjects from './AllProjects.js';
import Footer from './Footer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const IndexPage = () => {
  return (
    <BrowserRouter>
      <div className = 'app-list'>
        <Header />
          <Switch>
            <Route path = '/' exact render = {() =>
              <div>
                {/* <Welcome />
                <PersonalSection /> */}
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

export default IndexPage
