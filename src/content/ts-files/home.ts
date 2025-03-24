import profile1 from 'public/testimonials/profile1.jpg'
import profile2 from 'public/testimonials/profile2.avif'
import profile3 from 'public/testimonials/profile3.avif'
import profile4 from 'public/testimonials/profile4.avif'
import profile5 from 'public/testimonials/profile5.avif'
import profile6 from 'public/testimonials/profile6.jpg'

export const TestimonialsData = [
  {
    quote:
      'Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!',
    name: 'Dean Watson',
    title: 'Managing director',
    company: 'Farmland',
    avatar: profile1
  },
  {
    quote:
      'Radison provided game-changing insights that helped us optimize processes and scale operations fast.',
    name: 'Emily Zhang',
    title: 'CEO',
    company: 'Futuresync',
    avatar: profile2
  },
  {
    quote:
      "Radison's AI tools revolutionized how we work, saving time and driving our productivity forward.",
    name: 'James Carter',
    title: 'Marketing director',
    company: 'Innolystic',
    avatar: profile3
  },
  {
    quote:
      'Working with Radison has been seamless. Their solutions are both innovative and highly effective.',
    name: 'Liam Walker',
    title: 'Product manager',
    company: 'Brightpath',
    avatar: profile4
  },
  {
    quote:
      "Thanks to Radison, we've achieved incredible growth by automating tasks and improving accuracy.",
    name: 'Miguel Torres',
    title: 'IT consultant',
    company: 'Alphaedge',
    avatar: profile5
  },
  {
    quote:
      'The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!',
    name: 'Priya Sharma',
    title: 'Founder',
    company: 'NexGen',
    avatar: profile6
  }
]
export const pricingPlans = [
  {
    title: 'Basic',
    annualy: '$40',
    monthly: '$480',
    description:
      'Essential tools and features for starting your journey with ease.',
    features: [
      'Basic workflow automation',
      'Basic chatbot development',
      '60 content requests',
      'E-mail support',
      '1 consultation a month'
    ]
  },
  {
    title: 'Professional',
    annualy: '$80',
    monthly: '$960',
    description:
      'Advanced capabilities designed to meet growing business needs.',
    features: [
      'Advanced workflow automation',
      'Advanced chatbot development',
      '150 content requests',
      'E-mail support',
      '2 consultations a month'
    ]
  },
  {
    title: 'Enterprise',
    custom: true,
    description:
      'Comprehensive solutions tailored for large-scale business success.',
    features: [
      'Custom workflow automation',
      'Custom chatbot development',
      'Unlimited content requests',
      '24hr priority support',
      'Unlimited consultations a month'
    ]
  }
]
