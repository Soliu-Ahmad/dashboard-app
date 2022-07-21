import Link from 'next/link';
import styles from '../../styles/Admin.module.scss';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            data
        }
    }

}


const Admin = (props) => {
    return (
        <div className='content'>
            <h1 className={styles.title}>
                Admin Page....
                {props.data.map(adminUser => (
                    <div className={styles.btnUser} key={adminUser.username}>
                        <Link href={`/admin/${adminUser.id}`}>
                            <a><h3>{adminUser.name}</h3></a>
                        </Link>
                    </div>


                ))}
            </h1>
        </div>
    );
}

export default Admin;