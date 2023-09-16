
export const Routes = {
    // pages
    FrontPage: { path: "/" },
    Signup: { path: "/sign-up" },
    Signin: { path: "/sign-in" },
    ClientDashboard: { path: "/client-dashboard" },
    FreelancerDashboard: { path: "/freelancer-dashboard" },
    ClientProposal: { path: "/client-proposal" },
    ClientViewProposal: { path: "/view-proposal/:id" },
    HireFreelancer: { path: "/hire/:jobId/:freelancerId" },
    PostJob: { path: "/post-job" },
    ClientProfile: { path: "/client-profile" },
    TalentSearch: { path: "/talent" },
    TalentProfile: { path: "/view-freelancer" },
    PersonalDetail: {path: "/personal/settings"},
    JobFind: { path: "/job" },
    SubmitProposal: { path: "/submit-proposal/:id" },
    MyProposal: { path: "/proposal" },
    ProposalDetail: { path: "/proposal-detail/:id" },
    WithdrawProposal: { path: "/withdraw-proposal" },
    Notification: { path: "/notification" },
    ProjectAnalytic: { path: "/project/project-analytics" },
    Contract: { path: "/contracts" },
    Connection: { path: "/connects" },
    SubmitProject: { path: "/submit-contracts" },
    Offer: { path: "/offer/:id" },

    Chat: { path: "/chat" },



    NotFound: { path: "/404" },
    ServerError: { path: "/500" },
};