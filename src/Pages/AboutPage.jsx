import React from 'react';

function AboutPage() {

  const directoryStructure = [
    '│ Provision Store',
    '│----- node_modules',
    '│----- public',
    '│   │----- index.html',
    '│   ',
    '│----- src',
    '│   │----- components',
    '│   │   │----- NavBar.jsx',
    '│   │   │----- ProductCard.jsx',
    '│   │   ',
    '│   │----- pages',
    '│   │   │----- AboutPage.jsx',
    '│   │   │----- LoginPage.jsx',
    '│   │   │----- MainPage.jsx',
    '│   │   │----- ProductPage.jsx',
    '│   │   ',
    '│   │----- App.css',
    '│   │----- App.jsx',
    '│   │----- App.test.js',
    '│   │----- index.js',
    '│   │----- index.css',
    '│   │----- reportWebVitals.js',
    '│   |_____ setupTests.js',
    '│----- .git',
    '│----- README.md',
    '│----- package.json',
    '|____ package-lock.json'
  ];



  return (
    <div>
      <h1>Folder Structure</h1>
      <div style={{display: "flex", width: "100%", justifyContent:"center", alignItems: "center"}}>
      <div className='directory-structure'>
      {directoryStructure.map((line, index) => (
        <h6 key={index}>{line}</h6>
      ))}
    </div>
    </div>
    
    <h1>How to start the project step by step?</h1>
    
    <div style={{display: "flex", width: "100%", justifyContent:"center", alignItems: "center"}}>
    <div style={{width: "60em",textAlign: "start"}}>
     <p>To begin building your React project, start with the project setup using the command `npx create-react-app your-app-name`, followed by organizing the folder structure, creating folders like `components` and `pages`, and placing images in the `public` folder. Install essential dependencies using `npm install axios crypto-js react-router-dom` for tasks like HTTP requests, data encryption, and navigation. Establish a user authentication context with `createContext` to manage login state. Develop reusable components such as a Navbar and Product Card for consistent design. Design individual page components for Login, Product, and About pages, encapsulating specific content and functionality. Finally, define routes using React Router for '/login', '/products', and '/about', associating them with their respective page components to ensure proper navigation and rendering. This step-by-step approach ensures a well-structured and functional React project.</p> 
     </div>
     </div>
    </div>
  );
}

export default AboutPage;
