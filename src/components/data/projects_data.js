import Overview from '../../assets/projects_images/overview.png'
import SPM_Version1 from '../../assets/projects_images/spmversion1.png'
import SPM_Version2 from '../../assets/projects_images/spmversion2.png'
import SPM_Version3 from '../../assets/projects_images/spmversion3.png'
import Rexroth_Chat_App from '../../assets/projects_images/chatapp.png'
import MPMD2021 from '../../assets/projects_images/mpmd2021.png'
import PMM2021 from '../../assets/projects_images/PMM2021.png'
import MHSPC2021 from '../../assets/projects_images/MHSPC2021.png'
import MHSDIC2021 from '../../assets/projects_images/MHSDIC2021.png'
import Resume from '../../assets/projects_images/resume.png'
import TravelAgency from '../../assets/projects_images/travelagency.png'
import VideoCall from '../../assets/projects_images/videocall.png'
import Industrial from '../../assets/projects_images/industrialwebsite.png'
import ECommerce from '../../assets/projects_images/eCommerce1.png'
// import MHSDIC2021 from '../../assets/projects_images/MHSDIC2021.png'
// import MHSDIC2021 from '../../assets/projects_images/MHSDIC2021.png'
// import MHSDIC2021 from '../../assets/projects_images/MHSDIC2021.png'


const data_projects = [
    {
        name: 'DC-MH/SDI Tool Overview',
        image: Overview,
        deployed_url: 'https://rb-mobileweb.de.bosch.com/2021/overview/',
        // github_url: '',
        category: ['angular', 'node.js', 'bootstrap', 'php', 'rexroth']
    },

    {
        name: 'Smart Project Management',
        image: SPM_Version1,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/spm/e01',
        // github_url: '',
        category: ['node.js', 'mysql', 'angular', 'php', 'rexroth']
    },

    {
        name: 'SPM Version 2.0.0',
        image: SPM_Version2,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/spm/v2.0/',
        // github_url: '',
        category: ['node.js', 'mysql', 'angular', 'php', 'rexroth']
    },

    {
        name: 'SPM Version 3.0.0',
        image: SPM_Version3,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/spm_testversion3.0/test-version/',
        // github_url: '',
        category: ['node.js', 'mongoDB', 'angular', 'php', 'rexroth']
    },

    {
        name: 'Rexroth Chat App',
        image: Rexroth_Chat_App,
        deployed_url: 'https://rexroth-chatbot.apps.de1.bosch-iot-cloud.com/',
        // github_url: '',
        category: ['node.js', 'socket.io', 'react', 'rexroth']
    },

    {
        name: 'Video Conference Platform',
        image: MPMD2021,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MPMD2021/',
        // github_url: '',
        category: ['node.js', 'Angular', 'JavaScript', 'Express.io', 'rexroth']
    },

    {
        name: 'Partner Manager Meeting 2021',
        image: PMM2021,
        deployed_url: 'https://rb-mobileweb.de.bosch.com/2021/PMM2021/live/',
        // github_url: '',
        category: ['node.js', 'Angular', 'TypeScript', 'rexroth']
    },

    {
        name: 'Service Partner Conference 2021',
        image: MHSPC2021,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSPC2021/live/',
        // github_url: '',
        category: ['node.js', 'Angular', 'TypeScript', 'rexroth']
    },

    {
        name: 'Solution Partner Conference 2021',
        image: MHSDIC2021,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSDIC2021/live',
        // github_url: '',
        category: ['node.js', 'react.js', 'JavaScript', 'php', 'rexroth']
    },

    {
        name: 'Portfolio Resume',
        image: Resume,
        deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSDIC2021/live',
        github_url: 'https://github.com/spnarkhede/Portfolio1_Shubham-Narkhede',
        category: ['node.js', 'react.js', 'next.js', 'mongoDB']
    },

    {
        name: 'Travel Agency Website',
        image: TravelAgency,
        // deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSDIC2021/live',
        github_url: 'https://github.com/spnarkhede/imdat-reise-agency',
        category: ['node.js', 'react.js', 'restapi', 'mongoDB']
    },
     
    {
        name: 'Video Call Application',
        image: VideoCall,
        // deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSDIC2021/live',
        github_url: 'https://github.com/spnarkhede/video-call-application',
        category: ['node.js', 'react.js', 'restapi', 'socket.io',]
    },
     
    {
        name: 'Industrial Website',
        image: Industrial,
        // deployed_url: 'https://mobilehydraulics.boschrexroth.com/video-streaming-platform/MHSDIC2021/live',
        github_url: 'https://github.com/spnarkhede/reactJS-industrials-website',
        category: ['node.js', 'react.js', 'restapi', 'mongoDB']
    },
     
    {
        name: 'eCommerce Website',
        image: ECommerce,
        // deployed_url: '',
        // github_url: '',
        category: ['node.js', 'react.js', 'restapi', 'mongoDB']
    },
]

export default data_projects;