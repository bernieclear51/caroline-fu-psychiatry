import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  TextInput,
  Textarea,
  Radio,
  Button,
  Group,
  Box,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck } from '@tabler/icons-react';

interface NewPatientFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  acknowledgement: string;
}

const NewPatientPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<NewPatientFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      acknowledgement: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name is required' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (value.length < 10 ? 'Phone number is required' : null),
      acknowledgement: (value) => (!value ? 'Acknowledgement is required' : null),
    },
  });

  const handleSubmit = (values: NewPatientFormData) => {
    console.log('Form submitted:', values);
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (submitted) {
    return (
      <Container size="md" py="xl" mt={70}>
        <Card shadow="md" padding="xl" radius="md">
          <Stack align="center" gap="md">
            <IconCheck size={64} color="green" />
            <Title order={2} ta="center">Thank You!</Title>
            <Text ta="center" size="lg">
              Your request has been submitted successfully. 
              Dr. Caroline Fu's office will contact you within 24 hours.
            </Text>
            <Text ta="center" c="dimmed">
              If you have any urgent concerns, please call our office directly at (617) 401-8838.
            </Text>
          </Stack>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl" mt={70}>
      <Stack gap="xl">
        {/* Header */}
        <Box ta="center">
          <Title order={1} mb="md">Request Appointment</Title>
          <Text size="lg" c="dimmed" maw={500} mx="auto">
            Please fill out this form and we'll contact you to schedule your appointment with Dr. Caroline Fu.
          </Text>
        </Box>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Card shadow="sm" padding="xl" radius="md">
            <Stack gap="lg">
              <TextInput
                label="Name"
                placeholder="Enter your full name"
                size="md"
                required
                {...form.getInputProps('name')}
              />

              <TextInput
                label="Email"
                placeholder="your.email@example.com"
                size="md"
                required
                {...form.getInputProps('email')}
              />

              <TextInput
                label="Phone Number"
                placeholder="(617) 555-0123"
                size="md"
                required
                {...form.getInputProps('phone')}
              />

              <Textarea
                label="Message"
                placeholder="Please let us know if this is an appointment request for yourself or a child. How can we help you? Are there any specific concerns you'd like to discuss?"
                minRows={4}
                size="md"
                {...form.getInputProps('message')}
              />

              <Divider />

              <Radio.Group
                label="Insurance Acknowledgements"
                description="1) I understand that Dr. Fu is out of network for all commercial insurances. 2) I understand this office is legally prohibited from providing services to any one enrolled in MassHealth, Medicare or Medicaid"
                required
                {...form.getInputProps('acknowledgement')}
              >
                <Group mt="xs">
                  <Radio value="yes" label="Yes, I understand" />
                  <Radio value="no" label="No" />
                </Group>
              </Radio.Group>

              <Group justify="center" mt="xl">
                <Button
                  type="submit"
                  size="lg"
                  radius="xl"
                  className="rainbow-glow-button-interactive"
                  style={{ minWidth: 200 }}
                >
                  Submit Request
                </Button>
              </Group>
            </Stack>
          </Card>
        </form>

        <Text ta="center" size="sm" c="dimmed">
          Dr. Fu's office will contact you within 24 hours to schedule your appointment.
        </Text>
      </Stack>
    </Container>
  );
};

export default NewPatientPage;
