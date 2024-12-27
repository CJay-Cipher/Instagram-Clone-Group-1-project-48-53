import styles from "./style.module.css";
import Nav from "./Nav";
import post_1 from "../../assets/post_images/post_1.png";
import post_2 from "../../assets/post_images/post_2.png";
import post_3 from "../../assets/post_images/post_3.png";

const MainBody = () => {
    return (
        <section className={styles.main_body}>
            <Nav />
            <ul className={styles.post_grid}>
                <li>
                    <img src={post_1} alt="post 1" />
                </li>
                <li>
                    <img src={post_2} alt="post 1" />
                </li>
                <li>
                    <img src={post_3} alt="post 1" />
                </li>
                <li>
                    <img src={post_2} alt="post 1" />
                </li>
                <li>
                    <img src={post_3} alt="post 1" />
                </li>
                <li>
                    <img src={post_1} alt="post 1" />
                </li>
            </ul>
        </section>
    );
};

export default MainBody;
