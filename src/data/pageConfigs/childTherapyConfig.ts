import { IconMoodKid, IconUsers, IconHeart, IconBrain, IconHeartHandshake, IconMoodHappy, IconStethoscope } from '@tabler/icons-react';
import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import image from '../../assets/images/CarolineSmile.jpg';
import officeImage from '../../assets/images/CarolineOffice.jpg';

export const childTherapyConfig: ServicePageConfig = {
  hero: {
    title: "Child & Adolescent Therapy",
    subtitle: "in Cambridge, Mass.",
    features: [
      {
        title: 'Play Therapy',
        description: 'Age-appropriate therapeutic techniques using play to help children express emotions and develop coping skills.',
        icon: IconMoodKid,
      },
      {
        title: 'Family Therapy',
        description: 'Collaborative family sessions to improve communication, resolve conflicts, and strengthen relationships.',
        icon: IconUsers,
      },
      {
        title: 'Behavioral Support',
        description: 'Evidence-based interventions to help children develop positive behaviors and emotional regulation skills.',
        icon: IconHeart,
      },
      {
        title: 'School Collaboration',
        description: 'Working with teachers and school staff to support your child\'s success in academic and social settings.',
        icon: IconBrain,
      },
    ],
    ctaText: "Schedule Session",
    ctaSubtext: "In-Person and Family Sessions Available"
  },
  about: {
    eyebrow: "About Dr. Caroline Fu",
    title: "Supporting young minds through therapy",
    content: [
      "Children and adolescents have unique ways of expressing themselves and processing their experiences. My therapeutic approach meets them where they are, using age-appropriate techniques that feel natural and engaging.",
      "I work closely with families to create a supportive environment that extends beyond our sessions, helping parents and caregivers understand and support their child's emotional growth."
    ],
    showDoctorCard: true,
    doctorImage: image,
    buttonText: "Meet Dr. Fu"
  },
  commitment: {
    title: "My Approach to Child & Teen Therapy",
    subtitles: [
      "Every child deserves to be heard and understood.",
      "Therapy should feel safe, engaging, and developmentally appropriate.",
      "Family involvement is key to lasting positive change."
    ],
    features: [
      {
        icon: IconMoodHappy,
        title: 'Child-Centered Care',
        description: 'I adapt my approach to each child\'s developmental stage, interests, and communication style, making therapy feel natural and comfortable.',
      },
      {
        icon: IconUsers,
        title: 'Family Partnership',
        description: 'Parents and caregivers are essential partners in the therapeutic process. I provide guidance and support to help families thrive together.',
      },
      {
        icon: IconHeartHandshake,
        title: 'Collaborative Approach',
        description: 'I work with schools, pediatricians, and other professionals in your child\'s life to ensure consistent, coordinated support.',
      },
    ],
    buttonText: "Begin Therapy"
  },
  services: {
    title: "Child & Adolescent Therapy Services",
    options: [
      {
        title: "Individual Therapy",
        description: "One-on-one sessions tailored to your child's needs • Play therapy for younger children • Talk therapy for adolescents • Trauma-informed care",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
      },
      {
        title: "Family Therapy",
        description: "Whole-family sessions to improve communication and relationships • Parent guidance and support • Sibling dynamics • Family conflict resolution",
        imageUrl: officeImage
      },
      {
        title: "Group Therapy",
        description: "Age-appropriate group sessions for social skills development • Peer support and connection • Specialized groups for anxiety, ADHD, and other concerns",
        imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80"
      }
    ]
  },
  virtualInPerson: {
    eyebrow: 'Treatment Options',
    title: 'Virtual & In-Person Therapy',
    description: 'Choose the format that works best for your family and your child\'s comfort level.',
    options: [
      {
        title: 'Virtual Sessions',
        description: 'Convenient online therapy for children and teens from the comfort of your home. Secure video sessions with flexible scheduling to fit your family life.',
        icon: IconUsers,
        buttonText: 'Learn More',
      },
      {
        title: 'In-Person Visits',
        description: 'Face-to-face therapy for children in Cambridge. Comfortable, child-friendly office setting designed for young patients and families.',
        icon: IconStethoscope,
        buttonText: 'Learn More',
      },
    ],
  },
};
