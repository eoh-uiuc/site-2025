import Footer from '@/footer';
import Header from '@/header';
import { useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const LINKTREE_URL = 'https://linktr.ee/eoh2025';
const FB_URL = 'https://www.facebook.com/EngineeringOpenHouse/';
const INSTA_URL = 'https://www.instagram.com/eoh_illinois/';
const TWITTER_URL = 'https://twitter.com/IllinoisEOH';
const CONTACT_US = '/contact-us';

const SOCIALS = { LINKTREE_URL, FB_URL, INSTA_URL, TWITTER_URL };

const HEADER_ITEMS = [
  { text: "Volunteer", href: "/volunteer" },
  {
    text: "About Us",
    href: "/#about-us",
    menuItems: [
      {
        text: 'History',
        href: 'https://grainger.illinois.edu/news/features/EOH-100'
      },
      {
        text: 'Contact Us',
        href: CONTACT_US
      },
    ]
  },
  {
    text: "Schedule",
    href: "/#schedule"
  },
  {
    text: "FAQs",
    href: "/faq"
  },
  {
    text: "Sponsors",
    href: "/#sponsors"
  },
  {
    text: "Visitor Guide",
    href: "/guide.pdf",
    target: "_blank",
    type: "big"
  },
  {
    text: 'Linktree',
    href: LINKTREE_URL,
    type: 'mail'
  }
];

export default function BasicApp({ Component, pageProps }) {
  const router = useRouter()
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  return (
    <Fragment>
      {isLoaded && (
        <div>
          <Header
            headerItems={HEADER_ITEMS}
          />
          <div className="w-screen main-content">
            <Component {...pageProps} />
          </div>
          {router.pathname != '/vv' && <Footer socials={SOCIALS} />}
        </div>
      )}
    </Fragment>
  )
}
