import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Premium Whiskey</h1>
        <p className={styles.subtitle}>Experience the finest blends.</p>
      </div>
    </section>
  );
};

export default Hero;




  
