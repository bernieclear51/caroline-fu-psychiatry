import React from 'react';
import { 
  Container, 
  Group, 
  Text, 
  Stack, 
  Anchor,
  Box,
  SimpleGrid,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { 
  IconMapPin, 
  IconPhone, 
  IconMail,
} from '@tabler/icons-react';
import classes from './AppFooter.module.css';

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className={classes.footer}>
      <Container size="md" py="sm">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: "md", sm: "xl" }} className={classes.centeredGrid}>
          {/* Contact Information */}
          <Stack gap="xs">
            <Text fw={600} size="lg" c="lavender.7">Contact Us</Text>
            <Stack gap={4}>
              <Group gap="sm" align="flex-start">
                <IconMapPin size={18} className={classes.icon} />
                <Text size="sm" c="dimmed">
                  186 Hampshire Street<br />
                  Cambridge, MA 02139
                </Text>
              </Group>
              <Group gap="sm">
                <IconPhone size={18} className={classes.icon} />
                <Text size="sm" c="dimmed">(617) 555-0123</Text>
              </Group>
              <Group gap="sm">
                <IconMail size={18} className={classes.icon} />
                <Text size="sm" c="dimmed">info@carolinefupsychiatry.com</Text>
              </Group>
            </Stack>
          </Stack>

          {/* Request Appointment Section */}
          <Stack gap="xs">
            <Text fw={600} size="lg" c="lavender.7">Request Appointment</Text>
            <Text size="sm" c="dimmed">
              Ready to take the first step towards better mental health?
            </Text>
            <Button 
              component={Link}
              to="/new-patient"
              fullWidth
              size="md"
              radius="xl"
              className={classes.ctaButton}
            >
              Schedule Consultation
            </Button>
          </Stack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box className={classes.bottomBar}>
          <Group justify="space-between" wrap="wrap">
            <Text size="xs" c="dimmed">
              © {currentYear} Dr. Caroline Fu, DO. All rights reserved.
            </Text>
            <Group gap="md">
              <Anchor component={Link} to="/privacy" size="xs" c="dimmed" className={classes.bottomLink}>
                Privacy Policy
              </Anchor>
              <Anchor component={Link} to="/terms" size="xs" c="dimmed" className={classes.bottomLink}>
                Terms of Service
              </Anchor>
            </Group>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default AppFooter;
