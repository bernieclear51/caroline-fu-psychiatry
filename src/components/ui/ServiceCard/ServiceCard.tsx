import React from 'react';
import { 
  Card, 
  Text, 
  Title, 
  Button, 
  Stack,
  Group,
  Box,
  ThemeIcon,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import classes from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  link: string;
  icon?: React.ReactNode;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  buttonText,
  link,
  icon,
  color = 'lavender',
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      shadow="md" 
      padding={0}
      radius="lg" 
      className={classes.card}
      h="100%"
      p="md"
      withBorder
      style={{ padding: '0.75rem 0.625rem !important', margin: 0 }}
    >
      <Stack justify="space-between" h="100%" gap="md">
        <Stack gap="md">
          
          <Title order={3} className={classes.title}>
            {title}
          </Title>
          
          <Text c="dimmed" size="md" className={classes.description}>
            {description}
          </Text>
          
          <Stack gap="xs" className={classes.features}>
            {features.map((feature, index) => (
              <Group key={index} gap="xs" align="flex-start">
                <Box className={classes.featureBullet} />
                <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                  {feature}
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>
        
        <Button 
          variant="subtle"
          color={color}
          rightSection={<IconArrowRight size={16} />}
          onClick={() => navigate(link)}
          className={classes.button}
          fullWidth
        >
          {buttonText}
        </Button>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
