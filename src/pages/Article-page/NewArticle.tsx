import { Calendar, Clock, Heart, Send, Share } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { loadLikedArticleIds, saveLikedArticleIds } from "@/lib/articleLikes";

interface Section {
  title?: string;
  subtitle?: string;
  content: ReactNode;
  image?: string;
  imageAlt?: string;
}

interface SidebarItem {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  time?: string;
  image?: string;
  author_image?: string;
  author_name?: string;
  position?: string;
  description: string;
  comments: number;
  views: string;
  sections: Section[];
}


export const articlesData: SidebarItem[] = [
  {
    id: 0,
    slug: "our-story",
    title: "Our Story So Far",
    date: "2 August 2025",
    time: "10 mins read",
    image: "/article/TC1-Articale.png",
    author_image: "/employee/IMG_1158.PNG",
    author_name: "Nomin Sendinu",
    position: "CEO & Co-founder, Terracode Private Limited",
    description: "Main article about AI redefining software development",
    comments: 192,
    views: "4k",
    sections: [
      {
        content: (
          <>
            On April 18, 2024, we began our journey as a passionate tech startup with just 7 members. Day and night, we poured our efforts into developing a SaaS product tailored for medical professionals our very first milestone. Simultaneously, <b className="font-bold text-gray">we delivered outstanding software development services for over 15 businesses within just one year of operations.</b>
          </>
        )
      },
      {
        content: (
          <>
            As time progressed, so did our expertise and vision. We gradually evolved to build <b className="font-bold text-gray">high-performance, next-generation ERP and CRM-like business tools</b>—developed entirely using powerful languages such as Go (Golang) and Rust, alongside our own custom-built performance and security tools. These internal tools were crafted to ensure unmatched efficiency, speed, security, and scalability for our clients. While much of the industry remained reliant on traditional development infrastructures, we embraced innovation head-on. Integrating these advanced technologies into our development teams posed significant challenges, but our relentless commitment and adaptability made it possible.
          </>
        )
      },
      {
        content: (
          <>
            Midway through our journey, we expanded our service offerings to include AI integrations and custom AI solution development, especially for clients who had already built products with us. We took pride in upgrading their infrastructure with the latest technologies, <b className="font-bold text-gray">helping them unlock new business capabilities and achieve even greater impact.</b>
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-white">On November 2024, we officially registered our company as a private limited company.</b> Today, Terracode operates from our own office premises in Colombo, Sri Lanka, housing several incredible teams of developers, engineers, and innovators. Each team specializes in critical, in-demand technologies, working together to build robust software products that exceed our customers’ expectations and provide true value for their investments.
          </>
        )
      },
      {
        content: (
          <>
            Today, we’re also actively working on a suite of new software as a service products spanning diverse domains and industries prominently Logistics and retail industries. These upcoming solutions are being built with the same high standards of quality and performance that define us, and will soon be available to our beloved users at affordable, accessible pricing <b className="font-bold text-gray">ensuring that excellence in software is never out of reach.</b>
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-white">What sets us apart is not just our technology but our people.</b> Every individual in our Terracode family has played an equal part in shaping who we are today. There is no “more” or “less” credit here only collective dedication, shared values, and a united vision. That unity has empowered us to stand strong as a trusted name in software development, known for quality, performance, and client-first solutions.
          </>
        )
      },
      {
        content: (
          <>
            As the CEO of Terracode, I write this with heartfelt pride and gratitude. I am immensely thankful for the exceptional team that drives this company forward and for the amazing clients who trust us with their digital transformation. We remain committed to innovation and service excellence and we’re only just getting started. <b className="font-bold text-white">Here’s to what we’ve built, and to the future we’re building next.</b>
          </>
        )
      }
    ]
  },

  {
    id: 1,
    slug: "merkor",
    title: "Merkor: Turning Business Data Into Clear Direction",
    date: "21 August 2026",
    time: "10 mins read",
    image: "/article/ME-Articale.png",
    author_image: "/employee/IMG_1158.PNG",
    author_name: "Nomin Sendinu",
    position: "CEO & Co-founder, Terracode Private Limited",
    description: "Discover how Merkor, our innovative business intelligence tool, transforms complex data into actionable insights for smarter decision-making.",
    comments: 192,
    views: "4k",
    sections: [
      {
        content: (
          <>
            Every business creates valuable data every day. Sales, customers, orders, inventory, payments, returns, operations, and performance signals all carry important answers. But in most companies, those answers are hard to reach. They are often spread across different systems, hidden inside reports, locked in spreadsheets, or understood only by a few people who know where to look. <b className="font-bold text-gray">This makes decision-making slower than it should be.</b> Owners and managers may know the data exists, but still struggle to turn it into clear action.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-white">Merkor is built to solve that problem.</b>
          </>
        )
      },
      {
        content: (
          <>
            Merkor is an intelligent business insight platform designed for owners, founders, and management teams who want to understand their business with more clarity and confidence. It connects with the data your company already uses and transforms it into meaningful answers, practical reports, and decision-ready recommendations. Instead of asking your team to spend hours building dashboards or manually comparing numbers, <b className="font-bold text-gray">Merkor helps you ask direct business questions and receive clear explanations you can actually use.</b>
          </>
        )
      },
      {
        content: (
          <>
            The purpose of Merkor is not to overwhelm you with more charts. <b className="font-bold text-gray">Its purpose is to help you understand what is happening, why it may be happening, and what deserves your attention next.</b>
          </>
        )
      },
      {
        content: (
          <>
            With Merkor, a business owner can explore questions such as: What is driving revenue this month? Which products are performing best? Where are sales slowing down? Which customers need attention? Are refunds, cancellations, or stock issues affecting growth? What risks should the team act on before they become bigger problems? <b className="font-bold text-white">These are not just technical questions. They are management questions.</b> They affect planning, cash flow, customer relationships, operations, and daily decision-making.
          </>
        )
      },
      {
        content: (
          <>
            Merkor makes these answers easier to access by translating complex business data into simple, structured insight. It helps surface trends, highlight unusual changes, identify risks, and prepare reports that can be used in meetings or reviews. <b className="font-bold text-gray">The goal is to give leaders a clearer view of their company without requiring them to become data specialists.</b>
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-white">A key part of Merkor is trust.</b> Business decisions should not be based on guesses, vague summaries, or numbers that cannot be explained. Merkor is designed to work carefully with verified business information, keeping insights grounded in the data available to the company. When it provides an answer, report, or recommendation, the focus is on clarity, relevance, and reliability.
          </>
        )
      },
      {
        content: (
          <>
            Merkor also helps teams move faster. Instead of waiting for manual analysis, owners and managers can ask questions in natural language and get direction in minutes. This can support monthly reviews, performance checks, customer follow-ups, inventory decisions, operational planning, and strategic conversations. <b className="font-bold text-gray">It gives teams a practical way to stay close to the business, notice changes earlier, and make decisions with better context.</b>
          </>
        )
      },
      {
        content: (
          <>
            For growing companies, Merkor becomes especially valuable because complexity increases over time. More customers, more products, more transactions, more tools, and more teams can make it harder to see the full picture. Merkor acts as a layer of understanding across that complexity. <b className="font-bold text-gray">It helps connect the dots between different parts of the business so leaders can see not only individual numbers, but the bigger story behind them.</b>
          </>
        )
      },
      {
        content: (
          <>
            At its core, <b className="font-bold text-white">Merkor exists to make business intelligence more human.</b> It turns data into language, reports into decisions, and scattered information into focused direction. It supports the people responsible for making the business better by giving them a clearer, calmer, and more useful way to understand what is going on.
          </>
        )
      },
      {
        content: (
          <>
            Merkor is not just a reporting tool. <b className="font-bold text-white">It is a business decision companion built to help owners and management teams see clearly, act confidently, and stay ahead of the next important move.</b>
          </>
        )
      }
    ]
  },

  {
    id: 2,
    slug: "foreststore",
    title: "Foreststore: SaaS E-commerce Platform to Build, Manage, and Scale Online Stores",
    date: "24 August 2026",
    time: "10 mins read",
    image: "/article/foreststore.png",
    author_image: "/employee/IMG_1158.PNG",
    author_name: "Nomin Sendinu",
    position: "CEO & Co-founder, Terracode Private Limited",
    description: "Foreststore is a comprehensive SaaS e-commerce platform designed to empower businesses to create, manage, and scale their online stores with ease and efficiency.",
    comments: 192,
    views: "4k",
    sections: [
      {
        title: "Modern Commerce Has Changed. Has Your Business Changed with It? ",
        content: (
          <>
            Selling online is easier than ever but managing a growing online business can quickly become complex. Merchants often must handle products, inventory, orders, payments, deliveries, and customer interactions across multiple disconnected tools, spending valuable time switching between systems instead of focusing on growth. At the same time, customers expect a seamless experience wherever they shop whether through a website, mobile device. The challenge is no longer simply how to sell online, but how to manage everything that comes after the first sale. Foreststore brings the essential parts of e-commerce together in one connected platform, helping merchants manage their store, inventory, orders, payments, delivery, and business performance from one place. <b className="font-bold text-gray">Instead of managing multiple tools, merchants can focus on managing and growing their business.</b>
          </>
        )
      },
      {
        subtitle: "The Foreststore Vision: ",
        content: (
          <>
            "One calm home for your store — sell wherever your customers already are, without needing to be technical to run it."
          </>
        )
      },
      {
        content: "That philosophy extends beyond convenience. It fundamentally changes how businesses operate by bringing the essential parts of modern commerce together into one connected platform."
      },
      {
        title: "Meet Foreststore",
        content: (
          <>
            <b className="font-bold text-white">Foreststore</b> is a Software-as-a-Service (SaaS) e-commerce platform built by <b className="font-bold text-white">Terracode</b> for businesses that want to launch, manage, and scale online commerce without depending on a dedicated technical team.
          </>
        )
      },
      {
        content: "Unlike platforms that focus strictly on building a storefront, Foreststore is designed to support the complete operational journey of an e-commerce business. A single login provides access to product management, inventory tracking, order processing, payments, customer information, delivery operations, business analytics, staff management, and mobile administration. Every merchant operates inside their own secure environment with full data isolation, allowing the platform to scale seamlessly across every stage of growth."
      },
      {
        title: "What Does This Mean for Merchants?",
        content: (
          <>
            For merchants, the biggest benefit is simple: <b className="font-bold text-gray">less time managing disconnected systems and more time growing the business.</b>
          </>
        )
      },
      {
        content: "Foreststore brings important parts of daily commerce operations into one connected platform, helping merchants: "
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Manage more from one place:</b> products, inventory, orders, payments, delivery, and business operations
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Reduce manual work:</b> spend less time moving between multiple tools and managing disconnected workflows
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Sell across more channels:</b> manage different ways of selling while keeping core business operations connected
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Stay in control:</b> get better visibility into orders, stock, payments, and overall business activity
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Make smarter decisions:</b> use built-in analytics and business insights instead of relying only on guesswork
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Manage the business on the go:</b> stay connected through the web dashboard and mobile admin app
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Scale with less complexity:</b> grow products, orders, channels, and operations without immediately needing to add more disconnected systems
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">In simple terms, Foreststore helps merchants spend less time managing software and more time serving customers, improving operations, and growing their business.</b>
          </>
        )
      },
      {
        title: "Who Is Foreststore Built For?",
        content: (
          <>
            <b className="font-bold text-gray">Small Business Owners & Solo Sellers:</b> Run your entire catalog, order processing, and marketing from one calm, clear dashboard instead of ten disconnected tools.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Growing & Multi-Channel Brands:</b> Keep every order, customer interaction, and stock count automatically synchronized across every channel where you sell.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Agencies & Developers:</b> Build and manage store fleets for multiple clients with high grade security, client data isolation, and dedicated custom developer toolkits.
          </>
        )
      },
      {
        title: "Business Operations Made Simple",
        content: "Most businesses start by solving one problem at a time. They choose a web builder, add a third-party inventory plugin, connect an external shipping API, use separate payment gateways, and extract reports into Excel. Foreststore replaces this fragmented approach with a unified foundation centred on business outcomes."
      },
      {
        subtitle: "1. Launch a Store Without Technical Complexity",
        content: "Launching an online store should never require months of custom development or a dedicated technical team."
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">No-Code Storefront Builder:</b> Launch a modern, mobile-responsive online store using a theme-based builder that automatically syncs with your product catalog.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Custom Domains & Multilingual:</b> Connect your own domain and expand globally with built-in multi-language store support.
          </>
        )
      },
      {
        subtitle: "2. A Scalable Product Catalog",
        content: "Manage complex product structures with ease:"
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Rich Product Variants:</b> Configure multiple variants, options, categories, and curated collections.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Gift Cards & Promotions:</b> Issue and manage digital gift cards alongside standard physical items.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Multi-Channel Pricing:</b> Customize channel-specific pricing, currencies, and tax structures.
          </>
        )
      },
      {
        subtitle: "3. Real-Time, Multi-Location Inventory",
        content: "Selling products that aren't in stock ruins customer trust faster than almost anything else. Foreststore provides multi-location tracking to monitor stock levels across different warehouses or retail points. Every stock adjustment, shipment, and return is tracked with audit history, preventing overselling across channels through real-time synchronization upon order placement."
      },
      {
        title: "Order Management & Flexible Payments",
        content: "Receiving an order is only the beginning of the customer journey. What happens afterward determines whether that customer returns."
      },
      {
        content: "Foreststore structures the entire order lifecycle order placement, confirmation, fulfillment, payment-evidence review, draft orders, and refunds inside a single, unified workflow: "
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Credit & Debit Cards:</b> Support for card gateway payments with integrated order confirmation.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Cash on Delivery (COD):</b> Integrated directly into order fulfillment and courier tracking status.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Bank Transfers:</b> Includes photo-proof payment review, allowing merchants to verify bank transfer receipts directly inside the order review screen.
          </>
        )
      },
      {
        subtitle: "Transparent Subscription & Usage Billing",
        content: "Foreststore features a transparent merchant subscription system built around modern needs: clear tier plans, usage-based add-ons (including AI credits), invoicing, upgrades/downgrades, and automated renewals."
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Pay for what you need, when you need it with no hidden contracts.</b>
          </>
        )
      },
      {
        title: "Delivery & Logistics: A Courier Marketplace Inside Your Dashboard",
        content: "Many platforms treat shipping as an afterthought, leaving merchants to handle courier negotiations and tracking in separate tabs."
      },
      {
        content: (
          <>
            Foreststore bridges this gap with an <b className="font-bold text-gray">Integrated Courier Marketplace.</b> Merchants can browse available courier partners, review rates and terms, and apply directly from inside the dashboard. Once dispatched, orders are tracked end-to-end within the same system, ensuring both merchant and buyer stay informed without copying and pasting addresses into external portals.
          </>
        )
      },
      {
        title: "Business Decisions Backed by Data, Not Guesswork",
        content: "Growth decisions become clear when you understand what is happening inside your business. Foreststore includes deep, built-in analytics right out of the box eliminating the need for third-party reporting add-ons."
      },
      {
        content: "By consolidating sales channels, Foreststore gives you a complete view of your entire business performance: "
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Revenue Metrics:</b> Total revenue performance, average order value, and business forecasting.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Channel Performance:</b> Real-time performance insights across your available sales channels.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Product & Inventory Insights:</b> Top-performing products, low-performing stock, customer growth trends, and fulfillment statistics.
          </>
        )
      },
      {
        title: "Run Your Business from Anywhere",
        content: "Modern store owners are rarely stuck behind a desk all day."
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Mobile Admin App (iOS/Android):</b> Monitor sales, review new orders, update catalog items, receive instant push notifications, and check stock levels straight from your phone.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Configurable Merchant AI Assistant (iOS/Android):</b> Access an AI-assisted merchant tool (currently operational via Telegram) that assists with daily operational workflows, quick store activity lookups, and operational query testing.
          </>
        )
      },
      {
        title: "Built for Technical Flexibility & Extensibility",
        content: "While non-technical merchants can run their entire business through no-code tools, Foreststore is also engineered to give agencies, developers, and technical partners maximum flexibility: "
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Developer Storefront Kit:</b> Build fully custom, bespoke frontends (headless commerce) while relying on Foreststore's backend for catalog, inventory, order, and payment processing.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">API Access & Role Permissions:</b> Secure API keys for headless integrations and finegrained role-based staff permissions to control team access safely.
          </>
        )
      },
      {
        title: "Why Foreststore Stands Out",
        content: (
          <>
            Where traditional setups force you to juggle five to ten disconnected tools, Foreststore gives you <b className="font-bold text-gray">one single platform and unified login.</b>
          </>
        )
      },
      {
        content: (
          <>
            Instead of exporting CSV files to third-party logistics portals, you gain access to a <b className="font-bold text-gray">built-in Courier Partner Marketplace.</b>
          </>
        )
      },
      {
        content: (
          <>
            Instead of messy spreadsheets, you have <b className="font-bold text-gray">deep, real-time analytics and forecasting.</b>
          </>
        )
      },
      {
        content: (
          <>
            And instead of complex custom setups, you get <b className="font-bold text-gray">both no-code simplicity and developer grade headless capabilities.</b>
          </>
        )
      },
      {
        content: (
          <>
            Most platforms help you <i className="font-italic text-gray">build a storefront.</i>
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-white">Foreststore helps you run a business.</b>
          </>
        )
      },
      {
        title: "Future Roadmap (Upcoming Capabilities)",
        content: "Foreststore is continuously evolving. While core platform features are live and operational today, the platform has a clear public roadmap for upcoming capabilities: "
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">External Marketplace Sync:</b> Direct synchronization with platforms like Daraz, AliExpress, and eBay.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Shopper-Facing AI Commerce:</b> Live conversational shopping chat widgets directly on customer-facing storefronts.
          </>
        )
      },
      {
        content: (
          <>
            <b className="font-bold text-gray">Social Commerce & POS:</b> Deeper social selling integrations (TikTok and Instagram Shop), B2B/wholesale management, subscription products, and native Point-of-Sale (POS) systems.
          </>
        )
      }
    ]
  },

  // {

  //   id: 1,
  //   title: "Designing for Humans in an AI World",
  //   date: "2 November 2024",
  //   time: "10 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/chamod.png",
  //   author_name: "chamod fernando",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "As automation rises, human-centered design matters more than ever. Here's how we balance AI logic with user empathy....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Human-centered design has never been more crucial than it is today. As artificial intelligence and automation become increasingly integral to our software solutions, we face a fundamental challenge: maintaining the human touch."
  //     },
  //     {
  //       content: "At Terracode, we approach this by embedding empathy into every aspect of our AI implementations. We prioritize intuitive interfaces, clear communication, and meaningful interactions that complement AI's computational power with human understanding."
  //     },
  //     {
  //       content: "Our research shows that users respond most positively to AI systems that recognize and adapt to human needs rather than requiring humans to adapt to rigid technological constraints. This approach has led to higher user satisfaction and adoption rates across our client projects."
  //     }
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "The Future of Accessibility in Design",
  //   date: "2 September 2024",
  //   time: "20 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/pasindu.png",
  //   author_name: "nimesh fernando",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "As we innovate, it's crucial to ensure that our designs are inclusive and accessible to all users, regardless of ability.....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Accessibility is no longer an afterthought but a fundamental principle of modern software design. At Terracode, we believe technology should empower everyone, regardless of their physical or cognitive abilities."
  //     },
  //     {
  //       content: "We've implemented comprehensive accessibility testing across all our projects, ensuring that our solutions meet WCAG guidelines and provide meaningful experiences for users with diverse needs."
  //     },
  //     {
  //       content: "Our recent work with adaptive interfaces has shown promising results in creating truly universal designs that adjust to individual user requirements without sacrificing aesthetics or functionality."
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Sustainable Design Practices",
  //   date: "2 April 2024",
  //   time: "30 days ago",
  //   image: "article/Mask group.png",
  //   author_image: "/employee/manuka.png",
  //   author_name: "chamod senanayake",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "Exploring eco-friendly materials and methods in design to create a more sustainable future for industry and planet.....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Software development has an environmental impact that often goes unrecognized. From data center energy consumption to the carbon footprint of our digital products, we need to consider sustainability at every step."
  //     },
  //     {
  //       content: "At Terracode, we've implemented a series of green coding practices that optimize performance while reducing resource usage. Our cloud solutions are designed for efficiency, minimizing unnecessary processing and storage."
  //     },
  //     {
  //       content: "We also consider the lifecycle of our products, designing for longevity and adaptability rather than planned obsolescence. This approach not only benefits the environment but also provides better long-term value for our clients."
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Embracing Diversity in Design",
  //   date: "2 February 2024",
  //   time: "2 months ago", 
  //   image: "article/Mask group.png",
  //   author_image: "/employee/navoda.png",
  //   author_name: "amila perera",
  //   position: "Co-founder, Terracode Private Limited",
  //   description:
  //     "Diversity of thought and background in design teams fosters creativity and innovation, leading to better user experiences....",
  //   comments: 192,
  //   views: "4k",
  //   sections: [
  //     {
  //       content: "Diverse teams create more innovative solutions. This isn't just a values statement—it's backed by our experience and research. When people from different backgrounds collaborate, they bring unique perspectives that challenge assumptions and lead to breakthroughs."
  //     },
  //     {
  //       content: "At Terracode, we've built a multicultural team that represents various backgrounds, experiences, and ways of thinking. This diversity has directly contributed to our ability to create software that resonates with a global audience."
  //     },
  //     {
  //       content: "Our inclusive design workshops have become a cornerstone of our development process, ensuring that multiple perspectives inform every feature we build and every interface we design."
  //     }
  //   ]
  // }
];

interface NArticleProps {
  // Slug of the article to display; falls back to the first article when omitted/unknown
  slug?: string;
}

export default function NArticle({ slug }: NArticleProps) {
  const navigate = useNavigate();
  // The article to display is derived from the URL slug, so each article gets its own address
  const currentArticle = useMemo(
    () => articlesData.find(article => article.slug === slug) ?? articlesData[0],
    [slug]
  );
  // Whether the share link was just copied to the clipboard
  const [shareCopied, setShareCopied] = useState(false);
  // IDs of articles the visitor has liked, persisted in localStorage
  const [likedArticleIds, setLikedArticleIds] = useState<Set<number>>(() => loadLikedArticleIds());
  // Every other article, shown in the sidebar
  const sidebarArticles = useMemo(
    () => articlesData.filter(article => article.id !== currentArticle.id),
    [currentArticle]
  );

  // Navigate to the clicked article's own URL
  const handleReadMore = (articleSlug: string) => {
    navigate({ to: '/articles/$slug', params: { slug: articleSlug } });
    // Scroll to top when changing article
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if there are more articles to display
  const hasMoreArticles = sidebarArticles.length > 0;

  // Toggle whether an article is liked, persisting the choice to localStorage
  const toggleLike = (articleId: number) => {
    setLikedArticleIds((prev) => {
      const next = new Set(prev);
      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }
      saveLikedArticleIds(next);
      return next;
    });
  };

  // Base like count plus one if the visitor has liked this article
  const getLikeCount = (item: SidebarItem) =>
    item.comments + (likedArticleIds.has(item.id) ? 1 : 0);

  // Share the current article via the native share sheet, falling back to copying the link
  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentArticle.title,
          text: currentArticle.description,
          url: shareUrl,
        });
      } catch {
        // User cancelled the share sheet; nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Clipboard access unavailable; nothing to do
    }
  };

  return (
    <div className="bg-black text-white font-lufga xl:my-10 mb-20">
      {/* Main Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 py-12">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-[45px] mb-4 text-[#FDA10A]">
            {currentArticle.title}
          </h1>
          <h2 className="text-2xl md:text-[35px] mb-4 text-[#A4A4A4]">
            {currentArticle.subtitle}
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center text-[#A4A4A4] space-x-6 ">
              <span className="flex items-center gap-3 xl:text-2xl">
                <Calendar size={22} /> {currentArticle.date}
              </span>
              <span className="flex items-center gap-3 xl:text-2xl">
                <Clock size={22} /> {currentArticle.time}
              </span>
            </div>
            <div className="flex items-center gap-6 mr-5">
              <button
                type="button"
                onClick={() => toggleLike(currentArticle.id)}
                className="flex items-center gap-3 xl:text-2xl text-[#FDA10A] bg-transparent border-none cursor-pointer hover:opacity-80 transition"
              >
                <Heart
                  size={22}
                  className={likedArticleIds.has(currentArticle.id) ? "fill-[#FDA10A]" : ""}
                />
                {getLikeCount(currentArticle)}
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-3 xl:text-2xl text-[#FDA10A] bg-transparent border-none cursor-pointer hover:opacity-80 transition"
              >
                <Share size={22} /> {shareCopied ? "Link copied!" : "Share"}
              </button>
            </div>
          </div>
          <img
            src={currentArticle.image}
            alt={currentArticle.title}
            className="rounded-xl w-full"
          />

          {/* Author Info */}
          <div className="flex items-center space-x-4 xl:my-16">
            <img
              src={currentArticle.author_image}
              alt="Author"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{currentArticle.author_name}</h3>
              <p className="text-sm text-gray-400">{currentArticle.position}</p>
            </div>
          </div>

          {currentArticle.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl mb-4">{section.title}</h2>
              <h2 className="text-xl mb-4">{section.subtitle}</h2>
              <p className="text-[#A4A4A4] xl:text-2xl ">{section.content}</p>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt || section.title || currentArticle.title}
                  className="rounded-xl w-full my-6"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right content */}
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-3xl text-center text-[#FDA10A]">
            More Articles
          </h3>
          {hasMoreArticles ? (
            // Display the list of articles if there are any
            sidebarArticles.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900 p-4 rounded-2xl shadow hover:shadow-lg transition"
              >
                <Link
                  to="/articles/$slug"
                  params={{ slug: item.slug }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <h4 className="mb-2 text-2xl text-[#FDA10A] hover:underline">{item.title}</h4>
                </Link>
                <p className="text-[#A4A4A4] text-xl mb-3">{item.description}</p>
                <div className="flex flex-row gap-4 items-center justify-between mt-4">
                  <div className="flex flex-row gap-4 items-center justify-center ">
                    <div className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4">
                      <Send className="w-4 h-4" />{item.views}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleLike(item.id)}
                      className="backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 flex items-center gap-4 border-none cursor-pointer hover:bg-white/20 transition"
                    >
                      <Heart
                        className={`w-4 h-4 ${likedArticleIds.has(item.id) ? "fill-[#FDA10A] text-[#FDA10A]" : ""}`}
                      />
                      {getLikeCount(item)}
                    </button>
                  </div>
                  {/* Read More Arrow with Click Handler */}
                  <div
                    className="hover:bg-white transition-colors rounded-full cursor-pointer"
                    onClick={() => handleReadMore(item.slug)}
                  >
                    <img src="/Property 23.png" alt="Read More" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Display "No more articles" card when there are no additional articles
            <div className="bg-neutral-900 p-6 rounded-2xl shadow text-center w-full">
              <div className="mb-4">
                <img
                  src="/article/no-content.png"
                  alt="No more articles"
                  className="w-24 h-24 mx-auto opacity-80"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="text-2xl text-[#FDA10A] mb-3">No More Articles</h4>
              <p className="text-[#A4A4A4] text-xl mb-4">
                We're working on new content. Check back soon for more articles!
              </p>
              <div className="animate-pulse flex justify-center mt-4">
                <span className="bg-[#FDA10A]/30 text-[#FDA10A] px-4 py-2 rounded-full text-sm">
                  New articles coming soon
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
