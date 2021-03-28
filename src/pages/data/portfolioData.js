// const icons = require('react-bootstrap-icons');

const projects = [
  {
    id: 1,
    heading: 'Twiddler',
    description: 'This is a project that I\'ve worked on the Front-End Development for a precourse assignment at bootcamp',
    tools: ['JavaScript(jQuery)'],
    link: 'https://github.com/acerslee/seip2101-twiddler',
    img_link: '../images/projects/twiddler.PNG'
  },
  {
    id: 2,
    heading: 'Cat-walk',
    description: 'This is the Front-End Capstone that I\'ve created in my bootcamp. In a team of four, we\'ve created a retail website to mimic the user experience of online retail shopping.',
    tools: ['React', 'Bootstrap', 'MaterialUI', 'Jest'],
    link: 'https://github.com/Team-Emus/FEC'
  }
];

//these projects will be within the projects page
const otherProjects = [
  {
    id: 1,
    heading: 'Github Repo Dashboard',
    tools: ['React-  ', 'Node.js-  ', 'Express-  ','Github Repo API'],
    link: 'https://github.com/acerslee/github-repo'
  }
];


module.exports = {
  projects,
  otherProjects
};