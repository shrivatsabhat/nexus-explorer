import styles from './Navbar.module.css';
import Image from 'next/image';
import nexusLogo from 'assets/icons/NexuslogoBlue1000.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const navList = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Trustlist', path: '/trustlist' },
    { id: 3, title: 'Richlist', path: '/richlist' },
    { id: 4, title: 'Network', path: '/network' },
    { id: 5, title: 'About', path: '/about' },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.brand}>
        <Image width={142} height={32} layout="fixed" src={nexusLogo}></Image>
        <div className={styles.explorer}>Explorer</div>
      </div>
      <div className={styles.links}>
        {navList.map((navItem) => {
          return (
            <span
              key={navItem.id}
              className={router.pathname === navItem.path && styles.active}>
              <Link href={navItem.path}>{navItem.title}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
