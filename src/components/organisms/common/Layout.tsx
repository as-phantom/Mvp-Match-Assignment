import React from 'react';
import Footer from 'src/components/organisms/common/Footer';
import SideNav from 'src/components/organisms/common/SideNav';

const Layout: React.FC = ({ children }) => {
  return (
    <main className="flex min-h-[calc(100vh-80px)]">
      <SideNav />

      <article className="flex flex-1 flex-col">
        <section className="flex-1">{children}</section>

        <Footer />
      </article>
    </main>
  );
};

export default Layout;
