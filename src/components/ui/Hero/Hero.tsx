import React, { useEffect, useRef } from 'react';
import { 
  IconBrain, 
  IconHeart, 
  IconUsers, 
  IconStethoscope 
} from '@tabler/icons-react';
import { 
  Button, 
  Container, 
  SimpleGrid,
  Text, 
  Title,
  Card,
  Flex,
  Box,
  Stack,
  useMantineTheme,
  Image
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './Hero.module.css';
import image from '../../../assets/images/CarolineSmile.jpg';
import carolineCutOneImage from '../../../assets/images/CarolineInside.jpg';

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  customButtonAction?: () => void;
  subtext?: string;
  showFeatureCards?: boolean;
  showMainCTA?: boolean;
  heroImage?: string;
}

interface HeroProps {
  config?: HeroConfig;
}

const defaultConfig: HeroConfig = {
  title: 'Adult & Child Psychiatry',
  subtitle: 'in Cambridge, Mass.',
  description: 'Personalized therapy & med management. <br /> <span style="color: #A51C30">Harvard</span> & <span style="color: #3E8EDE">Tufts</span> instructor. <br /> Now accepting new patients.',
  buttonText: 'Request Appointment',
  buttonLink: '/new-patient',
  subtext: 'In-person and virtual appointments available. <br />Office located at 186 Hampshire Street, Cambridge, MA.',
  showFeatureCards: false,
  showMainCTA: false,
  heroImage: carolineCutOneImage,
};

const Hero: React.FC<HeroProps> = ({ config = defaultConfig }) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  
  // Section refs for animations
  const heroCardsRef = useRef<HTMLDivElement>(null);
  const heroButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
          } else {
            entry.target.classList.remove(classes.visible);
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

  const features = [
    {
      title: 'Adult Psychiatry',
      icon: IconBrain,
    },
    {
      title: 'Child Psychiatry',
      icon: IconUsers,
    },
    {
      title: 'ADHD & Autism Care',
      icon: IconHeart,
    },
    {
      title: '很高兴认识您',
      icon: IconStethoscope,
    },
  ];

  const FeatureCard: React.FC<{ feature: any; index: number }> = ({ feature, index }) => {
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

  return (
    <Box className={classes.heroSection}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.heroTitle}>
              {config.title}
            </Text>
            <Text className={classes.heroSubtitle} mt="lg">
              {config.subtitle}
            </Text>
            <Text 
              size="lg" 
              c="dimmed" 
              mt="md" 
              className={classes.heroDescription}
              dangerouslySetInnerHTML={{ __html: config.description }}
            />
            
            {config.buttonText && (
              <Flex justify="center" mt="lg" className={classes.plainButton}>
                <Button
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="lavender"
                  onClick={config.customButtonAction || (() => navigate(config.buttonLink || '/new-patient'))}
                  style={{ width: '50%' }}
                >
                  {config.buttonText}
                </Button>
              </Flex>
            )}
            
            {config.subtext && (
              <Text 
                size="sm" 
                c="dimmed" 
                ta="center" 
                mt="md" 
                className={classes.loremText}
                dangerouslySetInnerHTML={{ __html: config.subtext }}
              />
            )}
            
            {config.showFeatureCards && (
              <SimpleGrid ref={heroCardsRef} cols={{ base: 1, sm: 2 }} spacing="lg" mt={40}>
                {features.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} index={index} />
                ))}
              </SimpleGrid>
            )}
            
            {config.showMainCTA && (
              <Flex ref={heroButtonRef} justify="flex-start" className={`${classes.mainCTA} ${classes.scrollAnimated}`}>
                <Button
                  size="xl"
                  radius="xl"
                  className={classes.animatedButton}
                  mt={40}
                  onClick={() => navigate(config.buttonLink || '/new-patient')}
                  rightSection={
                    <div className={classes.avatarContainer}>
                      <img 
                        src={image} 
                        alt="Dr. Caroline Fu" 
                        className={classes.heroAvatar}
                      />
                    </div>
                  }
                >
                  {config.buttonText || 'Request Appointment'}
                </Button>
              </Flex>
            )}
            
            {config.showMainCTA && (
              <Text size="md" c="dimmed" mt="lg" className={classes.ctaSubtext}>
                Virtual and In-Person Appointments Available
              </Text>
            )}
          </div>
          
          <Image src={config.heroImage} className={classes.heroImage} alt="Dr. Caroline Fu" />
        </div>
        
        {/* Full-width 4x1 grid of cards - Always show */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mt={60} className={classes.heroCardsGrid}>
          {features.map((feature, index) => {
            const isClickable = feature.title === 'Adult Psychiatry' || 
                               feature.title === 'Child Psychiatry' || 
                               feature.title === 'ADHD & Autism Care' || 
                               feature.title === '很高兴认识您';
            const getNavigationPath = () => {
              if (feature.title === 'Adult Psychiatry') return '/adult-psychiatry';
              if (feature.title === 'Child Psychiatry') return '/child-psychiatry';
              if (feature.title === 'ADHD & Autism Care') return '/adhd-services';
              if (feature.title === '很高兴认识您') return '/chinese';
              return undefined;
            };
            
            return (
              <Card 
                key={feature.title}
                shadow="md" 
                radius="lg" 
                className={`${classes.heroCard} ${isClickable ? classes.clickableCard : ''}`}
                padding="md"
                onClick={isClickable ? () => navigate(getNavigationPath()!) : undefined}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <Stack align="center" gap="xs">
                  <feature.icon size={32} stroke={1.5} color={theme.colors.lavender?.[6] || theme.colors.blue[6]} />
                  <Text fz="sm" fw={500} className={classes.heroCardTitle} ta="center">
                    {feature.title}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
