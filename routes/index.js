var express = require('express');
var router = express.Router();

const team = {
  tonya: {
    name: 'TONYA',
    role: 'Project Manager',
    "picture": 'tonya.png',
    "description": 'Hello! My name is Tonya Oliver and I was born and raised in London, Ontario, Canada. I am the Project Manager for our final integrated project. I am responisble for the scheduling of team meetings and creating deadlines. I will also be creating the wireframe design for our campaign microsite. I am looking forward to using my many skills and diving into the world of Project Managing!'
  },

  evica: {
    name: 'EVICA',
    role: 'Motion Designer',
    "picture": 'evica.png',
    "description": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae, ullam nam quibusdam fuga voluptas doloremque natus architecto distinctio dolore nesciunt suscipit, illo qui pariatur nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut perspiciatis magni eveniet repudiandae.'
  },

  sian: {
    name: 'SIAN',
    role: 'Graphic Designer',
    "picture": 'sian.png',
    "description": 'Hi, this is Sian. I am working as a graphic designer in this project. I consider myself a passionate and creative designer. I visualize what people want and create visually high quality works. And I enjoy what I do through people reactions and feedback on my work. I am looking forward to developing myself as a desginer through various projects in the futre.'
  },

  doyeon: {
    name: 'DOYEON',
    role: 'Front-End Developer',
    "picture": 'doyeon.png',
    "description": 'Hello! I am m Doyeon Kim. I am in charge of the Front-end Developer for the Final Integrated Project. I built HTML and CSS part of our microsite for our campaign. Also, I will keep working on Front-end parts like HTML, CSS, and JS for our campaign website. I am looking forward to creating unique and various websites using my skills.'
  },

  mamatha: {
    name: 'MAMATHA',
    role: 'Back-End Developer',
    "picture": 'mamatha.png',
    "description": 'Hey! I am Mamatha Vaidehi Ramesh. I am the Back-End developer of the group for the Final Integrated Project. I will be deploying my knowledge of Node.js for developing the micro-site for our campaign aginst bulling of LGBTQ+ Community in sports. I am looking forward for exploring the world of the back-end developing as a newbie to this field. '
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'FIP TEAM PAGE' });
});

router.get('/team/:member', function (req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member] });
});


module.exports = router;
