import React from 'react';
import { 
  Group, 
  Burger, 
  Button, 
  Menu, 
  Text,
  Container,
  UnstyledButton,
  Box,
  Drawer,
  Stack,
  Divider,
  rem,
} from '@mantine/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './AppHeader.module.css';

interface AppHeaderProps {
  opened: boolean;
  toggle: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ opened, toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: 'About Me', link: '/about' },
    { label: 'Overview', link: '/services' },
    { 
      label: 'Services', 
      link: '/services',
      children: [
        { label: 'Psychiatry', link: '/adult-psychiatry' },
        { label: 'Therapy', link: '/adult-therapy' },
        { label: 'Care for Children', link: '/child-psychiatry' },
      ]
    },
    { 
      label: 'Expertise', 
      link: '/services',
      children: [
        { label: 'Women\'s Health', link: '/womens-health' },
        { label: 'ADHD', link: '/adhd-services' },
        { label: 'Autism', link: '/autism-services' },
      ]
    },
    { label: 'Insurance', link: '/insurance' },
    { label: '中文', link: '/chinese' },
    { label: 'Patient Portal', link: '/portal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Box 
        component="header" 
        h={70} 
        className={classes.header}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: 'none',
          boxShadow: '0 2px 20px rgba(147, 51, 234, 0.08)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between">
            <Link to="/" className={classes.logo}>
              Dr. Caroline Fu, DO
            </Link>
            
            {/* Desktop Navigation */}
            <Group gap={5} visibleFrom="md">
              {navigationItems.map((item) => (
                item.children ? (
                  <Menu 
                    key={item.label} 
                    trigger="hover" 
                    transitionProps={{ transition: 'pop-top-right' }}
                    withinPortal
                    radius="lg"
                  >
                    <Menu.Target>
                      <UnstyledButton className={classes.link}>
                        <Group gap={3}>
                          <Text size="sm" fw={500}>{item.label}</Text>
                          <IconChevronDown size={12} stroke={1.5} />
                        </Group>
                      </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown className={classes.menuDropdown}>
                      {item.children.map((child) => (
                        <Menu.Item 
                          key={child.label}
                          component={Link}
                          to={child.link}
                          style={{ 
                            borderRadius: rem(8),
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }}
                        >
                          {child.label}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                ) : (
                  <Link
                    key={item.label}
                    to={item.link}
                    className={`${classes.link} ${isActive(item.link) ? classes.linkActive : ''}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </Group>

            <Group visibleFrom="md">
              <Button 
                className={classes.appointmentButton}
                onClick={() => navigate('/new-patient')}
                size="md"
                radius="xl"
              >
                Request Appointment
              </Button>
            </Group>

            {/* Mobile Navigation */}
            <Burger 
              opened={opened} 
              onClick={toggle} 
              hiddenFrom="md" 
              size="sm"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={toggle}
        size="75%"
        padding="xl"
        title={
          <Text fw={700} size="lg" c="lavender.7">
            Dr. Caroline Fu, DO
          </Text>
        }
        withCloseButton
        transitionProps={{ transition: 'slide-right' }}
      >
        <Stack gap="sm" className={classes.drawerBody}>
          {navigationItems.map((item) => (
            item.children ? (
              <Box key={item.label}>
                <Text fw={600} size="sm" c="dimmed" mb="xs">
                  {item.label}
                </Text>
                <Stack gap={4} ml="md">
                  {item.children.map((child) => (
                    <UnstyledButton
                      key={child.label}
                      component={Link}
                      to={child.link}
                      onClick={toggle}
                      className={`${classes.link} ${isActive(child.link) ? classes.linkActive : ''}`}
                    >
                      {child.label}
                    </UnstyledButton>
                  ))}
                </Stack>
              </Box>
            ) : (
              <UnstyledButton
                key={item.label}
                component={Link}
                to={item.link}
                onClick={toggle}
                className={`${classes.link} ${isActive(item.link) ? classes.linkActive : ''}`}
              >
                {item.label}
              </UnstyledButton>
            )
          ))}
          
          <Divider my="sm" />
          
          <Button 
            fullWidth
            className={classes.appointmentButton}
            onClick={() => {
              navigate('/new-patient');
              toggle();
            }}
            size="lg"
            radius="xl"
          >
            Request Appointment
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default AppHeader;
