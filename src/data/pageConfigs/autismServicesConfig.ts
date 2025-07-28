import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { IconBrain, IconUsers, IconHeart, IconStethoscope } from '@tabler/icons-react';
import carolineSmileImage from '../../assets/images/CarolineSmile.jpg';

export const autismServicesConfig: ServicePageConfig = {
  hero: {
    title: 'Expert Treatment for Autism',
    subtitle: 'Comprehensive care across the lifespan',
    features: [
      {
        title: 'Adult Autism',
        description: 'Specialized diagnosis and support for adults discovering autism later in life',
        icon: IconBrain,
      },
      {
        title: 'Child Autism',
        description: 'Early intervention and developmental support for children and adolescents',
        icon: IconUsers,
      },
      {
        title: 'Personalized Care',
        description: 'Individualized treatment plans respecting each person\'s unique strengths',
        icon: IconHeart,
      },
      {
        title: 'Evidence-Based',
        description: 'Research-backed therapeutic approaches and family support',
        icon: IconStethoscope,
      },
    ],
    ctaText: 'Request an Appointment',
    ctaSubtext: 'Comprehensive autism assessment and support available',
  },
  about: {
    eyebrow: 'My Approach',
    title: 'Every individual with autism has unique strengths and challenges',
    content: [
      'Whether you\'re an adult seeking understanding of lifelong differences or a parent concerned about your child\'s development and social communication, I provide thorough, compassionate assessment and support.',
      'My goal is to help autistic individuals and their families develop strategies that honor their authentic selves while building skills for success in daily life.'
    ],
    showDoctorCard: true,
    doctorImage: carolineSmileImage,
    buttonText: 'Learn More About my Approach',
  },
  commitment: {
    title: 'Care Across the Lifespan of Autism',
    subtitles: [
      'Neurodiversity-affirming approach for all ages',
      'Evidence-based interventions and family support',
      'Comprehensive assessment and ongoing care',
    ],
    features: [
      {
        icon: IconBrain,
        title: 'Adults',
        description: 'Many adults discover they are autistic later in life, finally understanding patterns of difference they\'ve experienced throughout their lives. I provide comprehensive autism assessments for adults, helping them develop strategies for success in work, relationships, and daily life. My approach focuses on building on existing strengths while addressing challenges with executive functioning, social communication, and sensory processing',
      },
      {
        icon: IconUsers,
        title: 'Children & Adolescents',
        description: 'Early identification and intervention can significantly improve outcomes for autistic children. I provide thorough developmental assessments and work closely with families to create supportive environments that honor the child\'s neurotype while building essential skills. My approach includes social communication support, sensory integration strategies, and behavioral interventions that respect the child\'s autonomy. I collaborate with schools and other providers to ensure consistent, evidence-based support that helps children thrive in their natural environments.',
      },
      {
        icon: IconHeart,
        title: 'Family Support',
        description: 'Autism affects the entire family system, and I provide comprehensive support that includes parent education, sibling support, and family therapy. My approach helps families understand autism from a neurodiversity perspective, develop effective communication strategies, and create home environments that support everyone\'s needs. I also provide guidance on navigating educational systems, accessing community resources, and advocating for appropriate services and accommodations.',
      },
    ],
    buttonText: 'Request an Appointment',
  },
  services: {
    title: 'Comprehensive Autism Services',
    layout: 'two-cards',
    options: [
      {
        title: 'Adult Autism Services',
        description: 'Comprehensive Assessment - Thorough evaluation using gold-standard diagnostic tools to accurately identify autism in adults, considering masking and late diagnosis.\n\nSupport & Therapy - Individual therapy focused on self-understanding, executive functioning, social skills, and managing sensory sensitivities.\n\nWorkplace Support - Guidance on disclosure decisions, workplace accommodations, and strategies for professional success while honoring your authentic self.\n\nLife Skills Coaching - Practical support with daily living skills, relationship building, and navigating social situations with confidence.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'
      },
      {
        title: 'Child & Adolescent Autism Services',
        description: 'Early Assessment - Comprehensive developmental evaluation using evidence-based tools to identify autism and create individualized support plans.\n\nDevelopmental Support - Social communication therapy, play-based interventions, and sensory integration support tailored to each child\'s needs.\n\nFamily Training - Parent education, sibling support, and family therapy to create understanding and supportive home environments.\n\nSchool Collaboration - Working with educational teams to develop appropriate IEPs, classroom accommodations, and transition planning for academic success.',
        imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'
      },
    ],
  },
  virtualInPerson: {
    eyebrow: 'Treatment Options',
    title: 'Virtual & In-Person Autism Care',
    description: 'Choose the format that works best for your comfort and sensory needs.',
    options: [
      {
        title: 'Virtual Sessions',
        description: 'Comfortable online autism support from your familiar environment. Reduced sensory demands with flexible scheduling.',
        icon: IconUsers,
        buttonText: 'Learn More',
      },
      {
        title: 'In-Person Visits',
        description: 'Face-to-face autism care in a sensory-friendly Cambridge office designed with neurodivergent individuals in mind.',
        icon: IconStethoscope,
        buttonText: 'Learn More',
      },
    ],
  },
};
