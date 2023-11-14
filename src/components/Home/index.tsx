import styles from "./Home.module.scss";

function Home() {
  return (
    <section className={styles.home}>
      <div className="container">
        <h1 className={styles.home__title}>
          Добро пожаловать в&nbsp;самый лучший магазин по&nbsp;продаже продаж!
        </h1>
      </div>
    </section>
  );
}

export default Home;
