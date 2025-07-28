import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { IconHeart, IconUsers, IconBrain, IconStethoscope } from '@tabler/icons-react';
import carolineSmileImage from '../../assets/images/CarolineSmile.jpg';
import carolineOfficeImage from '../../assets/images/CarolineOffice.jpg';
import carolineCutOneImage from '../../assets/images/Caroline Cut One.png';

export const adultTherapyConfig: ServicePageConfig = {
  hero: {
    title: 'Holistic Therapy in Cambridge',
    subtitle: 'Personalized therapy adapts to <strong>you.</strong>',
    features: [
      {
        title: 'Highly Individualized Care',
        description: 'Building collaborative partnerships',
        icon: IconHeart,
      },
      {
        title: 'Multiple Therapy Modalities',
        description: 'Integrating expertise with respect',
        icon: IconUsers,
      },
      {
        title: 'Virtual & In-Person',
        description: 'Understanding unique experiences',
        icon: IconBrain,
      },
      {
        title: 'Now Accepting New Patients',
        description: 'Holistic, scientific approach',
        icon: IconStethoscope,
      },
    ],
    ctaText: 'Request an Appointment',
    ctaSubtext: 'Now accepting new patients. Call 617-401-8838 for same-day appointments.',
  },
  about: {
    eyebrow: 'My Commitment',
    title: 'Mental health care isn\'t "one-size-fits-all"',
    content: [
      'I provide deeply personalized therapy to meet each client\'s unique needs. I work with a limited number of patients to ensure unrushed care.',
      'Your healing journey begins with connection. I believe in building collaborative partnerships with my patients, fostering trust that allows us to unlock their innate capacity for healing and growth.',
    ],
    showDoctorCard: true,
    doctorImage: carolineSmileImage,
    buttonText: 'Learn More About My Approach',
  },
  commitment: {
    title: 'Board-certified psychiatrist & therapist',
    subtitles: [
      'Instructor at Harvard & Tufts Medical Schools',
      'MGH / Brigham Affiliate',
      'Focused on holistic, evidence-based care',
    ],
    features: [
      {
        icon: IconHeart,
        title: 'Connection',
        description: 'Your healing journey begins with connection. I believe in building collaborative partnerships with my patients, fostering trust that allows us to unlock their innate capacity for healing and growth.',
      },
      {
        icon: IconUsers,
        title: 'Support',
        description: 'My approach integrates traditional psychiatric expertise, a range of therapy approaches, and a profound respect for your perspective. Medication may not be required for you to become the healthiest version of yourself.',
      },
      {
        icon: IconBrain,
        title: 'Custom Care',
        description: 'While working with all of my patients, I take the time to understand their unique experiences and personality. I also offer concierge services for patients seeking a closer doctor-patient relationship.',
      },
    ],
    buttonText: 'Request an Appointment Online',
  },
  services: {
    title: 'Therapy & Psychiatry Services for Greater Boston',
    layout: 'two-cards',
    options: [
      {
        title: 'Therapy Services',
        description: 'Cognitive Behavioral Therapy (CBT) - Helps identify and change negative thought patterns, teaching coping skills to manage anxiety, depression, and behavioral challenges effectively.\n\nPsychodynamic Therapy - Explores unconscious emotions and past experiences to help understand and process deep-seated feelings, improving self-awareness and emotional regulation.\n\nAcceptance & Commitment Therapy (ACT) - Encourages accepting difficult emotions while staying committed to your values, helping develop resilience and emotional flexibility.\n\nADHD Skills Therapy - Provides structured strategies to improve focus, impulse control, and organization, empowering success academically and socially while building confidence.',
        imageUrl: carolineOfficeImage,
      },
      {
        title: 'Psychiatry Services',
        description: 'Medication Management - Thoughtful, evidence-based medication support tailored to your unique needs, always with a focus on the least intervention necessary for the best outcome.\n\nDiagnosis - Comprehensive, physician-led assessments to accurately diagnose and understand your mental health needs, ensuring the right care from the start.\n\nOffice Location - I am now accepting in-patient appointments for adults in Cambridge, Mass. We are located at 186 Hampshire Street, in the heart of Inman Square.',
        imageUrl: carolineCutOneImage,
      },
    ],
  },
  virtualInPerson: {
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
  },
};
