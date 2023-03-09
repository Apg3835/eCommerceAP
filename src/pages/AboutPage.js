import { Fragment } from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <div className={styles.aboutSection}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2>Our Team</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <img
              src="https://github.com/parinit25/hello/blob/main/WhatsApp%20Image%202023-03-03%20at%209.13.26%20PM%20(1).jpeg?raw=true"
              alt="Parinit Singh"
              className={styles.aboutPageImage}
            />{" "}
            <div className={styles.container}>
              <h2>Parinit Singh</h2>
              <p className={styles.title}>Lead Singer</p>
              <p>Top International Singer</p>
              <p>parinit.singh06@gmail.com</p>
              <p>
                <button className={styles.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img
              src="https://github.com/parinit25/hello/blob/main/RkRaj.jpg?raw=true"
              alt="Mike"
              className={styles.aboutPageImage}
            />
            <div className={styles.container}>
              <h2>Rahul Rajak</h2>
              <p className={styles.title}>Drummer</p>
              <p>International Drummer.</p>
              <p>rahulrajak525@gmail.com</p>
              <p>
                <button className={styles.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img
              src="https://github.com/parinit25/hello/blob/main/WhatsApp%20Image%202023-03-03%20at%209.41.59%20PM.jpeg?raw=true"
              alt="John"
              className={styles.aboutPageImage}
            />{" "}
            <div className={styles.container}>
              <h2>C.K. Sisodia</h2>
              <p className={styles.title}>Guitarist</p>
              <p>World Class guitarist.</p>
              <p>cksisodia3@gmail.com</p>
              <p>
                <button className={styles.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
