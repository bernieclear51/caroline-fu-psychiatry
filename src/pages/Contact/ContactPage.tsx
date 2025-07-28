import React from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Card, 
  Group, 
  ThemeIcon,
  Box,
  Divider
} from '@mantine/core';
import { 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconClock 
} from '@tabler/icons-react';
import SEOWrapper from '../../components/ui/SEOWrapper';

const ContactPage: React.FC = () => {
  return (
    <SEOWrapper pageName="contact">
      <Container size="md" py="xl" mt={70}>
      <Stack gap="xl">
        <Box ta="center">
          <Title order={1} mb="md">Contact Information</Title>
          <Text size="lg" c="dimmed">
            Get in touch with Dr. Caroline Fu's practice
          </Text>
        </Box>

        <Card shadow="md" padding="xl" radius="lg">
          <Stack gap="xl">
            <Group gap="md" align="flex-start">
              <ThemeIcon size={40} radius="xl" color="lavender" variant="light">
                <IconMapPin size={20} />
              </ThemeIcon>
              <Stack gap="xs">
                <Text fw={600} size="lg">Office Location</Text>
                <Text c="dimmed">
                  186 Hampshire Street<br />
                  Cambridge, MA 02139
                </Text>
              </Stack>
            </Group>

            <Divider />

            <Group gap="md" align="flex-start">
              <ThemeIcon size={40} radius="xl" color="lavender" variant="light">
                <IconPhone size={20} />
              </ThemeIcon>
              <Stack gap="xs">
                <Text fw={600} size="lg">Phone</Text>
                <Text c="dimmed">
                  Please use the New Patient form to request appointments
                </Text>
              </Stack>
            </Group>

            <Divider />

            <Group gap="md" align="flex-start">
              <ThemeIcon size={40} radius="xl" color="lavender" variant="light">
                <IconMail size={20} />
              </ThemeIcon>
              <Stack gap="xs">
                <Text fw={600} size="lg">Email</Text>
                <Text c="dimmed">
                  Please use the New Patient form for all inquiries
                </Text>
              </Stack>
            </Group>

            <Divider />

            <Group gap="md" align="flex-start">
              <ThemeIcon size={40} radius="xl" color="lavender" variant="light">
                <IconClock size={20} />
              </ThemeIcon>
              <Stack gap="xs">
                <Text fw={600} size="lg">Office Hours</Text>
                <Text c="dimmed">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: By appointment<br />
                  Sunday: Closed
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" bg="lavender.0">
          <Text ta="center" c="dimmed" size="sm">
            For new patient appointments and all inquiries, please use our New Patient form. 
            We offer both virtual and in-person appointments to accommodate your needs.
          </Text>
        </Card>
      </Stack>
    </Container>
    </SEOWrapper>
  );
};

export default ContactPage;
