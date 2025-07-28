import React, { useEffect, useRef } from 'react';
import { 
  Container, 
  SimpleGrid, 
  Stack, 
  Title, 
  Text,
  Box,
  Group,
  Card,
  ThemeIcon,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { 
  IconBrain, 
  IconHeart, 
  IconUsers, 
  IconStethoscope,
  IconMoodHappy,
  IconHeartHandshake,
} from '@tabler/icons-react';
import Hero from '../../components/ui/Hero/Hero';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import VirtualInPersonSection, { defaultVirtualInPersonConfig } from '../../components/ui/VirtualInPersonSection';
import SEOWrapper from '../../components/ui/SEOWrapper';
import classes from './HomePage.module.css';
import image from '../../assets/images/CarolineSmile.jpg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
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
      // Observe all elements with animation classes, but exclude VirtualInPersonSection elements
      const animatedElements = document.querySelectorAll(
        `.${classes.scrollAnimated}, .${classes.sectionTitle}, .${classes.serviceCard}, .${classes.aboutContent}, .${classes.aboutImage}, .${classes.featureCardAnimated}, .${classes.ctaContent}`
      );
      animatedElements.forEach((element) => {
        // Skip elements that are inside VirtualInPersonSection
        if (!element.closest('[data-virtual-in-person-section]')) {
          observer.observe(element);
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Psychiatry',
      description: 'Comprehensive psychiatric care, combining medication management with therapeutic support.',
      features: [
        'Medication Management',
        'Diagnostic Evaluation', 
        'Treatment Planning',
        'Ongoing Support'
      ],
      buttonText: 'Learn More',
      link: '/adult-psychiatry',
      icon: <IconBrain size={28} />,
    },
    {
      title: 'Therapy',
      description: 'Evidence-based therapy to help adults navigate life challenges and improve mental wellness.',
      features: [
        'CBT, ACT, DBT & more',
        'Individualized Therapy Plans',
        'ADHD & Mood Disorders',
        'Asian American Mental Health'
      ],
      buttonText: 'Learn More',
      link: '/adult-therapy',
      icon: <IconHeart size={28} />,
    },
    {
      title: 'Child Therapy & Psychiatry',
      description: 'Specialized mental health services for children and adolescents, supporting healthy development.',
      features: [
        'Child & Teen Assessment',
        'ADHD Evaluation',
        'Personalized Therapy',
        'Family Collaboration'
      ],
      buttonText: 'Learn More',
      link: '/child-psychiatry',
      icon: <IconMoodHappy size={28} />,
    },
  ];

  const features = [
    {
      icon: <IconStethoscope size={24} />,
      title: 'Board-Certified Expertise',
      description: 'Dual board-certified in adult and child psychiatry with faculty appointments at Harvard and Tufts.',
    },
    {
      icon: <IconHeartHandshake size={24} />,
      title: 'Personalized Care',
      description: 'Every treatment plan is tailored to your unique needs, goals, and circumstances.',
    },
    {
      icon: <IconHeart size={24} />,
      title: 'Holistic Approach',
      description: 'Integrating medication management with therapy for comprehensive mental health care.',
    },
  ];

  return (
    <SEOWrapper pageName="home">
      <Stack gap={0}>
        <Hero />

        <Box className={classes.servicesSection}>
        <Container size="lg">
          <Stack gap="xl">
            <Box ta="center" className={classes.sectionTitle}>
              <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                My Services
              </Text>
              <Title order={2} size="h1" mb="md">
                Comprehensive Mental Health Care
              </Title>
              <Text size="lg" c="dimmed" maw={600} mx="auto">
                From evaluation to ongoing support, I provide a full spectrum of personalized psychiatric and therapeutic services.
              </Text>
            </Box>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" className={classes.scrollAnimated}>
              {services.map((service, index) => (
                <div key={index} className={classes.serviceCard} style={{ transitionDelay: `${index * 100}ms` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Your Mental Health Partner Section */}
      <Box className={classes.aboutSection}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Stack gap="xl" className={classes.aboutContent}>
              <Box>
                <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                  About Dr. Caroline Fu
                </Text>
                <Title order={2} size="h1" mb="md">
                  Your mental health partner
                </Title>
              </Box>
              
              <Text size="lg" c="dimmed">
                I believe in treating the whole person, not just symptoms. My approach combines evidence-based psychiatric care with genuine partnership, creating a safe space where you can explore challenges and develop lasting strategies for wellness.
              </Text>
              
              <Text size="md" c="dimmed">
                Moving towards a holistic, lasting shift in mindset or mental health requires time and patience. At my practice, interactions with your physician are never rushed. Your health and personal growth are always prioritized over time constraints.
              </Text>

              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="lavender"
                onClick={() => navigate('/about')}
              >
                Learn About Dr. Fu
              </Button>
            </Stack>

            <Card radius="xl" className={`${classes.imageCard} ${classes.aboutImage}`}>
              <img 
                src={image} 
                alt="Dr. Caroline Fu" 
                className={classes.image} 
                style={{ objectFit: 'contain' }} 
              />
              <Text size="xl" fw="600" mt="md" ta="left" pl="xs">
                Personalized psychiatry?
              </Text>
              <Text size="md" ta="left" c="dimmed" pl="xs">
                Access to Dr. Fu by phone.
                <br />
                Same-day appointments.
                <br />
                Therapy & Medications in 1 visit.              
                <br />
                Flexible scheduling to fit your life.
              </Text>
              
              <Button
                size="lg"
                radius="md"
                variant="filled"
                color="white"
                c="lavender.6"
                mt="md"
                ml="xs"
                fw={600}
                px="xl"
                onClick={() => navigate('/new-patient')}
              >
                Request Appointment
              </Button>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Virtual / In-Person Options Section */}
      <VirtualInPersonSection config={defaultVirtualInPersonConfig} />


      {/* CTA Section */}
      <Box className={classes.ctaSection}>
        <Container size="md">
          <Card radius="xl" p="xl" className={`${classes.ctaCard} ${classes.ctaContent}`}>
            <Stack gap="xl" align="center" ta="center">
              <Title order={2} size="h2">
                Ready to Begin Your Journey?
              </Title>
              <Text size="lg" c="dimmed" maw={500}>
                Take the first step towards better mental health. Schedule a consultation today.
              </Text>
              <Group>
                <Button
                  size="lg"
                  radius="xl"
                  className={classes.ctaButton}
                  onClick={() => navigate('/new-patient')}
                >
                  Schedule Appointment
                </Button>
                <Button
                  size="lg"
                  radius="xl"
                  variant="outline"
                  color="lavender"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
              </Group>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Stack>
    </SEOWrapper>
  );
};

export default HomePage;
