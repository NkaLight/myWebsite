# My personal portfolio website

This is the repository for my personal website. The website showcases my portfolio template where I will post projects, perhaps blogs and some information about me. This website showcases my understanding of front-end web development particularly using the react library.

# Table of contents:
- Overview
- Features
- Technologies used
- Installation
- Usage
- Project structure
- Contributing
- License
- Contact

## Overview
This personal website serves as a platform to showcase my work, share my thoughts through a blog, and provide visitors with information about my background and skills

## Feautures
#### 1. Dark mode and light mode support
- <ins>Visual Adaptability:</ins><br/>
The <strong>Color Schema</strong> adapts from primarily from having a white background and black text in light mode to primarily black background to white text darkmode, this in turn reduces visual glare.
<br/><br/>
- <ins>Implementation:</ins><br/>
The preferred <strong>dark/light</strong> mode preferences are stored as <strong>state</strong> isDarkMode, which is then <strong>saved</strong> to the users <strong>localStorage</strong>, so it it saved even when the user refreshes the page. This state is used to <strong>conditionally</strong> assign the div elements, className props.This used in CSS file name App.css to render the correct styling specifications according to the design specifications.
<br/><br/>
- <ins>Performance:</ins><br/>
Since I utilize client-side routing where all my componets lazily compile at initial load, along with the fact that at this point images are not impacted by this feature, the performance is not impacted, if so it is so arbitary small that it is not worth mentioning.
 <br/><br/>
- <ins>User experience:</ins><br/>
When the user clicks on a button icon, on the top left of the Nav bar, the web-application seamlessely changes from a white and grey color pallete to a more black and grey color pallete.

## Technologies used
 - HTML5
 - CSS
 - Javascript
 - React-router for client-side routing.

## Installation
Before you run the project locally, ensure you have:
-  installed the npm package manager([see NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

To run this project locally follow these steps.
1. Clone the repository:
    ```bash
    git clone https://github.com/NkaLight/myWebsite.git
    ```

2. Navigate to the project directory:
    ```bash
    cd myWebsite
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
### Major dependencies

- **React**: A JavaScript library for building user interfaces
- **React Router DOM**: Client-side routing library for React
- **Three.js**: A 3D library that makes WebGL simpler
- **@react-three/fiber** and **@react-three/drei**: Tools for building 3D graphics with React and Three.js

The `npm install` command will automatically install these and all other dependencies listed in the [`package.json`](https://github.com/NkaLight/myWebsite/blob/main/package.json) file.

## Usage
After starting the development server, open your web browser and navigate to e.g., http://localhost:3000 to view the website. You can interact with the different sections of the website through the navigation menu.

## Project structure
Here is a brief overview of the project structure:
```plaintext
myWebsite
├── public
│   ├── index.html
│   └── [other static assets]
├── src
│   ├── components
|   |   ├── Pages
|   |   |   ├── About.js
|   |   |   ├── Contact.js
|   |   |   └── [other page files]
|   |   ├── ThreeJS animations
|   |   |   ├── OrbitingSpheres.jsx
|   |   |   └── SphereZoom.jsx
|   |   ├── Footer.js
|   |   ├── Nav.js
|   |   └── [other component files]
|   ├── images
|   |   ├── Fill.png
|   |   ├── toggleDark.png
|   |   └── [other image files]
|   ├── Roboto
|   |   ├── License.txt
|   |   ├── Roboto-Black.ttf
|   |   └── [other Roboto files]
│   ├── App.js
│   ├── index.js
│   └── [other files]
├── package.json
└── README.md
```


## Contributing
Contributions in the form of advice, etc are more than welcome, but since this is a personal project of myself I wont be allowing pull requests, and merging them to my main repository with this project.


## Contact
If you have any questions or want to get in touch, feel free to contact me at [nkanyisoowethu@gmail.com](mailto:nkanyisoowethu@gmail.com).
