import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Card,
  ThemeIcon,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconUsers, IconStethoscope } from '@tabler/icons-react';
import classes from './VirtualInPersonSection.module.css';

export interface VirtualInPersonOption {
  title: string;
  description: string;
  icon: React.FC<any>;
  buttonText: string;
  buttonLink?: string;
}

export interface VirtualInPersonSectionConfig {
  eyebrow: string;
  title: string;
  description: string;
  options: VirtualInPersonOption[];
}

interface VirtualInPersonSectionProps {
  config: VirtualInPersonSectionConfig;
  className?: string;
}

const VirtualInPersonSection: React.FC<VirtualInPersonSectionProps> = ({ 
  config, 
  className = '' 
}) => {
  const navigate = useNavigate();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // Animation setup - scoped to this component only
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
      // Only observe elements within this component's scope
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll(
          `.${classes.virtualSectionTitle}, .${classes.virtualScrollAnimated}`
        );
        animatedElements.forEach((element) => {
          observer.observe(element);
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box ref={sectionRef} className={`${classes.servicesSection} ${className}`} data-virtual-in-person-section>
      <Container size="lg">
        <Stack gap="xl">
          <Box ta="center" className={classes.virtualSectionTitle}>
            <Text c="lavender.6" fw={600} size="sm" tt="uppercase" mb="xs">
              {config.eyebrow}
            </Text>
            <Title order={2} size="h1" mb="md">
              {config.title}
            </Title>
            <Text size="lg" c="dimmed" maw={600} mx="auto">
              {config.description}
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" maw={800} mx="auto">
                  {config.options.map((option, index) => (
                    <Card 
                      key={option.title}
                      radius="lg" 
                      p="xl" 
                      className={`${classes.darkFeatureCard} ${classes.virtualScrollAnimated}`} 
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                <Stack gap="md" align="center" ta="center">
                  <ThemeIcon
                    size={64}
                    radius="xl"
                    variant="light"
                    color="lavender"
                  >
                    <option.icon size={32} />
                  </ThemeIcon>
                  <Title order={3}>{option.title}</Title>
                  <Text size="md">
                    {option.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>

          {/* Request Appointment Button */}
          <Box ta="center" mt="xl">
            <Button
              size="xl"
              radius="xl"
              className="rainbow-glow-button-interactive"
              variant="filled"
              color="lavender"
              onClick={() => navigate('/new-patient')}
            >
              Request Appointment
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

// Default configuration for easy use
export const defaultVirtualInPersonConfig: VirtualInPersonSectionConfig = {
  eyebrow: 'Treatment Options',
  title: 'Virtual & In-Person Care',
  description: 'Choose the format that works best for your lifestyle and comfort level.',
  options: [
    {
      title: 'Virtual Sessions',
      description: 'Convenient online psychiatric care from the comfort of your home. Secure video sessions with flexible scheduling to fit your work and life.',
      icon: IconUsers,
      buttonText: 'Learn More',
    },
    {
      title: 'In-Person Visits',
      description: 'Face-to-face psychiatric care in Cambridge. Comfortable, private office setting with traditional therapeutic environment.',
      icon: IconStethoscope,
      buttonText: 'Learn More',
    },
  ],
};

export default VirtualInPersonSection;
