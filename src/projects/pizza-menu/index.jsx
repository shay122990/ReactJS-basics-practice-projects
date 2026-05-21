import React from "react";
import styles from "./PizzaMenu.module.css";

import { pizzaData } from "./data";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>Wood Fired Since 1998</p>

      <h1>Fast React Pizza Co.</h1>

      <p className={styles.description}>
        Authentic Italian cuisine crafted with organic ingredients,
        slow-fermented dough, and recipes passed through generations.
      </p>
    </header>
  );
}

function Menu() {
  return (
    <div className={styles.menu}>
      {pizzaData.map((pizza) => (
        <Pizza pizzaObject={pizza} key={pizza.name} />
      ))}
    </div>
  );
}

function Pizza({
  pizzaObject: { name, photoName, ingredients, price, soldOut },
}) {
  return (
    <div className={`${styles.pizza} ${soldOut ? styles.soldOut : ""}`}>
      <img src={photoName} alt={name} className={styles.thumb} />

      <div className={styles.info}>
        <div className={styles.top}>
          <h3>{name}</h3>

          <div className={styles.line}></div>

          <span className={styles.price}>
            {soldOut ? "Sold Out" : `$${price}`}
          </span>
        </div>

        <p className={styles.ingredients}>{ingredients}</p>
      </div>
    </div>
  );
}

function RightPage() {
  return (
    <div className={styles.rightPage}>
      <img
        className={styles.heroImage}
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
        alt="Pizza"
      />

      <p className={styles.sectionLabel}>House Philosophy</p>

      <h2 className={styles.storyTitle}>
        Honest food.
        <br />
        Slow cooking.
      </h2>

      <p className={styles.story}>
        Every pizza is prepared in a traditional stone oven using imported
        Italian flour, San Marzano tomatoes, and fresh local ingredients.
      </p>

      <div className={styles.hours}>
        <div>
          <span>Monday — Friday</span>
          <span>12:00 — 22:00</span>
        </div>

        <div>
          <span>Saturday</span>
          <span>14:00 — 23:00</span>
        </div>

        <div>
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>

      <button className={styles.btn}>Reserve Table</button>
    </div>
  );
}

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftPage}>
          <Header />
          <Menu />
        </div>

        <RightPage />
      </div>
    </div>
  );
}
