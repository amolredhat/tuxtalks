'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sidebar-nav" id="sideNav">
      {/* Mobile Header */}
      <div className="sidebar-mobile-header">
        <Link href="/" className="sidebar-brand-mobile">Amol Shinde</Link>
        <button className="sidebar-toggler" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`sidebar-content ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-profile">
          <img className="sidebar-profile-img" src="/img/profile.jpg" alt="Amol Shinde" />
        </div>
        <ul className="sidebar-links">
          <li><Link href="/#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link href="/#education" onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link href="/#interests" onClick={() => setIsOpen(false)}>Interests</Link></li>
          <li><Link href="/#awards" onClick={() => setIsOpen(false)}>Awards</Link></li>
          <li className="sidebar-divider"></li>
          <li><Link href="/blog" className="sidebar-highlight" onClick={() => setIsOpen(false)}>Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}
