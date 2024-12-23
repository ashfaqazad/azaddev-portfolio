import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate heading to slide in from the left
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
        },
      }
    );

    // Animate cards with rotation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotate: -90, x: -200, opacity: 0 },
        {
          rotate: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            delay: index * 0.2, // Staggered animation for cards
          },
        }
      );
    });
  }, []);


  const svgIcon = (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{
        marginRight: "8px",
        verticalAlign: "middle",
        // backgroundColor: "#0d6efd",
      }}
    >
      <path
        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"
        fill="#0d6efd" // Change the color here
      ></path>
    </svg>
  );
  

  return (
    <section id="skills">
    <div style={{ padding: "50px", color: "#c9d1d9" }}>
      <h1
        ref={headingRef}
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#58a6ff",
          marginBottom: "30px",
        }}
      >
        My Skills
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {[{
          category: "Frontend Development",
          skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GSAP"],
          level: ["Experienced", "Experienced", "Experienced", "Experienced", "Intermediate", "Intermediate"],
        },
        {
          category: "Backend Development",
          skills: ["Node.js", "Express.js", "MongoDB"],
          level: ["Intermediate", "Intermediate", "Intermediate"],
        },
        {
          category: "Tools",
          skills: ["VS Code", "Postman", "Figma", "Git/GitHub", "Docker", "Canva"],
          level: ["Experienced", "Intermediate", "Intermediate", "Intermediate", "Intermediate", "Intermediate"],
        }].map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{
              border: "2px solid #58a6ff",
              borderRadius: "10px",
              padding: "20px",
              minWidth: "250px",
              maxWidth: "300px",
              backgroundColor: "#161b22",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h5 style={{ color: "#58a6ff", marginBottom: "10px", fontWeight: "bold" }}>
              {section.category}
            </h5>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {section.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                    color: "#c9d1d9",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {svgIcon}
                    {skill}
                  </span>
                  <span style={{ color: "#8b949e" }}>{section.level[skillIndex]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
