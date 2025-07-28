import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/spotlight/styles.css';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';

const theme = createTheme({
  colors: {
    lavender: [
      '#f8f5ff',
      '#f0e9ff',
      '#e1d5ff',
      '#d2b5ff',
      '#c394ff',
      '#b374ff', // Primary lavender
      '#9a4ff5',
      '#8139d4',
      '#6829b3',
      '#4f1a92',
    ],
    accent: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
  },
  primaryColor: 'lavender',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: '600',
  },
  radius: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
  },
  shadows: {
    xs: '0 1px 3px rgba(147, 51, 234, 0.05), 0 1px 2px rgba(147, 51, 234, 0.1)',
    sm: '0 2px 6px rgba(147, 51, 234, 0.05), 0 1px 3px rgba(147, 51, 234, 0.1)',
    md: '0 4px 12px rgba(147, 51, 234, 0.05), 0 2px 4px rgba(147, 51, 234, 0.1)',
    lg: '0 10px 24px rgba(147, 51, 234, 0.05), 0 4px 8px rgba(147, 51, 234, 0.1)',
    xl: '0 20px 48px rgba(147, 51, 234, 0.1), 0 8px 16px rgba(147, 51, 234, 0.1)',
  },
  defaultRadius: 'md',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
