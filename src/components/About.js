import React, { useState } from "react";

function About() {
  // Sample list of skills with categories
  const skills = [
    { name: "C++", category: "Programming Languages" },
    { name: "Python", category: "Programming Languages" },
    { name: "Java", category: "Programming Languages" },
    { name: "C", category: "Programming Languages" },
    { name: "JavaScript", category: "Programming Languages" },
    { name: "PHP", category: "Programming Languages" },
    { name: "GitLab", category: "Tools" },
    { name: "Visual Studio Code", category: "Tools" },
    { name: "Microsoft Teams", category: "Tools" },
    { name: "Microsoft Excel", category: "Tools" },
    { name: "Wireshark", category: "Tools" },
  ];

  // Categories available for filtering
  const categories = ["Programming Languages", "Tools"];

  // State to store the search query and selected categories
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category) // Deselect if already selected
        : [...prevCategories, category] // Add category if not selected
    );
  };

  // Function to filter skills based on search query and selected categories
  const filterSkills = (skills, query, selectedCategories) => {
    return skills.filter(
      (skill) =>
        (skill.name.toLowerCase().includes(query.toLowerCase()) ||
          skill.category.toLowerCase().includes(query.toLowerCase())) &&
        (selectedCategories.length === 0 || selectedCategories.includes(skill.category))
    );
  };

  // Get filtered skills based on the search query and selected categories
  const filteredSkills = filterSkills(skills, searchQuery, selectedCategories);

  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a fourth-year student at Dalhousie University for computer science. My interests include cybersecurity, web development, 
        mobile app development, and object-oriented programming.
      </p>

      <h2>Education</h2>
      <ul>
        <li>Fourth year Bachelor of Computer Science student at Dalhousie University</li>
        <li>Seeking a certificate in Cybersecurity and Network Communications</li>
      </ul>

      <h2>Experience</h2>
      <p>
        I have worked on group projects using Android Studio and individual projects using React, HTML, CSS, JavaScript, Java, C++, and C. 
      </p>

      <h2>Technical Skills</h2>

      {/* Search input for filtering skills */}
      <input
        type="text"
        placeholder="Search for a skill or category"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
      />

      {/* Category filter buttons */}
      <h3>Filter by Category</h3>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            style={{
              margin: '5px',
              backgroundColor: selectedCategories.includes(category) ? '#00796b' : '#e0f7fa',
              color: selectedCategories.includes(category) ? 'white' : 'black',
              padding: '8px 16px',
              border: '1px solid #00796b',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered skills */}
      <ul>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <li key={index}>
              {skill.name} - {skill.category}
            </li>
          ))
        ) : (
          <li>No skills found</li>
        )}
      </ul>

      <h2>Career Goals</h2>
      <p>
        I aim to secure a full-time position in a CyberSecurity role with a technology company. Gaining experience and hands-on knowledge 
        will help me be successful and strengthen my tools.
      </p>
    </div>
  );
}

export default About;



