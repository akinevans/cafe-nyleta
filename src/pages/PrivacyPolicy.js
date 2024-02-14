import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/page_styling/PrivacyPolicy/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  // scroll to the top of the page on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='privacy-policy-page-wrapper'>
      <div className='privacy-policy-inner-wrapper'>
        <h1 className='page-title'>Privacy Policy</h1>
        <h2 className='page-subtitle'>Last Updated December 2023</h2>

        <div className='body-text-wrapper'>
          <p className='welcome-message'>
            Welcome to Cafe Nyleta! Before you start shopping, please take a
            moment to read our terms and conditions. By accessing or using our
            website, you agree to be bound by these terms and conditions. If you
            do not agree with any part of these terms, please do not use our
            website.
          </p>

          <ol type='1'>
            <li>Information We Collect:</li>
            <p>
              We may collect personal information, including but not limited to
              your name, email address, shipping address, billing address, phone
              number, and payment details, when you make a purchase or create an
              account on our website.
            </p>

            <li>How We Use Your Information:</li>
            <p>
              We use the information we collect for various purposes, including
              order processing, customer service, communication, and to improve
              our website. We may also use your information to send you
              promotional materials or offers, but you can opt out at any time.
            </p>

            <li>Security:</li>
            <p>
              We take appropriate measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              Our payment processing partners use industry-standard encryption
              to secure your payment information.
            </p>

            <li>Cookies:</li>
            <p>
              We use cookies to enhance your browsing experience. Cookies are
              small pieces of data stored on your device that help us improve
              our website's functionality. You can disable cookies in your
              browser settings, but this may affect certain features of our
              website.
            </p>

            <li>Third-Party Services:</li>
            <p>
              We use cookies to enhance your browsing experience. Cookies are
              small pieces of data stored on your device that help us improve
              our website's functionality. You can disable cookies in your
              browser settings, but this may affect certain features of our
              website.
            </p>

            <li>Links to Other Websites:</li>
            <p>
              Our website may contain links to other websites. We are not
              responsible for the privacy practices of these third-party
              websites, so we encourage you to review their privacy policies.
            </p>

            <li>Children's Privacy:</li>
            <p>
              Our website is not directed at children under the age of 13. We do
              not knowingly collect personal information from children. If you
              are a parent or guardian and believe that your child has provided
              us with personal information, please contact us, and we will take
              steps to delete such information.
            </p>

            <li>Changes to this Privacy Policy:</li>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Changes will be effective immediately upon posting on
              our website. We encourage you to review this Privacy Policy
              periodically for any updates.
            </p>

            <li>Contact Us:</li>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please <Link to='/contact'>contact us</Link>.
            </p>
          </ol>

          <p className='closing-message'>
            Thank you for choosing Cafe Nyleta. Your privacy is important to us.
          </p>
        </div>
      </div>
    </div>
  );
}
