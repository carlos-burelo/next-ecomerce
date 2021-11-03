import Head from 'next/head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <script
          defer
          type='module'
          src='https://unpkg.com/q-icons@2.0.0/dist/qicons/qicons.esm.js'></script>
        <script
          defer
          nomodule=''
          src='https://unpkg.com/q-icons@2.0.0/dist/qicons/qicons.js'></script>
      </Head>
      <Navbar />
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
