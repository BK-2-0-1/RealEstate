import Head from 'next/head.js';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
