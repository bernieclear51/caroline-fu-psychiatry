import React from 'react';
import { Container, Title, Text, Stack, Box, Card, Button, ThemeIcon, SimpleGrid, Divider } from '@mantine/core';
import { IconCheck, IconCreditCard, IconShield, IconExternalLink } from '@tabler/icons-react';

const ChinesePage: React.FC = () => {
  return (
    <Box 
      style={{ 
        background: 'linear-gradient(135deg, #fafafa 0%, #f8f5ff 50%, #fafafa 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px'
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
      
      <Container size="xl" py={20}>
        <Stack gap="lg">
          {/* Header */}
          <Box ta="center">
            <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
              中文服务
            </Text>
            <Title order={1} size="h1" mb="md">
              付昭医师 - 精神科医生
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto">
              为华人社区提供专业的精神健康服务
            </Text>
          </Box>

          {/* Main Content Grid */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {/* Insurance & Fees Section */}
            <Card radius="lg" p="xl" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)', height: 'fit-content' }}>
              <Stack gap="lg">
                <Box ta="center">
                  <ThemeIcon size={60} radius="xl" color="lavender" variant="light">
                    <IconShield size={30} />
                  </ThemeIcon>
                  <Title order={2} mt="md" size="h3">保险与费用</Title>
                </Box>
                
                <Box>
                  <Title order={3} size="h4" mb="md">报销</Title>
                  <Text size="md" c="dimmed" mb="lg">
                    许多拥有网络外福利的患者可以将收据提交给他们的保险公司申请报销。我们会提供一份"超级账单"（superbill），供您直接提交给保险公司。
                  </Text>
                </Box>

                <Box>
                  <Title order={3} size="h4" mb="md">费用</Title>
                  <Stack gap="sm">
                    <Box>
                      <Text size="sm" fw={600}>90分钟初次咨询</Text>
                      <Text size="lg" fw={700} c="lavender.7">$800</Text>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Text size="sm" fw={600}>50分钟初次咨询</Text>
                      <Text size="lg" fw={700} c="lavender.7">$500</Text>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Text size="sm" fw={600}>45分钟综合治疗和药物管理</Text>
                      <Text size="lg" fw={700} c="lavender.7">$400</Text>
                    </Box>
                    
                    <Divider />
                    
                    <Box>
                      <Text size="sm" fw={600}>25分钟药物管理</Text>
                      <Text size="lg" fw={700} c="lavender.7">$250</Text>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Card>

            {/* About Dr. Fu & Portal Section */}
            <Stack gap="lg">
              <Card radius="lg" p="lg" style={{ background: 'white', border: '1px solid rgba(179, 116, 255, 0.1)' }}>
                <Stack gap="md">
                  <Box ta="center">
                    <Title order={2} size="h3" c="lavender.7">很高兴认识您！</Title>
                    <Title order={3} size="h4" mt="sm">付昭医师</Title>
                  </Box>
                  
                  <Stack gap="sm">
                    <Text size="sm" c="dimmed">
                      我是在麻省总医院工作的精神科医生，为成年人、儿童和青少年提供精神医疗服务。我还同时在哈佛医学院和塔夫茨医学中心担任讲师。
                    </Text>
                    
                    <Text size="sm" c="dimmed">
                      我是在美国出生的华人，生长于讲国语的家庭环境中。我提供全方位的心理咨询和治疗。
                    </Text>
                    
                    <Text size="sm" c="dimmed">
                      除了提供普通精神科护理外，我还专注于儿童和成人多动症的诊断，提供心理健康服务。
                    </Text>
                    
                    <Text size="sm" c="dimmed" fw={500}>
                      希望我们有机会来陪伴您更好地适应不断变化的社会和家庭环境。让您们未来的生活越来越美好。
                    </Text>
                  </Stack>
                </Stack>
              </Card>

              {/* Patient Portal Section */}
              <Card radius="lg" p="md" style={{ 
                background: 'linear-gradient(135deg, var(--mantine-color-lavender-1) 0%, var(--mantine-color-lavender-2) 100%)',
                border: 'none',
                boxShadow: '0 8px 32px rgba(179, 116, 255, 0.12)'
              }}>
                <Stack gap="sm" align="center" ta="center">
                  <Title order={3} size="h5">医师留言</Title>
                  
                  <Text size="xs" c="dimmed">
                    我们使用 "Simple Practice" 来管理预约申请、药物续配和患者通信。
                  </Text>
                  
                  <Button
                    size="sm"
                    radius="xl"
                    color="lavender"
                    component="a"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    rightSection={<IconExternalLink size={14} />}
                  >
                    点击这里登录
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ChinesePage;
