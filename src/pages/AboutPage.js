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
              src="https://raw.githubusercontent.com/pankaj1098/Photos/a4ca32bcdd7dabb6f85e176d8ccaa8e4d3e338f5/IMG_20220619_180015.jpg?token=A3Q3H4HWXDEESCT35BQW3S3EBNMXI"
              alt="Pankaj Yadav"
              className={styles.aboutPageImage}
            />{" "}
            <div className={styles.container}>
              <h2>Pankaj Yadav</h2>
              <p className={styles.title}>Lead Singer</p>
              <p>Top International Singer</p>
              <p>pankajyadav.ce@gmail.com</p>
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
