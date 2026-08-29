import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPoliciesPageProps {
  onBackToHome: () => void;
  initialSection?: 'terms' | 'privacy';
}

export const LegalPoliciesPage: React.FC<LegalPoliciesPageProps> = ({
  onBackToHome,
}) => {
  return (
    <div
      id="legal-policies-page"
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        fontFamily: 'Times New Roman, Times, serif',
        lineHeight: '1.6',
        padding: '24px 20px',
        maxWidth: '850px',
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      {/* Top Basic Navigation Bar */}
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #000000', paddingBottom: '12px' }}>
        <button
          onClick={onBackToHome}
          title="Back"
          aria-label="Back"
          id="legal-top-back-btn"
          style={{
            cursor: 'pointer',
            padding: '0',
            margin: '0 16px 0 0',
            fontSize: '16px',
            fontFamily: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            backgroundColor: 'transparent',
            color: '#000000',
          }}
        >
          <ArrowLeft style={{ width: '20px', height: '20px' }} />
        </button>
        <span style={{ marginRight: '12px' }}>|</span>
        <a href="#terms-and-conditions" style={{ color: '#0000EE', marginRight: '14px' }}>
          Terms &amp; Conditions
        </a>
        <a href="#privacy-policy" style={{ color: '#0000EE', marginRight: '14px' }}>
          Privacy Policy
        </a>
        <a
          href="https://cloaktail.com/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0000EE', marginRight: '14px' }}
        >
          About
        </a>
        <a
          href="https://cloaktail.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0000EE' }}
        >
          Help &amp; Support
        </a>
      </nav>

      <header>
        <h1 style={{ fontSize: '28px', margin: '0 0 8px 0' }}>
          Brick Stack &mdash; Official Legal Documentation
        </h1>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#333333' }}>
          <strong>Effective Date:</strong> August 29, 2026 | <strong>Version:</strong> 128.0.1
        </p>
      </header>

      <hr style={{ margin: '16px 0', borderTop: '1px solid #cccccc' }} />

      {/* Table of Contents */}
      <section>
        <h2 style={{ fontSize: '20px', margin: '16px 0 8px 0' }}>Table of Contents</h2>
        <ol style={{ paddingLeft: '24px', margin: '0 0 20px 0' }}>
          <li>
            <a href="#terms-and-conditions" style={{ color: '#0000EE' }}>
              Terms and Conditions
            </a>
            <ul style={{ paddingLeft: '20px' }}>
              <li>1.1 Acceptance of Fair Play Terms</li>
              <li>1.2 License to Play</li>
              <li>1.3 User Conduct &amp; Fair Gameplay</li>
              <li>1.4 Intellectual Property</li>
              <li>1.5 Disclaimers &amp; Limitation of Liability</li>
            </ul>
          </li>
          <li>
            <a href="#privacy-policy" style={{ color: '#0000EE' }}>
              Privacy Policy
            </a>
            <ul style={{ paddingLeft: '20px' }}>
              <li>2.1 Zero Personal Data Collection</li>
              <li>2.2 Local Device Storage</li>
              <li>2.3 Optional Google Sign-In &amp; Download Tracking</li>
              <li>2.4 Third-Party Services</li>
              <li>2.5 Children's Privacy</li>
              <li>2.6 Contact Information</li>
            </ul>
          </li>
        </ol>
      </section>

      <hr style={{ margin: '24px 0', borderTop: '1px solid #cccccc' }} />

      {/* ========================================================================= */}
      {/* SECTION 1: TERMS AND CONDITIONS */}
      {/* ========================================================================= */}
      <section id="terms-and-conditions">
        <h2 style={{ fontSize: '24px', margin: '20px 0 12px 0' }}>
          1. Terms and Conditions
        </h2>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.1 In-Game Fair Play Terms &amp; Conditions
        </h3>
        <blockquote
          style={{
            margin: '12px 0',
            padding: '12px 16px',
            borderLeft: '4px solid #000000',
            backgroundColor: '#f9f9f9',
            fontStyle: 'italic',
          }}
        >
          &ldquo;Welcome Player! By playing this retro brick game, you default to accept our fair play terms &amp; conditions. Enjoy smooth retro gameplay, craft your high scores, and stack like a champion!&rdquo;
        </blockquote>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.2 Acceptance of Agreement
        </h3>
        <p>
          By downloading, installing, accessing, or playing the <strong>Brick Stack</strong> video game or accessing its associated web platforms, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with these terms, please discontinue use and uninstall the application immediately.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.3 License to Play
        </h3>
        <p>
          We grant you a non-exclusive, non-transferable, revocable, limited license to download, install, and play Brick Stack strictly for your personal, non-commercial entertainment on compatible devices.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.4 User Conduct &amp; Prohibited Activities
        </h3>
        <p>While using Brick Stack, you agree not to:</p>
        <ul style={{ paddingLeft: '24px', margin: '8px 0' }}>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the software package.</li>
          <li>Distribute, sell, lease, sublicense, or commercially exploit the APK, assets, or software.</li>
          <li>Use automated bots, memory editors, or cheats to manipulate leaderboards or local gameplay metrics unnaturally.</li>
          <li>Interfere with or disrupt the normal operation or distribution infrastructure of the game.</li>
        </ul>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.5 Intellectual Property
        </h3>
        <p>
          All trademarks, logos, audio effects, sprites, designs, software code, and visual assets associated with Brick Stack are the exclusive intellectual property of Cloaktail and its licensors.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          1.6 Disclaimers &amp; Limitation of Liability
        </h3>
        <p>
          Brick Stack is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express or implied. Under no circumstances shall the creators, developers, or distributors be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the game.
        </p>
      </section>

      <hr style={{ margin: '32px 0', borderTop: '1px solid #cccccc' }} />

      {/* ========================================================================= */}
      {/* SECTION 2: PRIVACY POLICY */}
      {/* ========================================================================= */}
      <section id="privacy-policy">
        <h2 style={{ fontSize: '24px', margin: '20px 0 12px 0' }}>
          2. Privacy Policy
        </h2>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.1 In-Game Privacy Statement
        </h3>
        <blockquote
          style={{
            margin: '12px 0',
            padding: '12px 16px',
            borderLeft: '4px solid #000000',
            backgroundColor: '#f9f9f9',
            fontStyle: 'italic',
          }}
        >
          &ldquo;Hey Gamer! Your privacy is 100% respected here. We collect zero personal data, and all your high scores &amp; retro console settings stay stored safely right on your device. Have fun stacking bricks!&rdquo;
        </blockquote>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.2 Zero Personal Data Collection Policy
        </h3>
        <p>
          We strongly believe in gamer privacy. Brick Stack is engineered from the ground up to minimize data collection:
        </p>
        <ul style={{ paddingLeft: '24px', margin: '8px 0' }}>
          <li><strong>No In-Game Tracking:</strong> We do not track your location, browsing habits, or personal communications.</li>
          <li><strong>No Ad Trackers:</strong> The game does not bundle intrusive ad trackers or cross-application tracking SDKs.</li>
          <li><strong>No Unnecessary Permissions:</strong> The game does not request access to your contacts, camera, microphone, or storage files outside of standard application cache.</li>
        </ul>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.3 Local Device Storage
        </h3>
        <p>
          All your high scores, unlocked starting levels, custom console color themes, vibration/haptic intensity preferences, and virtual button layouts are stored locally on your device hardware (via SharedPreferences / local key-value store). If you uninstall the app or clear app data, your local preferences will be reset.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.4 Optional Google Authentication on Web Download
        </h3>
        <p>
          When obtaining the APK package from our distribution website, users may optionally sign in using Google Identity Services to record verified download access and receive official release updates. Only standard public profile details (name, email address, avatar) provided by Google OAuth are utilized for this purpose.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.5 Children's Privacy
        </h3>
        <p>
          Brick Stack is suitable for general audiences of all ages and does not knowingly collect, solicit, or maintain personally identifiable information from children under the age of 13.
        </p>

        <h3 style={{ fontSize: '18px', margin: '16px 0 8px 0' }}>
          2.6 Contact and Support Information
        </h3>
        <p>
          If you have questions, feedback, or concerns regarding these Terms and Conditions or Privacy Policy, please contact us:
        </p>
        <ul style={{ paddingLeft: '24px', margin: '8px 0' }}>
          <li><strong>Support Email:</strong> prople.site@gmail.com</li>
          <li><strong>About Us:</strong> <a href="https://cloaktail.com/about" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>https://cloaktail.com/about</a></li>
          <li><strong>Help &amp; Support Desk:</strong> <a href="https://cloaktail.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>https://cloaktail.com/contact</a></li>
        </ul>
      </section>

      <hr style={{ margin: '32px 0', borderTop: '1px solid #cccccc' }} />

      {/* Bottom Footer Navigation */}
      <footer style={{ marginTop: '24px', paddingBottom: '32px', fontSize: '14px' }}>
        <p style={{ color: '#666666', fontSize: '12px', margin: '0' }}>
          &copy; 2026 Brick Stack. All rights reserved. Powered by Cloaktail.
        </p>
      </footer>
    </div>
  );
};
