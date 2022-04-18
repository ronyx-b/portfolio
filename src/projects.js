export const TYPE = Object.freeze({
  TECH: "TECHNICAL",
  MISC: "MISC",
});

export const KW = Object.freeze({
  JAVASCRIPT: "JavaScript",
  HTML5: "HTML5",
  CSS3: "CSS3",
  NODEJS: "NodeJS",
  EXPRESS: "Express",
  BOOTSTRAP: "Bootstrap",
  REACT: "React",
  ANGULAR: "Angular",
  TYPESCRIPT: "Typescript",
  MONGODB: "MongoDB",
  SEQUELIZE: "Sequelize",
  RESTFUL: "RESTful API",
  RESPONSIVE: "Responsive",
  PHP: "PHP",
  LARAVEL: "Laravel",
  JWT: "JWT"
});

export const portfolio = [
  { 
    type: TYPE.TECH,
    title: "Magic: The Gathering Store",
    description : [
      "This is an independent project done as a mock-up Magic: The Gathering online store. It is a single-page application done on React, which employs routing and React-Bootstrap for the UI; as well as a RESTful API done on Express/Node.js connected to a MongoDB/Atlas database through Mongoose.",
      "The app takes most of its data and image resources from the Scryfall API, as well as employing its own API for user registration/login, and for storing the data of sealed product and accessories.",
      "The store allows to navigate through products, search cards by name, add products and cards to the shopping cart, register and login users, checkout, orders history, and add/edit products."
    ],
    keywords: [ KW.JAVASCRIPT, KW.REACT, KW.BOOTSTRAP, KW.RESPONSIVE, KW.NODEJS, KW.EXPRESS, KW.RESTFUL, KW.MONGODB, KW.JWT ],
    images_url: ["mtg-store-1.png", "mtg-store-2.png"],
    website_url: "https://mtg-store-app.vercel.app/",
    repo_url: [
      {
        url: "https://github.com/ronyx-b/mtg-store-app",
        name: "App"
      },
      {
        url: "https://github.com/ronyx-b/mtg-store-api",
        name: "API"
      }
    ]
  },
  { 
    type: TYPE.TECH,
    title: "Meals Packages Store",
    description : [
      "This was a project done for the WEB322 course on Seneca College. It employs dynamically-rendered pages on the back-end, using a Express server from Node.js and MongoDB/Atlas as database.",
      "The store allows to navigate through products, register a new user, log into an account, add products to a shopping cart, checkout and receive a confirmation email of your order, and create/edit/delete products from the catalog (meals)."
    ],
    keywords: [ KW.JAVASCRIPT, KW.BOOTSTRAP, KW.NODEJS, KW.EXPRESS, KW.MONGODB ],
    images_url: ["meals-store-1.png", "meals-store-2.png"],
    website_url: "https://meals-packages-store.herokuapp.com/",
    repo_url: "https://github.com/ronyx-b/meals-store"
  },
  {
    type: TYPE.TECH,
    title: "Spotify API Access App",
    description: [ 
      "This was a project done for the WEB422 course on Seneca College. It is a single-page application done on Angular, which employs routing, Angular Material, Angular Flex-Layout, and authentication through JWT; as well as a RESTful API done on Express/Node.js connected to a MongoDB/Atlas database through Mongoose and the Spotify API.", 
      "The app accesses the Spotify API and allows to navigate through the list of new releases, as well as search for artists, and listen to samples of songs when available. It lets you register a user in a MongoDB/Atlas database, and add songs to a \"Favourites\" list, which can latter be accessed."
    ],
    keywords: [ KW.JAVASCRIPT, KW.ANGULAR, KW.TYPESCRIPT, KW.RESTFUL, KW.MONGODB, KW.JWT ],
    images_url: [ "spotify-api-1.png", "spotify-api-2.png" ],
    website_url: "https://spotify-api-app.netlify.app/",
    repo_url: "https://github.com/ronyx-b/web422-spotify-app"
  },
  {
    type: TYPE.TECH,
    title: "New York Restaurants Catalog",
    description: [ 
      "This was a project done for the WEB422 course on Seneca College. It is a single-page application done on React, which employs routing, React-Bootstrap and React-Leaflet; as well as a RESTful API done on Express/Node.js connected to a MongoDB/Atlas database through Mongoose.", 
      "The catalog allows to navigate through pages of restaurant listings, filter restaurants by borough, and access an information page of the restaurant with a map with its location and ratings"
     ],
    keywords: [ KW.JAVASCRIPT, KW.REACT, KW.BOOTSTRAP, KW.NODEJS, KW.EXPRESS, KW.MONGODB, KW.RESTFUL ],
    images_url: [ "ny-restaurants-1.png", "ny-restaurants-2.png" ],
    website_url: "https://peaceful-tundra-65893.herokuapp.com/",
    repo_url: "https://github.com/ronyx-b/restaurants-app"
  },
  {
    type: TYPE.MISC,
    title: "JavaScript Reference Guide",
    description: [
      "This is a personal reference guide for JavaScript, including from the basics to the most recent libraries and frameworks.",
      "It is single-file (stand-alone) document, meant to work both as a quick reference to any syntax I might need to consult, as well as a helping tool for other new programmers lo learn the language.", 
      "The key aspect of this project is the combined use of HTML semantics, CSS and JavaScript to create a navigation menu that is automatically generated, making a responsive document that is extremely easy to navigate."
    ],
    keywords: [ KW.HTML5, KW.CSS3, KW.JAVASCRIPT, KW.RESPONSIVE ],
    images_url: [ "js-reference-1.png", "js-reference-2.png" ],
    website_url: "https://ronyx-b.github.io/javascript-reference/",
    repo_url: "https://github.com/ronyx-b/javascript-reference"
  },
  {
    type: TYPE.MISC,
    title: "Sci-Fi Blog",
    description: [ 
      "This was a project done for the EAC234 (Science Fiction, elective) course on Seneca College.", 
      "The highligh of this project is the use of CSS, custom fonts and images, to design a webpage that transmits the motifs of the book and the movie that it inspires."
    ],
    keywords: [ KW.HTML5, KW.CSS3 ],
    images_url: [ "scifi-blog-1.png" ],
    website_url: "https://ronyx-b.github.io/scifi-blog/",
    repo_url: "https://github.com/ronyx-b/scifi-blog"
  },
];