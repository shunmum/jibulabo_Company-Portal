import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/global.css';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'ホーム', path: '/' },
    { name: 'お知らせ', path: '/news' },
    { name: '事業ガイド', path: '/service' },
    { name: '料金表', path: '/price' },
    { name: 'マニュアル', path: '/manual' },
    { name: '問い合わせ', path: '/contact' },
  ];

  return (
    <header style={styles.header}>
      <div className="container" style={styles.headerInner}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoText}>Coworking Portal</Link>
        </div>
        <nav>
          <ul style={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name} style={styles.navItem}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    borderBottom: location.pathname === item.path ? '2px solid white' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>業務リンク集</p>
        <ul style={styles.footerLinks}>
          <li><a href="#" style={styles.footerLink}>勤怠管理システム</a></li>
          <li><a href="#" style={styles.footerLink}>経費精算システム</a></li>
          <li><a href="#" style={styles.footerLink}>チャットツール</a></li>
          <li><a href="#" style={styles.footerLink}>施設予約管理</a></li>
        </ul>
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8rem' }}>&copy; 2024 Coworking Inc. Internal Portal</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div style={styles.wrapper}>
      <Header />
      <main style={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: 'var(--color-main)',
    color: 'white',
    height: 'auto',
    minHeight: 'var(--header-height)',
    padding: '10px 0',
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoText: {
    color: 'white',
  },
  navList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  navItem: {
    padding: '5px 0',
  },
  navLink: {
    color: 'white',
    fontSize: '1rem',
    padding: '5px',
  },
  main: {
    flex: 1,
    padding: '40px 0',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 0',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#ddd',
    textDecoration: 'underline',
  }
};

export default Layout;
