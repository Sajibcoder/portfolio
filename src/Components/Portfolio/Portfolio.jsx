import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Golden Store",
    github : "https://github.com/Sajibcoder/Golden-Store-E-Commerce-",
    demo : "https://golden-store.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Recipe App",
    github : "https://github.com/Sajibcoder/Easy-Recipe-App",
    demo : "https://quality-recipe.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Mental Design",
    github : "https://github.com/Sajibcoder/MENTAL-CARE-Service-Provider",
    demo : "https://mental-care.netlify.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "News App",
    github : "https://github.com/Sajibcoder/People-s-News-App",
    demo : "https://peoplesnewsapp.netlify.app/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className="btn " target={"_blank"}>
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target={"_blank"}
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
