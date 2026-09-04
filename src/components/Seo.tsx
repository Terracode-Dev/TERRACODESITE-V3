import { Helmet } from 'react-helmet-async'
import { articlesData } from '@/pages/Article-page/NewArticle'

const SITE_URL = 'https://www.terracodedev.com'
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

type SeoEntry = { title: string; description: string; type?: 'website' | 'article' }

const pages: Record<string, SeoEntry> = {
  '/': { title: 'Software Development Company in Sri Lanka | Terracode', description: 'Terracode builds AI solutions, business software, websites, mobile apps and cloud systems for startups and enterprises in Sri Lanka and worldwide.' },
  '/about': { title: 'About Terracode | Software Development Team in Sri Lanka', description: 'Meet the Terracode team creating practical, scalable software and thoughtful digital experiences for ambitious businesses.' },
  '/ai-solutions': { title: 'Custom AI Solutions and Automation | Terracode', description: 'Build custom AI models, intelligent automation, predictive analytics and secure AI integrations tailored to your business.' },
  '/articles': { title: 'Software, AI and Digital Product Articles | Terracode', description: 'Read Terracode insights about software engineering, artificial intelligence, digital products and technology-enabled businesses.' },
  '/business-softwares': { title: 'Custom Business Software Systems | Terracode', description: 'Streamline operations with secure, scalable ERP, CRM, inventory and custom business software enhanced by intelligent automation.' },
  '/career': { title: 'Software and Design Careers in Sri Lanka | Terracode', description: 'Explore career opportunities at Terracode and help build useful software, intelligent systems and digital products with a collaborative team.' },
  '/cloud-solutions': { title: 'Cloud Solutions and DevOps Services | Terracode', description: 'Modernize infrastructure with cloud migration, DevOps automation, monitoring and scalable AWS, Azure and Google Cloud solutions.' },
  '/contact': { title: 'Contact Terracode | Start Your Software Project', description: 'Contact Terracode to discuss your website, mobile app, AI, cloud or custom business software project.' },
  '/digitalportfolio': { title: 'Software and Digital Product Portfolio | Terracode', description: 'Explore websites, mobile applications and custom software products designed and developed by Terracode.' },
  '/mobile-apps': { title: 'Mobile App Development Company | Terracode', description: 'Launch secure, scalable iOS and Android applications with Terracode’s end-to-end mobile app design and development team.' },
  '/partnerships': { title: 'Technology Partnerships | Terracode', description: 'Partner with Terracode to deliver software, design, AI and cloud capabilities for your clients and business initiatives.' },
  '/pricing': { title: 'Software Development Pricing | Terracode', description: 'Review transparent Terracode pricing packages for websites, applications and custom digital solutions.' },
  '/t&s': { title: 'Terms and Conditions | Terracode', description: 'Read the terms, conditions and policies governing Terracode services and website use.' },
  '/ux-design': { title: 'UX Design and User Research Services | Terracode', description: 'Create intuitive, accessible digital products with research-led UX design, prototyping and usability testing from Terracode.' },
  '/website-solutions': { title: 'Website Design and Development Company | Terracode', description: 'Grow your business with a fast, responsive and SEO-ready website designed and developed by Terracode.' },
}

const noIndexPaths = new Set(['/cancel-page', '/company-portfolio', '/dGVycmFjb2RlCg', '/home', '/payments', '/payments-details', '/service', '/success-page', '/test'])
const serviceNames: Record<string, string> = {
  '/ai-solutions': 'Artificial Intelligence Solutions',
  '/business-softwares': 'Custom Business Software Development',
  '/cloud-solutions': 'Cloud and DevOps Services',
  '/mobile-apps': 'Mobile Application Development',
  '/ux-design': 'User Experience Design',
  '/website-solutions': 'Website Design and Development',
}

export function Seo({ pathname }: { pathname: string }) {
  const path = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'
  const slug = path.startsWith('/articles/') ? decodeURIComponent(path.slice(10)) : undefined
  const article = slug ? articlesData.find((item) => item.slug === slug) : undefined
  const entry: SeoEntry | undefined = article
    ? { title: `${article.title} | Terracode`, description: article.description, type: 'article' }
    : pages[path]
  const noIndex = noIndexPaths.has(path) || !entry
  const title = entry?.title ?? 'Page Not Found | Terracode'
  const description = entry?.description ?? 'The requested Terracode page could not be found.'
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const image = article?.image ? `${SITE_URL}${article.image.startsWith('/') ? article.image : `/${article.image}`}` : DEFAULT_IMAGE
  const schema = article ? {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title,
    description: article.description, image, author: { '@type': 'Person', name: article.author_name },
    publisher: { '@type': 'Organization', name: 'Terracode', url: SITE_URL, logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE } },
    mainEntityOfPage: canonical,
  } : serviceNames[path] ? {
    '@context': 'https://schema.org', '@type': 'Service', name: serviceNames[path],
    description, url: canonical,
    provider: { '@type': 'Organization', name: 'Terracode', url: SITE_URL },
    areaServed: 'Worldwide',
  } : path === '/' ? {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Terracode', url: SITE_URL,
    logo: DEFAULT_IMAGE, email: 'hello@terracodedev.com', telephone: '+94 77 582 4406',
    sameAs: ['https://www.facebook.com/terracodedev', 'https://www.instagram.com/terracode.team', 'https://www.linkedin.com/company/terracodedev'],
  } : undefined

  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
    {!noIndex && <link rel="canonical" href={canonical} />}
    <meta property="og:site_name" content="Terracode" />
    <meta property="og:type" content={entry?.type ?? 'website'} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>
}
