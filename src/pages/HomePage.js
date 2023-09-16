import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
// pages
import FrontPage from "./FrontPage";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ClientDashboard from "./client_dashboard/Dashboard";
import FreelancerDashboard from "./freelancer/Dashboard";
import ClientProposal from "./client_dashboard/Proposal";
import ClientViewProposal from "./client_dashboard/ViewProposal";
import HireFreelancer from "./client_dashboard/Hire";
import PostJob from "./client_dashboard/PostJob";
import ClientProfile from "./client_dashboard/Profile";
import TalentSearch from "./client_dashboard/FindTalent";
import TalentProfile from "./client_dashboard/TalentProfile";
import PersonalDetail from "./personal/Setting";
import JobFind from "./job/FindJob";
import SubmitProposal from "./proposal/SubmitProposal";
import MyProposal from "./proposal/MyProposal";
import ProposalDetail from "./proposal/ProposalDetail";
import WithdrawProposal from "./proposal/WithdrawProposal";
import Notification from "./notification/Notification.js";
import ProjectAnalytic from "./project/ProjectAnalytic";
import Connection from "./connection/Connection";
import Contract from "./contract/Contract";
import SubmitProject from "./contract/SubmitProject";
import Offer from "./freelancer/Offer";

import Chat from "./chat/Chat";

// extra pages 

import NotFoundPage from "./NotFound";
import ServerError from "./ServerError";

// components
import Preloader from "../components/Preloader";
import TopNavbar from '../components/TopNavbar';
import Footer from "../components/Footer";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebarClient = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        {/* <Sidebar /> */}

        <TopNavbar />
        <main className="content">
          {/* <Navbar /> */}
          <Component {...props} />
        </main>
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </>
    )}
    />
  );
};


const HomePage = () => (
  <Switch>
    <RouteWithLoader exact path={Routes.FrontPage.path} component={FrontPage} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    <RouteWithSidebarClient exact path={Routes.ClientDashboard.path} component={ClientDashboard} />
    <RouteWithSidebarClient exact path={Routes.FreelancerDashboard.path} component={FreelancerDashboard} />
    <RouteWithSidebarClient exact path={Routes.ClientProposal.path} component={ClientProposal} />
    <RouteWithSidebarClient exact path={Routes.ClientViewProposal.path} component={ClientViewProposal} />
    <RouteWithSidebarClient exact path={Routes.HireFreelancer.path} component={HireFreelancer} />
    <RouteWithSidebarClient exact path={Routes.PostJob.path} component={PostJob} />
    <RouteWithSidebarClient exact path={Routes.ClientProfile.path} component={ClientProfile} />
    <RouteWithSidebarClient exact path={Routes.TalentSearch.path} component={TalentSearch} />
    <RouteWithSidebarClient exact path={Routes.TalentProfile.path} component={TalentProfile} />
    <RouteWithSidebarClient exact path={Routes.PersonalDetail.path} component={PersonalDetail} />
    <RouteWithSidebarClient exact path={Routes.JobFind.path} component={JobFind} />
    <RouteWithSidebarClient exact path={Routes.SubmitProposal.path} component={SubmitProposal} />
    <RouteWithSidebarClient exact path={Routes.MyProposal.path} component={MyProposal} />
    <RouteWithSidebarClient exact path={Routes.ProposalDetail.path} component={ProposalDetail} />
    <RouteWithSidebarClient exact path={Routes.WithdrawProposal.path} component={WithdrawProposal} />
    <RouteWithSidebarClient exact path={Routes.Notification.path} component={Notification} />
    <RouteWithSidebarClient exact path={Routes.ProjectAnalytic.path} component={ProjectAnalytic} />
    <RouteWithSidebarClient exact path={Routes.Connection.path} component={Connection} />
    <RouteWithSidebarClient exact path={Routes.Contract.path} component={Contract} />
    <RouteWithSidebarClient exact path={Routes.SubmitProject.path} component={SubmitProject} />
    <RouteWithSidebarClient exact path={Routes.Offer.path} component={Offer} />

    <RouteWithSidebarClient exact path={Routes.Chat.path} component={Chat} />


    <Redirect to={Routes.NotFound.path} />

  </Switch>
);
export default HomePage;