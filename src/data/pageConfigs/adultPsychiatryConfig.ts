import { IconBrain, IconHeart, IconStethoscope, IconUsers, IconHeartHandshake, IconMoodHappy } from '@tabler/icons-react';
import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import image from '../../assets/images/CarolineSmile.jpg';
import officeImage from '../../assets/images/CarolineOffice.jpg';

export const adultPsychiatryConfig: ServicePageConfig = {
  hero: {
    title: "Personalized Pyschiatry",
    subtitle: "in Cambridge, Mass.",
    features: [
      {
        title: 'Concierge Care',
        description: 'Evidence-based psychiatric treatment combining therapy and medication management tailored to your unique needs and goals.',
        icon: IconBrain,
      },
      {
        title: 'Medication Management',
        description: 'Specialized treatment for anxiety disorders, depression, and mood-related conditions with proven therapeutic approaches.',
        icon: IconHeart,
      },
      {
        title: 'Holistic Therapy',
        description: 'Adult ADHD evaluation and treatment, helping you develop strategies for improved focus and productivity.',
        icon: IconStethoscope,
      },
      {
        title: 'Accepting New Patients',
        description: 'Currently welcoming new adult patients seeking compassionate, personalized psychiatric care.',
        icon: IconUsers,
      },
    ],
    ctaText: "Request an Appointment",
    ctaSubtext: "Telehealth and In-Person Appointments Available"
  },
  about: {
    eyebrow: "About Dr. Caroline Fu",
    title: "Your mental health partner",
    content: [
      "I believe in treating the whole person, not just symptoms. My approach combines evidence-based psychiatric care with genuine partnership, creating a safe space where you can explore challenges and develop lasting strategies for wellness.",
      "Adult mental health is complex and deeply personal. I take time to understand your unique circumstances, goals, and preferences to create a treatment plan that truly fits your life."
    ],
    showDoctorCard: true,
    doctorImage: image,
    buttonText: "Learn About Dr. Fu"
  },
  commitment: {
    title: "A holistic approach to psychiatric care",
    subtitles: [
      "Everyone's mental health journey is unique.",
      "I provide personalized care that respects your autonomy and goals.",
      "Treatment is collaborative, never rushed, and always confidential."
    ],
    features: [
      {
        icon: IconHeartHandshake,
        title: 'Partnership',
        description: 'We work together as partners in your care. Your input, preferences, and goals guide every aspect of your treatment plan.',
      },
      {
        icon: IconBrain,
        title: 'Evidence-Based Care',
        description: 'I use proven therapeutic approaches and medications, staying current with the latest research to provide you with the most effective treatments.',
      },
      {
        icon: IconMoodHappy,
        title: 'Holistic Wellness',
        description: 'Mental health affects every aspect of life. I consider your relationships, work, lifestyle, and personal values in developing your care plan.',
      },
    ],
    buttonText: "Start Your Journey"
  },
  services: {
    title: "Virtual and In-Person Psychiatry",
    layout: 'two-cards',
    options: [
      {
        title: "Telehealth Sessions",
        description: "Secure video sessions & flexible scheduling to fit your work and life",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
      },
      {
        title: "In-Person Visits",
        description: "Face-to-face psychiatric care in Cambridge • Comfortable, private office setting • Traditional therapeutic environment",
        imageUrl: officeImage
      }
    ]
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
