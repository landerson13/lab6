import React from "react";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>
        Here is a list of some projects that involved using my skills and knowledge within computer science.
      </p>

      <h2>QuickCash App</h2>
      {/** strong used from: https://www.w3schools.com/tags/tag_strong.asp */}
      <p>
        <strong>Problem Solved:</strong> Developed a mobile application with a team of students for posting quick jobs for users to apply for. 
        <br />
        <strong>Technology Used:</strong> Firebase database and Android Studio
        <br />
        <strong>My Role:</strong> Implementing the dashboard, job posting screen, and the push notifications feature.
      </p>

      <h2>LawnLog App</h2>
      <p>
        <strong>Problem Solved:</strong> Created a mobile application for small lawn care business owners to store customer information, locations, schedule, and many more simple features.
        <br />
        <strong>Technology Used:</strong> React Native, Expo, APIs, and Firestore cloud database.
        <br />
        <strong>My Role:</strong> Author for individual project using React Native.
      </p>

      <h2>Battleships Assignment</h2>
      <p>
        <strong>Problem Solved:</strong> Developed a program using Java to replicate the game, Battleships. 
        <br />
        <strong>Technology Used:</strong> Java
        <br />
        <strong>My Role:</strong> Author.
      </p>
    </div>
  );
}

export default Projects;

