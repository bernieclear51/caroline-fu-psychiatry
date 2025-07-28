import React, { useEffect, useRef } from 'react';
import { Container, Title, Text, Stack, Box, Button, List, ThemeIcon, SimpleGrid, Image, Card, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconCheck } from '@tabler/icons-react';
import Hero from '../../components/ui/Hero/Hero';
import SEOWrapper from '../../components/ui/SEOWrapper';
import carolineCutOneImage from '../../assets/images/CarolineInside.jpg';
import carolineSmileImage from '../../assets/images/CarolineSmile.jpg';
import carolineBridgeImage from '../../assets/images/CarolineBridge.png';
import classes from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const philosophySectionRef = useRef<HTMLDivElement>(null);
  
  // Animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Observe all elements with animation classes
      const animatedElements = document.querySelectorAll(
        `.${classes.scrollAnimated}, .${classes.sectionTitle}, .${classes.philosophyContent}, .${classes.philosophyImage}, .${classes.experienceList}, .${classes.chineseContent}, .${classes.chineseImage}`
      );
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const aboutHeroConfig = {
    title: 'Dr. Caroline Fu, DO',
    subtitle: 'Adult & Child Psychiatrist',
    description: 'Board-certified adult & child psychiatrist <br /> <span style="color: #A51C30">Harvard</span> & <span style="color: #3E8EDE">Tufts</span> instructor <br /> MGH-B Affiliate <br /> Located in Cambridge, MA',
    buttonText: 'Learn More',
    customButtonAction: () => {
      philosophySectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    subtext: 'Learn about my background, and my approach to mental health care.',
    showFeatureCards: false,
    showMainCTA: false,
    heroImage: carolineCutOneImage,
  };

  return (
    <SEOWrapper pageName="about">
      <Stack gap={0}>
        <Hero config={aboutHeroConfig} />
      
      {/* Together, we'll find a way forward Section */}
      <Box 
        ref={philosophySectionRef}
        py={80} 
        style={{ 
          background: 'linear-gradient(135deg, #fafafa 0%, #f8f5ff 50%, #fafafa 100%)',
          position: 'relative',
          overflow: 'hidden'
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
        <Container size="lg">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'flex-start' }}
            gap="xl"
          >
            {/* Left side - Circular Image */}
            <Box ta="center" style={{ flexShrink: 0 }} className={classes.philosophyImage}>
              <Image
                src={carolineSmileImage}
                alt="Dr. Caroline Fu"
                radius="50%"
                w={150}
                h={150}
                fit="cover"
                style={{
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                }}
              />
            </Box>
            
            {/* Right side - Content */}
            <Stack gap="lg" style={{ flex: 1 }} className={classes.philosophyContent}>
              <Box>
                <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                  My Philosophy
                </Text>
                <Title order={2} size="h1" c="gray.9">
                  Together, we'll find a way forward
                </Title>
              </Box>
              
              <Text size="lg" c="dimmed">
                When mental health challenges feel overwhelming, expert guidance can make all the difference.
              </Text>
              
              <Stack gap="md">
                <Text size="md" c="dimmed">
                  Your healing journey begins with connection. I believe in building collaborative partnerships with my patients, fostering trust that allows us to unlock their innate capacity for healing and growth.
                </Text>
                
                <Text size="md" c="dimmed">
                  While working with all of my patients, I take the time to understand their unique experiences and personality. Medication may not be required for you to become the healthiest version of yourself.
                </Text>
                
                <Text size="md" c="dimmed" fw={500}>
                  If you are feeling lost, we'll find a path forward.
                </Text>
              </Stack>
              
              <Button
                size="lg"
                radius="xl"
                color="lavender"
                mt="md"
                w="fit-content"
                onClick={() => navigate('/new-patient')}
              >
                Schedule an appointment today
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Biographical Information Section */}
      <Box 
        py={80}
        style={{ 
          background: 'linear-gradient(135deg, #fafafa 0%, #f8f5ff 50%, #fafafa 100%)',
          position: 'relative',
          overflow: 'hidden'
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
          <Stack gap="xl">
            <Box ta="center" className={classes.sectionTitle}>
              <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                Background
              </Text>
              <Title order={2} size="h2">
                Professional Experience
              </Title>
            </Box>
            
            <List
              spacing="md"
              size="md"
              center
              className={classes.experienceList}
              icon={
                <ThemeIcon color="lavender" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text><strong>Dual Board Certification:</strong> Adult and Child & Adolescent Psychiatry</Text>
              </List.Item>
              <List.Item>
                <Text><strong>Instructor:</strong> Harvard & Tufts University School of Medicine</Text>
              </List.Item>
              <List.Item>
                <Text><strong>Affiliate:</strong> Mass General-Brigham, Newton-Wellesley Hospital, Arbour Hospital</Text>
              </List.Item>
              <List.Item>
                <Text><strong>Child Fellowship:</strong> Tufts University</Text>
              </List.Item>
              <List.Item>
                <Text><strong>Adult Residency:</strong> LSU-Baton Rouge</Text>
              </List.Item>
              <List.Item>
                <Text><strong>Medical School:</strong> Touro University</Text>
              </List.Item>
            </List>
          </Stack>
        </Container>
      </Box>

      {/* Chinese Language Section */}
      <Box 
        py={80} 
        style={{ 
          background: 'linear-gradient(135deg, #fafafa 0%, #f8f5ff 50%, #fafafa 100%)',
          position: 'relative',
          overflow: 'hidden'
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
        <Container size="lg">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'flex-start' }}
            gap="xl"
          >
            {/* Left side - Circular Image */}
            <Box ta="center" style={{ flexShrink: 0 }} className={classes.chineseImage}>
              <Image
                src={carolineBridgeImage}
                alt="Dr. Caroline Fu on waterfront promenade"
                radius="50%"
                w={150}
                h={150}
                fit="cover"
                style={{
                  border: '4px solid white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                }}
              />
            </Box>
            
            {/* Right side - Content */}
            <Stack gap="lg" style={{ flex: 1 }} className={classes.chineseContent}>
              <Box>
                <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                  关于我
                </Text>
                <Title order={2} size="h1" c="gray.9">
                  很高兴认识您！
                </Title>
                <Title order={3} size="h3" c="lavender.7" mt="sm">
                  付昭医师
                </Title>
              </Box>
              
              <Stack gap="md">
                <Text size="md" c="dimmed">
                  我是在麻省总医院工作的精神科医生，为成年人、儿童和青少年提供精神医疗服务。我还同时在哈佛医学院和塔夫茨医学中心担任讲师。
                </Text>
                
                <Text size="md" c="dimmed">
                  我是在美国出生的华人，生长于讲国语的家庭环境中。我提供全方位的心理咨询和治疗。
                </Text>
                
                <Text size="md" c="dimmed">
                  除了提供普通精神科护理外，我还专注于儿童和成人多动症的诊断，提供心理健康服务。
                </Text>
                
                <Text size="md" c="dimmed" fw={500}>
                  希望我们有机会来陪伴您更好地适应不断变化的社会和家庭环境。让您们未来的生活越来越美好。
                </Text>
              </Stack>
              
              <Button
                size="lg"
                radius="xl"
                color="lavender"
                mt="md"
                w="fit-content"
                onClick={() => navigate('/chinese')}
              >
                预约咨询
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Stack>
    </SEOWrapper>
  );
};

export default AboutPage;
