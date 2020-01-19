import "./styles.css";
import Parallax from "parallax-js";

document.getElementById("app").innerHTML = `
  <div id="scene" class="scene">
    <div data-depth="0.2">
      <div class="starfield"></div>
    </div>
    <div data-depth="0.6">
      <div class="starfield"></div>
    </div>
  </div>
`;
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
