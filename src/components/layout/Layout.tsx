import React, { useEffect } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AppShell
      header={{ height: 70 }}
      padding="0"
    >
      <AppShell.Header>
        <AppHeader opened={opened} toggle={toggle} />
      </AppShell.Header>
      
      <AppShell.Main style={{ paddingTop: 70 }}>
        {children}
        <AppFooter />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
