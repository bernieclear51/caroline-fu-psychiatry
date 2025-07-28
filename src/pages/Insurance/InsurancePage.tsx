import React from 'react';
import { Container, Title, Text, Stack, Box, Card, List, ThemeIcon, Button, SimpleGrid, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconCheck, IconCreditCard, IconShield, IconPhone } from '@tabler/icons-react';

const InsurancePage: React.FC = () => {
  const navigate = useNavigate();
  
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
      
      <Container size="xl" py={40}>
        <Stack gap="lg">
          {/* Header */}
          <Box ta="center">
            <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
              Full transparency
            </Text>
            <Title order={1} size="h1" mb="md">
              Insurance & Fees
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto">
              Clear information about insurance, payment options, and fee structure
            </Text>
          </Box>

          {/* Main Content Grid */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {/* Insurance Coverage */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconShield size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Important Insurance Information</Title>
                </Box>
                
               
                <Text size="md"  ta="left" p="1rem">
                  • My office is out of network for all commercial insurances. <br /> • Payment is due at time of service. <br /> • We do not process any insurance claims on your behalf. <br /> • Most workplace-sponsored insurance plans in the Boston area reimburse 50%-80% of our fees. <br /> • Our office staff is happy to verify your benefits.
                </Text>
              </Stack>
            </Card>

            {/* Fee Structure */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconCreditCard size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Fee Structure</Title>
                </Box>
                
                <Stack gap="sm">
                  <Box ta="center">
                    <Text size="sm" fw={600}>Initial Evaluation - Child</Text>
                    <Text size="lg" fw={700} c="lavender.7">$800</Text>
                    <Text size="xs" c="dimmed">90 minutes</Text>
                  </Box>
                  
                  <Divider />
                  
                  <Box ta="center">
                    <Text size="sm" fw={600}>Initial Evaluation - Adult</Text>
                    <Text size="lg" fw={700} c="lavender.7">$500</Text>
                    <Text size="xs" c="dimmed">60 minutes</Text>
                  </Box>

                  <Divider />
                  
                  <Box ta="center">
                    <Text size="sm" fw={600}>Therapy & Medication Combined Appointment</Text>
                    <Text size="lg" fw={700} c="lavender.7">$400</Text>
                    <Text size="xs" c="dimmed">60 minutes</Text>
                  </Box>
                  
                  <Divider />
                  
                  <Box ta="center">
                    <Text size="sm" fw={600}>Medication Appointment</Text>
                    <Text size="lg" fw={700} c="lavender.7">$250</Text>
                    <Text size="xs" c="dimmed">30 minutes</Text>
                  </Box>
                </Stack>
              </Stack>
            </Card>

            {/* Payment Options */}
            <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="md">
                <Box ta="center">
                  <ThemeIcon size={50} radius="xl" color="lavender" variant="light">
                    <IconPhone size={25} />
                  </ThemeIcon>
                  <Title order={3} mt="sm" size="h4">Thrizer: Automate OON benefits</Title>
                </Box>
                <Text size="md"  ta="left" p="1rem">
• We partner with Thrizer to automate the out-of-network benefits process. <br /> 
• You provide your insurance information to Thrizer, and they verify your OON benefits. <br />
• We bill you through the Thrizer platform, and they automate all of your superbills and claims.               </Text>
                
              

                <Text size="xs" c="dimmed" ta="center">
                  Payment due at time of service. All major credit cards accepted.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Contact CTA */}
          <Box ta="center" mt="lg">
            <Card radius="xl" p="lg" style={{ 
              background: 'linear-gradient(135deg, var(--mantine-color-lavender-1) 0%, var(--mantine-color-lavender-2) 100%)',
              border: 'none',
              boxShadow: '0 8px 32px rgba(179, 116, 255, 0.12)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <Stack gap="md" align="center">
                <Title order={3} size="h4">Questions About Coverage?</Title>
                <Text size="sm" c="dimmed" ta="center">
                  Our team is happy to help verify your insurance benefits and explain your coverage options.
                </Text>
                <Button size="md" radius="xl" color="lavender" onClick={() => navigate('/contact')}>
                  Contact Our Office
                </Button>
              </Stack>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default InsurancePage;
