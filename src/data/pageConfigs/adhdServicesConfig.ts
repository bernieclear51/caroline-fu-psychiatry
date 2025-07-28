import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { IconBrain, IconUsers, IconHeart, IconStethoscope } from '@tabler/icons-react';
import carolineSmileImage from '../../assets/images/CarolineSmile.jpg';

export const adhdServicesConfig: ServicePageConfig = {
  hero: {
    title: 'Expert Treatment for ADHD',
    subtitle: 'Comprehensive care across the lifespan',
    features: [
      {
        title: 'Adult ADHD',
        description: 'Specialized diagnosis and treatment for adults discovering ADHD later in life',
        icon: IconBrain,
      },
      {
        title: 'Child ADHD',
        description: 'Early intervention and age-appropriate treatments for children and adolescents',
        icon: IconUsers,
      },
      {
        title: 'Personalized Care',
        description: 'Individualized treatment plans tailored to each person\'s unique needs',
        icon: IconHeart,
      },
      {
        title: 'Evidence-Based',
        description: 'Proven therapeutic approaches and medication management',
        icon: IconStethoscope,
      },
    ],
    ctaText: 'Request an Appointment',
    ctaSubtext: 'Comprehensive ADHD assessment and treatment available',
  },
  about: {
    eyebrow: 'My Approach',
    title: 'No two individuals experience ADHD the same way',
    content: [
      'I go beyond surface-level symptoms to get a complete picture of each patient\'s challenges and strengths.',
      'Whether you\'re an adult struggling with focus and organization or a parent concerned about your child\'s academic and behavioral development, I provide a detailed, compassionate assessment to ensure an accurate diagnosis.',
    ],
    showDoctorCard: true,
    doctorImage: carolineSmileImage,
    buttonText: 'Request an Appointment',
  },
  commitment: {
    title: 'Care Across the Lifespan of ADHD',
    subtitles: [
      'Specialized treatment for adults and children',
      'Evidence-based interventions and medication management',
      'Comprehensive support for families and individuals',
    ],
    features: [
      {
        icon: IconBrain,
        title: 'Adults',
        description: 'Many adults may not realize they have ADHD until later in life, attributing their difficulties to personal shortcomings or external factors. I help adults identify the root causes of these challenges and provide strategies and treatments—such as therapy, medication, or behavioral therapy—to manage ADHD effectively. This care can improve productivity and organization and overall well-being, as individuals gain the tools to navigate their professional and personal lives with more confidence and control.',
      },
      {
        icon: IconUsers,
        title: 'Kids',
        description: 'ADHD in kids can cause academic, behavioral, and social struggles. Early diagnosis and treatment are crucial for helping kids manage symptoms. Expert psychiatric care can greatly improve school performance, family and social relationships, and self-confidence. As a child-trained psychiatrist, I offer age-appropriate interventions that may include behavioral therapy, parent training, and medication. By receiving the right support, children with ADHD can thrive at home and at school.',
      },
      {
        icon: IconHeart,
        title: 'Family Support',
        description: 'ADHD affects the entire family system. I provide comprehensive support that includes parent training, family therapy, and coordination with schools and other providers. My approach helps families understand ADHD, develop effective strategies, and create supportive environments where everyone can succeed.',
      },
    ],
    buttonText: 'Schedule ADHD Assessment',
  },
  services: {
    title: 'Comprehensive ADHD Services',
    layout: 'two-cards',
    options: [
      {
        title: 'Adult ADHD Services',
        description: 'Comprehensive Assessment - Detailed evaluation to accurately diagnose ADHD in adults, considering work, relationship, and daily life challenges.\n\nMedication Management - Evidence-based medication treatment with careful monitoring and adjustment to optimize effectiveness and minimize side effects.\n\nTherapy & Coaching - Cognitive behavioral therapy, organizational skills training, and ADHD coaching to develop practical strategies for success.\n\nWorkplace Support - Guidance on workplace accommodations and strategies to improve professional performance and career satisfaction.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'
      },
      {
        title: 'Child & Adolescent ADHD Services',
        description: 'Early Diagnosis - Comprehensive evaluation using age-appropriate assessment tools to accurately diagnose ADHD in children and teens.\n\nBehavioral Interventions - Evidence-based behavioral therapy, parent training, and school consultation to support academic and social success.\n\nMedication Management - Careful pediatric medication management with close monitoring of growth, development, and side effects.\n\nFamily Support - Parent education, family therapy, and coordination with teachers and school counselors to create consistent support systems.',
        imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'
      },
    ],
  },
  virtualInPerson: {
    eyebrow: 'Treatment Options',
    title: 'Virtual & In-Person ADHD Care',
    description: 'Choose the format that works best for your schedule and comfort level.',
    options: [
      {
        title: 'Virtual Sessions',
        description: 'Convenient online ADHD treatment from home. Secure video sessions with flexible scheduling to fit your busy life.',
        icon: IconUsers,
        buttonText: 'Learn More',
      },
      {
        title: 'In-Person Visits',
        description: 'Face-to-face ADHD care in Cambridge. Comfortable office setting with comprehensive assessment tools.',
        icon: IconStethoscope,
        buttonText: 'Learn More',
      },
    ],
  },
};
