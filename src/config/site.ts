export const siteConfig = {
  title:
    'Trimtube - The Fast and Modern way to cut and download YouTube videos',
  description:
    'Trimtube is a modern, no-frills Youtube video downloader that offers the ability to easily download and trim videos in any format, on the breeze.',
  mainNav: [
    {
      id: 0,
      title: 'Home',
      href: '/',
      type: 'link',
      pages: [],
      group: 'Company',
      forHeader: true
    },
    {
      id: 1,
      title: 'Features',
      href: '/features',
      type: 'link',
      pages: [],
      group: 'Company',
      forHeader: true
    },
    {
      id: 2,
      title: 'Blog',
      href: '/blog',
      type: 'link',
      pages: [],
      group: 'Company',
      forHeader: true
    },
    {
      id: 3,
      title: 'Resources',
      href: '/',
      type: 'dropdown',
      pages: [
        {
          id: 1,
          title: 'Blog',
          href: '/blog',
          pages: []
        },
        {
          id: 2,
          title: 'Integrations',
          href: '/integrations',
          pages: []
        },
        {
          id: 3,
          title: 'FAQ',
          href: '/faq',
          pages: []
        }
      ],
      group: 'Company',
      variant: 'list',
      forHeader: true
    },
    {
      id: 4,
      title: 'Pricing',
      href: '/pricing',
      type: 'link',
      group: 'Subscription',
      pages: [],
      forHeader: false
    },
    {
      id: 6,
      title: 'Privacy Policy',
      href: '/privacy',
      type: 'link',
      group: 'Site',
      pages: [],
      forHeader: false
    },
    {
      id: 5,
      title: 'Terms & Conditions',
      href: '/terms',
      type: 'link',
      group: 'Site',
      pages: [],
      forHeader: false
    },
    {
      id: 7,
      title: 'Our Climate Commitment',
      href: '/climate',
      type: 'link',
      group: 'Site',
      pages: [],
      forHeader: false
    }
  ]
}
