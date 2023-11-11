import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ease",
          "Comfort",
          "JavaScript Enthusiast",
          "Convenience",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
      
    />
    
  );
}

export default Type;