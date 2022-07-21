import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <Image src='/logo.jpg' width={100} height={120} alt="image" />
                </div>

                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/admin"><a>AdminPage</a></Link>
            </nav>

        </>
    );
}

export default Navbar;