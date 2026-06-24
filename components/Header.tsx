'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  { label: 'OUR WORK', href: '/our-work' },
  { label: 'BLOGS', href: '/blogs' },
  { label: 'CONTACT US', href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: '/black-instagram-icon.webp', href: 'https://www.instagram.com/unwrittenev?igsh=Zmw4bnhieWYyY243' },
  { label: 'Pinterest', icon: '/pinterest-icon.webp', href: 'https://pinterest.com/unwrittenevents' },
  { label: 'TikTok', icon: '/tiktok-icon.webp', href: 'https://tiktok.com/@unwrittenevents' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <Link href="/">
          <Image src="/Unwritten-Events-Logo-Header.png" alt="Unwritten Events" width={404} height={200} style={{ objectFit: 'contain', height: '200px', width: 'auto' }} priority />
        </Link>
      </div>

      <nav className="header-nav">
        <ul className="header-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={pathname === link.href ? 'active' : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-social">
        {SOCIAL_LINKS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label={s.label}>
            <Image src={s.icon} alt={s.label} width={24} height={24} />
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(o => !o)}>
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={pathname === link.href ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
