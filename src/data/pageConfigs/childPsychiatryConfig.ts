import { IconMoodKid, IconBrain, IconHeartHandshake, IconUsers, IconHeart, IconUserCheck, IconStethoscope } from '@tabler/icons-react';
import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import image from '../../assets/images/CarolineSmile.jpg';
import officeImage from '../../assets/images/CarolineOffice.jpg';

export const childPsychiatryConfig: ServicePageConfig = {
  hero: {
    title: "Compassionate Child Psychiatry",
    subtitle: "in Cambridge, Mass.",
    features: [
      {
        title: 'Personalized Therapy',
        description: 'Comprehensive psychiatric care that allows adequate time for thorough evaluation and treatment planning, ensuring your child receives the attention they deserve.',
        icon: IconBrain,
      },
      {
        title: 'Medication Management',
        description: 'Collaborative approach involving parents, caregivers, and school teams to create supportive environments for your child\'s mental health journey.',
        icon: IconHeartHandshake,
      },
      {
        title: 'Autism & ADHD Expert',
        description: 'Specialized therapeutic techniques designed specifically for children and adolescents, including play therapy and behavioral interventions.',
        icon: IconMoodKid,
      },
      {
        title: 'Now Accepting New Patients',
        description: 'Specialized therapeutic techniques designed specifically for children and adolescents, including play therapy and behavioral interventions.',
        icon: IconMoodKid,
      },
    ],
    ctaText: "Request Appointment",
    ctaSubtext: "Virtual and In-Person Appointments Available"
  },
  about: {
    eyebrow: "About Dr. Caroline Fu",
    title: "I'm a partner, not just a provider",
    content: [
      "I build strong, collaborative partnerships with my patients. As we work through challenges, we build trust and create a foundation for success. This reciprocal trust allows us to unlock our innate capacity for healing and growth.",
      "Moving towards a holistic, lasting shift in mindset or mental health requires time and patience. At my practice, interactions with your physician are never rushed. Your health and personal growth are always prioritized over time constraints."
    ],
    showDoctorCard: true,
    doctorImage: image,
    buttonText: "Meet Dr. Fu"
  },
  commitment: {
    title: "My Commitment to Patients & their Families",
    subtitles: [
      "Mental health care isn't \"one-size-fits-all.\"",
      "I provide deeply personalized care to meet children's unique needs.",
      "I work with a limited number of families to ensure unrushed care."
    ],
    features: [
      {
        icon: IconUsers,
        title: 'Connection',
        description: 'Your child\'s healing journey begins with connection. I believe in building collaborative partnerships with my patients, fostering trust that allows us to unlock their innate capacity for healing and growth.',
      },
      {
        icon: IconHeart,
        title: 'Support',
        description: 'My approach integrates traditional psychiatric expertise, a range of therapy approaches, and a profound respect for your child\'s perspective. Not all children need medication to become the healthiest version of themselves, although many see lasting benefits.',
      },
      {
        icon: IconUserCheck,
        title: 'Custom Care',
        description: 'While working with young patients, I take the time to understand their unique experiences and personality. I also offer concierge services for patients seeking a closer doctor-patient relationship.',
      },
    ],
    buttonText: "Request Appointment"
  },
  services: {
    title: "Child & Adolescent Psychiatry Services",
    layout: 'three-cards',
    options: [
      {
        title: "ADHD & Autism Care",
        description: "Comprehensive ADHD management with therapy and medication • Evidence-based interventions • Family support included • Specialized autism interventions and family guidance • Social skills development • Behavioral therapy techniques",
        imageUrl: "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
      },
      {
        title: "Child Therapy Services",
        description: "Play Therapy - Age-appropriate therapeutic techniques using play to help children express emotions and develop coping skills in a safe, supportive environment.\n\nCognitive Behavioral Therapy (CBT) - Adapted for children to help identify and change negative thought patterns, teaching age-appropriate coping skills for anxiety and behavioral challenges.\n\nFamily Therapy - Collaborative approach involving parents and caregivers to create supportive home environments and strengthen family relationships.",
        imageUrl: officeImage
      },
      {
        title: "Medication Management",
        description: "Pediatric Psychiatry - Careful, evidence-based medication management specifically tailored for children and adolescents, with close monitoring and family involvement.\n\nDevelopmental Assessment - Comprehensive evaluations considering developmental stages and individual needs to ensure appropriate treatment approaches.\n\nFamily Collaboration - Working closely with parents, schools, and other providers to ensure coordinated, holistic care for your child.",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
      }
    ]
  },
  virtualInPerson: {
    eyebrow: 'Treatment Options',
    title: 'Virtual & In-Person Care',
    description: 'Choose the format that works best for your family and comfort level.',
    options: [
      {
        title: 'Virtual Sessions',
        description: 'Convenient online psychiatric care for children from the comfort of your home. Secure video sessions with flexible scheduling to fit your family life.',
        icon: IconUsers,
        buttonText: 'Learn More',
      },
      {
        title: 'In-Person Visits',
        description: 'Face-to-face psychiatric care for children in Cambridge. Comfortable, private office setting designed for young patients.',
        icon: IconStethoscope,
        buttonText: 'Learn More',
      },
    ],
  },
};
