import React, { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
  Flex,
  Image,
  ActionIcon,
  ThemeIcon,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { 
  IconBrain, 
  IconHeart, 
  IconMoodHappy,
  IconHeartHandshake,
} from '@tabler/icons-react';
import VirtualInPersonSection, { VirtualInPersonSectionConfig } from '../../ui/VirtualInPersonSection';
import classes from './ServiceLandingTemplate.module.css';

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; stroke: number; color: string }>;
}

export interface CommitmentFeature {
  icon: React.FC<any>;
  title: string;
  description: string;
}

export interface ServiceOption {
  title: string;
  description: string;
  imageUrl: string;
}

export interface VirtualInPersonOption {
  title: string;
  description: string;
  icon: React.FC<any>;
  buttonText: string;
}

export interface ServicePageConfig {
  hero: {
    title: string;
    subtitle: string;
    features: FeatureCard[];
    ctaText: string;
    ctaSubtext: string;
  };
  about: {
    eyebrow: string;
    title: string;
    content: string[];
    showDoctorCard: boolean;
    doctorImage?: string;
    buttonText: string;
  };
  commitment: {
    title: string;
    subtitles: string[];
    features: CommitmentFeature[];
    buttonText: string;
  };
  services: {
    title: string;
    options: ServiceOption[];
    layout?: 'two-cards' | 'three-cards'; // Optional: defaults to 'three-cards'
  };
  virtualInPerson?: {
    eyebrow: string;
    title: string;
    description: string;
    options: VirtualInPersonOption[];
  };
}

interface ServiceLandingTemplateProps {
  config: ServicePageConfig;
}

const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({ config }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  
  // Section refs for animations
  const heroCardsRef = useRef<HTMLDivElement>(null);
  const heroButtonRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const commitmentButtonRef = useRef<HTMLDivElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
            // For the image card, once it's visible, stop observing it so it stays visible
            if (entry.target.classList.contains(classes.imageCard)) {
              observer.unobserve(entry.target);
            }
          } else {
            // Remove visible class when element goes out of view (except for imageCard)
            if (!entry.target.classList.contains(classes.imageCard)) {
              entry.target.classList.remove(classes.visible);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-100px 0px -100px 0px',
      }
    );

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Observe all elements with scrollAnimated class
      const scrollElements = document.querySelectorAll(`.${classes.scrollAnimated}`);
      scrollElements.forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const FeatureCard: React.FC<{ feature: FeatureCard; index: number }> = ({ feature, index }) => {
    return (
      <Card 
        shadow="md" 
        radius="md" 
        className={`${classes.card} ${classes.scrollAnimated}`} 
        padding="lg"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <Flex align="center" gap="sm">
          <feature.icon size={40} stroke={1.5} color={theme.colors.lavender?.[6] || theme.colors.blue[6]} />
          <Text fz="md" fw={500} className={classes.cardTitle}>
            {feature.title}
          </Text>
        </Flex>
      </Card>
    );
  };

  const SimpleCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
    return (
      <Card withBorder padding="xl" radius="md" className={classes.statsCard}>
        <Card.Section>
          <Image
            src={imageUrl}
            alt={title}
            height={120}
          />
        </Card.Section>

        <Text className={classes.statsTitle} size="2xl" fw={700} mt="lg" mb="md">
          {title}
        </Text>
        
        <Text size="md" c="dimmed" lh={1.6}>
          {description}
        </Text>
      </Card>
    );
  };

  const Feature: React.FC<{ feature: CommitmentFeature; index: number }> = ({ feature, index }) => {
    return (
      <div 
        className={`${classes.feature} ${classes.scrollAnimated}`} 
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className={classes.overlay} />

        <div className={classes.content}>
          <feature.icon size={38} className={classes.icon} stroke={1.5} />
          <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
            {feature.title}
          </Text>
          <Text c="dimmed" fz="sm">
            {feature.description}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Gradient Mask Overlay */}
      <div className={classes.gradientMask} />
      
      <Stack gap={0}>
        {/* Hero Section */}
        <Box className={classes.heroSection}>
          <Container size="lg">
            <Text className={classes.heroTitle} ta="center">
              {config.hero.title}
            </Text>
            <Text 
              className={classes.heroSubtitle} 
              ta="center" 
              mt="lg"
              dangerouslySetInnerHTML={{ __html: config.hero.subtitle }}
            />
            
            <SimpleGrid ref={heroCardsRef} cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mt={60}>
              {config.hero.features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </SimpleGrid>
          </Container>
         
          <Container size="lg">
            <Flex ref={heroButtonRef} justify="center" className={`${classes.mainCTA} ${classes.scrollAnimated}`}>
              <Button
                size="xl"
                radius="xl"
                className={classes.animatedButton}
                mt={60}
                onClick={() => navigate('/new-patient')}
                rightSection={
                  config.about.doctorImage && (
                    <div className={classes.avatarContainer}>
                      <img 
                        src={config.about.doctorImage} 
                        alt="Dr. Caroline Fu" 
                        className={classes.heroAvatar}
                      />
                    </div>
                  )
                }
              >
                {config.hero.ctaText}
              </Button>
            </Flex>
            
            <Text size="md" c="dimmed" ta="center" mt="lg" className={classes.ctaSubtext}>
              {config.hero.ctaSubtext}
            </Text>
          </Container>
        </Box>

        {/* About Section */}
        <Box className={classes.aboutSection}>
          <Container size="lg">
            {/* Mobile/Tablet: Show doctor card first */}
            {config.about.showDoctorCard && config.about.doctorImage && (
              <Box className={classes.mobileImageCard}>
                <Card ref={aboutImageRef} radius="xl" className={`${classes.imageCard} ${classes.scrollAnimated} rainbow-glow`}>
                  <img 
                    src={config.about.doctorImage} 
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
              </Box>
            )}

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Stack ref={aboutContentRef} gap="xl" className={classes.aboutContent}>
                <Box>
                  <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
                    {config.about.eyebrow}
                  </Text>
                  <Title order={2} size="h1" mb="md">
                    {config.about.title}
                  </Title>
                </Box>
                
                {config.about.content.map((paragraph, index) => (
                  <Text key={index} size={index === 0 ? "lg" : "md"} c="dimmed">
                    {paragraph}
                  </Text>
                ))}

                <Button
                  size="lg"
                  radius="xl"
                  variant="outline"
                  color="lavender"
                  onClick={() => navigate('/about')}
                >
                  {config.about.buttonText}
                </Button>
              </Stack>

              {/* Desktop: Show doctor card on the right */}
              {config.about.showDoctorCard && config.about.doctorImage && (
                <Box className={classes.desktopImageCard}>
                  <Card radius="xl" className={`${classes.imageCard} ${classes.scrollAnimated} rainbow-glow`}>
                    <img 
                      src={config.about.doctorImage} 
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
                </Box>
              )}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Commitment/Features Section */}
        <Box className={classes.featuresSection}>
          <Container size="lg">
            {/* Section Header */}
            <Box ref={sectionHeaderRef} className={`${classes.sectionHeader} ${classes.scrollAnimated}`} mb="xl">
              <Title className={classes.sectionTitle} order={2} ta="center" c="lavender.6">
                {config.commitment.title}
              </Title>
              <Stack align="center" gap="sm" mt="md">
                {config.commitment.subtitles.map((subtitle, index) => (
                  <Text key={index} className={classes.sectionSubtitle} ta="center">
                    {subtitle}
                  </Text>
                ))}
              </Stack>
            </Box>

            <SimpleGrid ref={featuresRef} cols={{ base: 1, sm: 3 }} spacing={{ base: 30, md: 50 }}>
              {config.commitment.features.map((item, index) => (
                <Feature key={item.title} feature={item} index={index} />
              ))}
            </SimpleGrid>
            
            <Box className={classes.sectionDivider} />
            
            <Flex ref={commitmentButtonRef} justify="center" mt="xl" className={`${classes.commitmentButton} ${classes.scrollAnimated}`}>
              <Button
                size="xl"
                radius="xl"
                className={classes.animatedButton}
                onClick={() => navigate('/new-patient')}
              >
                {config.commitment.buttonText}
              </Button>
            </Flex>
          </Container>
        </Box>


        {/* Virtual / In-Person Options Section */}
        {config.virtualInPerson && (
          <VirtualInPersonSection config={config.virtualInPerson} />
        )}

        {/* My Services Comprehensive Mental Healthcare Section */}
        <Box className={classes.comprehensiveServicesSection}>
          <Container size="lg">
            <Stack gap="xl">
              <Box ta="center" className={classes.sectionHeader}>
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

              <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" className={classes.scrollAnimated}>
                <Card 
                  shadow="md" 
                  radius="md" 
                  className={`${classes.serviceOverviewCard} ${classes.scrollAnimated}`} 
                  padding="lg"
                  style={{ transitionDelay: '0ms' }}
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={48} radius="xl" color="lavender" variant="light">
                      <IconBrain size={24} />
                    </ThemeIcon>
                    <Title order={4} size="h5">Psychiatry</Title>
                    <Text size="sm" c="dimmed" ta="center">
                      Comprehensive psychiatric care, combining medication management with therapeutic support.
                    </Text>
                  </Stack>
                </Card>

                <Card 
                  shadow="md" 
                  radius="md" 
                  className={`${classes.serviceOverviewCard} ${classes.scrollAnimated}`} 
                  padding="lg"
                  style={{ transitionDelay: '100ms' }}
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={48} radius="xl" color="lavender" variant="light">
                      <IconHeart size={24} />
                    </ThemeIcon>
                    <Title order={4} size="h5">Therapy</Title>
                    <Text size="sm" c="dimmed" ta="center">
                      Evidence-based therapy to help adults navigate life challenges and improve mental wellness.
                    </Text>
                  </Stack>
                </Card>

                <Card 
                  shadow="md" 
                  radius="md" 
                  className={`${classes.serviceOverviewCard} ${classes.scrollAnimated}`} 
                  padding="lg"
                  style={{ transitionDelay: '200ms' }}
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={48} radius="xl" color="lavender" variant="light">
                      <IconMoodHappy size={24} />
                    </ThemeIcon>
                    <Title order={4} size="h5">Child Therapy & Psychiatry</Title>
                    <Text size="sm" c="dimmed" ta="center">
                      Specialized mental health services for children and adolescents, supporting healthy development.
                    </Text>
                  </Stack>
                </Card>

                <Card 
                  shadow="md" 
                  radius="md" 
                  className={`${classes.serviceOverviewCard} ${classes.scrollAnimated}`} 
                  padding="lg"
                  style={{ transitionDelay: '300ms' }}
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={48} radius="xl" color="lavender" variant="light">
                      <IconHeartHandshake size={24} />
                    </ThemeIcon>
                    <Title order={4} size="h5">Personalized Care</Title>
                    <Text size="sm" c="dimmed" ta="center">
                      Tailored treatment plans designed specifically for your unique needs, goals, and circumstances.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </>
  );
};

export default ServiceLandingTemplate;
