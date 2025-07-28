import React from 'react';
import { Container, Title, Text, Stack, Box, Card, List, ThemeIcon, Button, SimpleGrid, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconCheck, IconBrain, IconHeart, IconUsers, IconPhone, IconCreditCard, IconShield } from '@tabler/icons-react';
import SEOWrapper from '../../components/ui/SEOWrapper';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <SEOWrapper pageName="services">
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
      
      <Container size="xl" py={40}>
        <Stack gap="lg">
          {/* Header */}
          <Box ta="center">
            <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
              Complete care
            </Text>
            <Title order={1} size="h1" mb="md">
              Services Overview
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto">
              Comprehensive mental health services for adults, children, and families
            </Text>
          </Box>

          {/* Main Content Grid */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {/* Medication Management */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconBrain size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Medication Management</Title>
                </Box>
                
                <List
                  spacing="xs"
                  size="xs"
                  center
                  icon={
                    <ThemeIcon color="lavender" size={12} radius="xl">
                      <IconCheck size={8} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Comprehensive psychiatric evaluations</List.Item>
                  <List.Item>Medication optimization and monitoring</List.Item>
                  <List.Item>Treatment-resistant depression care</List.Item>
                  <List.Item>ADHD medication management</List.Item>
                  <List.Item>Anxiety and mood disorder treatment</List.Item>
                  <List.Item>Collaborative care approach</List.Item>
                </List>
              </Stack>
            </Card>

            {/* Therapy Services */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconHeart size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Therapy Services</Title>
                </Box>
                
                <List
                  spacing="xs"
                  size="xs"
                  center
                  icon={
                    <ThemeIcon color="lavender" size={12} radius="xl">
                      <IconCheck size={8} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Cognitive Behavioral Therapy (CBT)</List.Item>
                  <List.Item>Acceptance & Commitment Therapy (ACT)</List.Item>
                  <List.Item>Dialectical Behavior Therapy (DBT)</List.Item>
                  <List.Item>Trauma-informed care</List.Item>
                  <List.Item>Asian American mental health</List.Item>
                  <List.Item>Individual and family therapy</List.Item>
                </List>
              </Stack>
            </Card>

            {/* Child & Adolescent Services */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconUsers size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Child & Adolescent Care</Title>
                </Box>
                
                <List
                  spacing="xs"
                  size="xs"
                  center
                  icon={
                    <ThemeIcon color="lavender" size={12} radius="xl">
                      <IconCheck size={8} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Child psychiatric evaluations</List.Item>
                  <List.Item>ADHD assessment and treatment</List.Item>
                  <List.Item>Autism spectrum disorder support</List.Item>
                  <List.Item>Anxiety and depression in youth</List.Item>
                  <List.Item>Family-centered approach</List.Item>
                  <List.Item>School collaboration</List.Item>
                </List>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Insurance Information */}
          <Box mt="lg">
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)' }}>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                {/* Left Side - Insurance Information */}
                <Stack gap="md">
                  <Box>
                    <ThemeIcon size={40} radius="xl" color="lavender" variant="light" mb="sm">
                      <IconShield size={20} />
                    </ThemeIcon>
                    <Title order={3} size="h4">Insurance & Payment</Title>
                  </Box>
                  
                  <Text size="sm" c="dimmed">
                    • Out of network for all commercial insurances<br />
                    • Most workplace plans reimburse 50%-80% of fees<br />
                    • Payment due at time of service<br />
                    • We partner with Thrizer for automated benefits
                  </Text>

                  <Button 
                    size="md" 
                    radius="xl" 
                    color="lavender"
                    onClick={() => navigate('/insurance')}
                    mt="md"
                  >
                    View Full Insurance Information
                  </Button>
                </Stack>

                {/* Right Side - Fee Grid 3x2 */}
                <Stack gap="md">
                  <Box>
                    <Text size="sm" fw={600} mb="md">Complete New Patient Fee Schedule:</Text>
                    <SimpleGrid cols={{ base: 2, sm: 2 }} spacing="sm">
                      <Box ta="center" p="sm" style={{ border: '1px solid rgba(179, 116, 255, 0.1)', borderRadius: '8px' }}>
                        <Text size="xs" fw={600}>Initial - Child</Text>
                        <Text size="lg" fw={700} c="lavender.7">$1000</Text>
                        <Text size="xs" c="dimmed">90 min</Text>
                      </Box>

                      <Box ta="center" p="sm" style={{ border: '1px solid rgba(179, 116, 255, 0.1)', borderRadius: '8px' }}>
                        <Text size="xs" fw={600}>Initial - Adult</Text>
                        <Text size="lg" fw={700} c="lavender.7">$650</Text>
                        <Text size="xs" c="dimmed">60 min</Text>
                      </Box>

                      <Box ta="center" p="sm" style={{ border: '1px solid rgba(179, 116, 255, 0.1)', borderRadius: '8px' }}>
                        <Text size="xs" fw={600}>Therapy/Meds</Text>
                        <Text size="lg" fw={700} c="lavender.7">$500</Text>
                        <Text size="xs" c="dimmed">60 min</Text>
                      </Box>

                      <Box ta="center" p="sm" style={{ border: '1px solid rgba(179, 116, 255, 0.1)', borderRadius: '8px' }}>
                        <Text size="xs" fw={600}>Medication</Text>
                        <Text size="lg" fw={700} c="lavender.7">$300</Text>
                        <Text size="xs" c="dimmed">30 min</Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Card>
          </Box>

          {/* Contact & Appointment CTA */}
          <Box ta="center" mt="lg">
            <Card radius="xl" p="lg" style={{ 
              background: 'linear-gradient(135deg, var(--mantine-color-lavender-1) 0%, var(--mantine-color-lavender-2) 100%)',
              border: 'none',
              boxShadow: '0 8px 32px rgba(179, 116, 255, 0.12)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <Stack gap="md" align="center">
                <ThemeIcon size={50} radius="xl" color="lavender">
                  <IconPhone size={25} />
                </ThemeIcon>
                <Title order={3} size="h4">Ready to Begin Your Journey?</Title>
                <Text size="sm" c="dimmed" ta="center">
                  Located at 186 Hampshire Street, Cambridge, MA<br />
                  Virtual and in-person appointments available
                </Text>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" w="100%">
                  <Button 
                    size="md" 
                    radius="xl" 
                    color="lavender"
                    onClick={() => navigate('/new-patient')}
                  >
                    Request Appointment
                  </Button>
                  <Button 
                    size="md" 
                    radius="xl" 
                    variant="outline" 
                    color="lavender"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Information
                  </Button>
                </SimpleGrid>
              </Stack>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
    </SEOWrapper>
  );
};

export default ServicesPage;
