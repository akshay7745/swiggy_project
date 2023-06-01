import React, { useState } from "react";
import Section from "./Section";
const About = () => {
  const [sectionName, setSectionName] = useState("career");
  return (
    <div className="mt-[100px]">
      <Section
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        title="Career"
        handleVisibility={() => setSectionName("career")}
        isVisible={"career" === sectionName}
        hideIt={() => setSectionName("not career")}
      />
      <Section
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        title="About"
        handleVisibility={() => setSectionName("about")}
        hideIt={() => setSectionName("not about")}
        isVisible={"about" === sectionName}
      />
      <Section
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        title="Contact"
        handleVisibility={() => setSectionName("contact")}
        isVisible={"contact" === sectionName}
        hideIt={() => setSectionName("not contact")}
      />
    </div>
  );
};

export default About;
