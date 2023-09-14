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
import image from "../images/jakob-unsplash.jpg";

const imageAltText = "A desk with a computer, notebook and plant";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Task Management System",
    description:
      "A project management tool designed to facilitate efficient task creation, assignment, and tracking within teams. Technologies used: React.js, Express.js, Node.js, MSSQL, Azure.",
    url: "https://github.com/MuneneCalvin/TaskZen",
  },
  {
    title: "Chunkit",
    description:
      "A web app project that allows users to upload large CSV or JSON files, split the dataset, save files for later, and see previous file operations performed. Tech Stack: HTML, CSS, Python & Django.",
    url: "https://your-chunkit-app-url.com",
  },
  {
    title: "Personal Website",
    description:
      " A personal website to showcase my skills and experience. Tech Stack: HTML, CSS, JavaScript.",
    url: "https://munenecal.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      " A website that allows users to buy and sell products. Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL & Stripe-payment.",
    url: "https://github.com/MuneneCalvin/NexGenShop",
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
