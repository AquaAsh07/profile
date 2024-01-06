import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
      </div>
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Shuvraw.jpeg" alt="Ferdous Shuvraw" />;
}

function Intro() {
  return (
    <div>
      <h1>Ferdous Shuvraw</h1>
      <p>
        Hey, I'm Ferdous Shuvraw, a 24-year-old front-end sorcerer, weaving
        digital wonders with HTML, CSS, and JavaScript spells. When not immersed
        in code, you'll find me in the gaming realm, savoring delicious bites,
        or embarking on thrilling tours. Passionate about creating seamless user
        interfaces, I bring creativity and functionality to life in every
        project.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="#FF9800" />
      <Skill skill="CSS" emoji="💪" color="#7FC7D9" />
      <Skill skill="javaScript" emoji="⭐" color="#FF004D" />
      <Skill skill="React" emoji="👶" color="#525CEB" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
