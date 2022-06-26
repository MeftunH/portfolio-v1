import React from "react";
import { SiReact,SiSpringboot,SiSpring,SiSpringsecurity,SiLaravel,SiVuedotjs,SiJava,SiJavascript,SiPhp,SiTypescript,SiTailwindcss,SiCsharp,SiCplusplus,SiHtml5,SiCss3,SiBootstrap } from "react-icons/si";
function Carousel() {
  return (
    <div>
      <div className="carousel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">Technologies</h1>

        <div className="gallery">

        <span style={{'--i' : 1}}> <SiReact color="cyan"/> </span>
        <span style={{'--i' : 2}}> <SiSpringboot color="green"/> </span>
        <span style={{'--i' : 3}}> <SiSpring color="green"/> </span>
        <span style={{'--i' : 4}}> <SiSpringsecurity color="green"/> </span>
        <span style={{'--i' : 5}}> <SiLaravel color="red"/> </span>
        <span style={{'--i' : 6}}> <SiVuedotjs color="green"/> </span>
        <span style={{'--i' : 7}}> <SiJava color="orange"/> </span>
        <span style={{'--i' : 8}}> <SiJavascript color="yellow"/> </span>
        <span style={{'--i' : 9}}> <SiPhp color="purple"/> </span>
        <span style={{'--i' : 10}}> <SiCsharp color="purple"/> </span>
        <span style={{'--i' : 11}}> <SiTypescript color="blue"/> </span>
        <span style={{'--i' : 12}}> <SiCplusplus color="blue"/> </span>
        <span style={{'--i' : 13}}> <SiHtml5 color="orange"/> </span>
        <span style={{'--i' : 14}}> <SiCss3 color="blue"/> </span>
        <span style={{'--i' : 15}}> <SiTailwindcss color="cyan"/> </span>
        <span style={{'--i' : 16}}> <SiBootstrap color="purple"/> </span>

        </div>
      </div>
    </div>
  );
}

export default Carousel;
