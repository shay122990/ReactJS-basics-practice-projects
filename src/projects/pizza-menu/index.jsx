import React from "react";
import styles from "./Pizza-Menu.module.css";

import { pizzaData } from "./data";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className={styles.menu}>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className={styles.pizzas}>
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({
  pizzaObject: { name, photoName, ingredients, price, soldOut },
}) {
  return (
    <li className={`${styles.pizza} ${soldOut ? styles["sold-out"] : ""}`}>
      <img src={photoName} alt={name} />

      <div>
        <h3>{name}</h3>

        <p>{ingredients}</p>

        <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className={styles.footer}>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're open between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className={styles.order}>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>

      <button className={styles.btn}>Order</button>
    </div>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
