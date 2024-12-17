import React from "react";
import "./policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policyCont">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 12/13/2024
      </p>
      <p>
        At <strong>CrashOutApparel.com</strong>, your privacy is important to
        us. This Privacy Policy outlines how we collect, use, and protect your
        personal information when you visit our website or use our services.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Personal Information</h3>
      <ul>
        <li>
          Name, email address, phone number, and shipping/billing address.
        </li>
        <li>
          Payment details (securely processed through third-party payment
          providers).
        </li>
      </ul>

      <h3>1.2 Non-Personal Information</h3>
      <ul>
        <li>
          IP address, browser type, operating system, and browsing behavior.
        </li>
        <li>
          Data collected through cookies and similar tracking technologies.
        </li>
      </ul>

      <h3>1.3 Order Information</h3>
      <p>
        Details of the products you purchase, shipping preferences, and order
        history.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information collected for the following purposes:</p>
      <ul>
        <li>
          To process and fulfill orders, including shipping and payment
          transactions.
        </li>
        <li>
          To communicate updates about orders, promotions, and account-related
          notifications.
        </li>
        <li>
          To improve our website, products, and overall customer experience.
        </li>
        <li>
          To comply with legal obligations and prevent fraudulent activities.
        </li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We respect your privacy and never sell your personal information.
        However, your data may be shared in the following situations:
      </p>
      <h3>3.1 Service Providers</h3>
      <p>
        With payment processors, shipping companies, and marketing platforms to
        operate our business.
      </p>
      <h3>3.2 Legal Compliance</h3>
      <p>If required by law or to protect our rights, property, or safety.</p>
      <h3>3.3 Business Transfers</h3>
      <p>
        In the event of a merger, acquisition, or sale of assets, your data may
        be transferred.
      </p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>Enhance your browsing experience.</li>
        <li>Analyze website traffic.</li>
        <li>Deliver personalized content and advertisements.</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings.</p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have the following rights regarding
        your personal data:
      </p>
      <ul>
        <li>
          <strong>Access and Update:</strong> Request access to or correction of
          your personal information.
        </li>
        <li>
          <strong>Delete:</strong> Request deletion of your data, where
          applicable.
        </li>
        <li>
          <strong>Marketing Opt-Out:</strong> Unsubscribe from marketing
          communications.
        </li>
        <li>
          <strong>Restrict or Object:</strong> Restrict or object to specific
          data processing activities.
        </li>
      </ul>
      <p>
        To exercise these rights, email us at{" "}
        <a href="mailto:privacy@crashoutapparel.com">
          privacy@crashoutapparel.com
        </a>
        .
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your
        information. While we work diligently to safeguard your data, no online
        platform can guarantee complete security.
      </p>

      <h2>7. Children’s Privacy</h2>
      <p>
        CrashOutApparel.com does not knowingly collect information from
        individuals under 13 years of age.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our website may include links to third-party websites. We are not
        responsible for their privacy practices or content.
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        This Privacy Policy may be updated periodically. Any changes will be
        posted on this page with a revised <strong>"Effective Date"</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
