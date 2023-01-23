import {projectsHolder} from "./projects-logic.js";
import "./styles.scss";
import renderLayout from "./layout.js";
import { renderProjects } from "./functions.js";

renderLayout();
renderProjects(projectsHolder.list);
