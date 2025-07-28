import React from 'react';
import { Container, Title, Text, Stack, Box, Card, Button, ThemeIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const PortalPage: React.FC = () => {
  return (
    <Box 
      style={{ 
        background: 'linear-gradient(135deg, #fafafa 0%, #f8f5ff 50%, #fafafa 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        style={{
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(179, 116, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(179, 116, 255, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
      
      <Container size="md">
        <Card 
          radius="xl" 
          p="xl" 
          style={{ 
            background: 'linear-gradient(135deg, var(--mantine-color-lavender-1) 0%, var(--mantine-color-lavender-2) 100%)',
            border: 'none',
            boxShadow: '0 8px 32px rgba(179, 116, 255, 0.12)',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <Stack gap="xl" align="center" ta="center">
            <ThemeIcon size={80} radius="xl" color="lavender">
              <IconExternalLink size={40} />
            </ThemeIcon>
            
            <Title order={1} size="h1">
              Patient Portal
            </Title>
            
            <Text size="lg" c="dimmed" maw={500}>
              I use Simple Practice to manage patient correspondence and virtual appointments. Please log in here.
            </Text>
            
            <Button
              size="xl"
              radius="xl"
              color="lavender"
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              rightSection={<IconExternalLink size={20} />}
            >
              Access Patient Portal
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PortalPage;
