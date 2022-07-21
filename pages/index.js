import Link from 'next/link';
import styles from '../styles/Home.module.scss';


const Homepage = () => {
  return (
    <div className='content'>
      <h1 className={styles.tittle}>Welcome to NextJs App</h1>
      <p className={styles.text}>This is HomePage Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Dolor atque rerum soluta ipsa assumenda velit mollitia, laborum modi officia tempore,
        repellendus temporibus,
        explicabo odio. Quo reiciendis fugiat obcaecati aliquid expedita?
      </p>

      <Link href="/admin"><a className={styles.btn}>See Admin List</a></Link>
    </div>
  );
}

export default Homepage;
