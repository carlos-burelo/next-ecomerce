import Link from 'next/link';
import _ from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={_.header}>
      <nav className={_.nav}>
        <div className={_.brand}>
          <h1>PrintShirt</h1>
        </div>
        <ul className={_.navList}>
          <li className={_.navItem}>
            <Link href='/'>
              <a className={_.link}>
                <q-icon name='home'></q-icon>
                <span>Inicio</span>
              </a>
            </Link>
          </li>
          <li className={_.navItem}>
            <Link href='/productos'>
              <a className={_.link}>
                <q-icon name='shirt'></q-icon>
                <span>Productos</span>
              </a>
            </Link>
          </li>
          <li className={_.navItem}>
            <Link href='/favoritos'>
              <a className={_.link}>
                <q-icon name='heart'></q-icon>
                <span>Favoritos</span>
              </a>
            </Link>
          </li>
          <li className={_.navItem}>
            <Link href='/perfil'>
              <a className={_.link}>
                <q-icon name='person-circle'></q-icon>
                <span>Perfil</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={_.cartButton}>
          <Link href='/'>
            <a className={_.link}>
              <q-icon className={_.cartIcon} name='cart'></q-icon>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
