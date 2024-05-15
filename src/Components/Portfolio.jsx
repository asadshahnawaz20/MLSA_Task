/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coder.png";

const imageAltText = "coder image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MY Portfolio Website",
    description:
      "This is My Portfolio Website.",
    url: "https://asadshahnawaz20.github.io/Code_Alpha_MyPortfolio_Website/",
  },
  {
    title: "My Github Repositories",
    description:
      "This is My Github repository",
    url: "https://github.com/asadshahnawaz20?tab=repositories",
  },
  {
    title: "My Youtube site",
    description:
      "This is my youtube site.",
    url: "https://www.youtube.com/channel/UCCw3y1B64c6Z1bl80DYp0xw",
  },
  {
    title: "LinkdIn",
    description:
      "This is My LinkdIn profile.",
    url: "https://www.linkedin.com/in/asad-channa-5bb6922a9/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
