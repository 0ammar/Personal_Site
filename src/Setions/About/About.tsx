import styles from "./About.module.css";

function About() {
    return (
        <section className={styles["text-section"]}>
            <div className={styles["holder"]}>
                <h2 className='main-head'>Who Am I</h2>
                <p>
                    I'm Ammar Arab, a 22-year-old developer from Jordan specializing in .NET and Angular.<br />
                    With experience in both frontend and backend development, I focus on building efficient, user-friendly solutions, I believe programming is about solving real-world problems and delivering value through technology, combining technical expertise with creative problem-solving.<br />
                </p>

            </div>
        </section>
    );
}

export default About;
