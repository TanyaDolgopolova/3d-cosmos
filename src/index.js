import "./styles.scss";
import Parallax from "parallax-js";
import { generateStars } from "./stars";

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
generateStars();
