import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/page_styling/TermsAndConditions/TermsAndConditions.css";

export default function TermsAndConditions() {
  // scroll to the top of the page on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='terms-conditions-page-wrapper'>
      <div className='terms-inner-wrapper'>
        <h1 className='page-title'>Terms and Conditions</h1>
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
            <li>Acceptance of Terms:</li>
            <p>
              By accessing or using our website, you agree to comply with and be
              bound by these terms and conditions. These terms apply to all
              visitors, users, and others who access or use the service.
            </p>

            <li>Privacy Policy:</li>
            <p>
              Please review our Privacy Policy, which also governs your visit to
              our website. The Privacy Policy outlines how we collect, use, and
              protect your personal information.
            </p>

            <li>Product Information:</li>
            <p>
              We make every effort to display as accurately as possible the
              colors and images of our products that appear on the store.
              However, we cannot guarantee that your computer monitor's display
              of any color will be accurate.
            </p>

            <li>Pricing and Payment:</li>
            <p>
              All prices are in US Dollars and are subject to change without
              notice. We reserve the right to refuse or cancel any order placed
              at an incorrect price. Payment must be made in full at the time of
              placing an order.
            </p>

            <li>Shipping and Delivery:</li>
            <p>
              Please refer to our Shipping Policy for information on shipping
              and delivery terms, including estimated delivery times and costs.
            </p>

            <li>Returns and Exchanges:</li>
            <p>
              Review our Returns and Exchanges Policy for information on how to
              return or exchange items purchased from our online store.
            </p>

            <li>Intellectual Property:</li>
            <p>
              All content on this website, including but not limited to text,
              graphics, logos, images, and software, is the property of Cafe
              Nyleta and is protected by copyright laws.
            </p>

            <li>Limitation of Liability:</li>
            <p>
              In no event shall Cafe Nyleta, its directors, employees, or
              affiliates be liable for any direct, indirect, incidental,
              special, or consequential damages arising out of or in any way
              connected with the use of our website.
            </p>

            <li>Governing Law:</li>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the United States of America. Any
              disputes arising out of or in connection with these terms shall be
              resolved by the courts of the United States of America.
            </p>

            <li>Changes to Terms:</li>
            <p>
              We reserve the right to update, change, or replace any part of
              these terms and conditions without prior notice. It is your
              responsibility to check our website periodically for changes.
            </p>
          </ol>
          <p className='contact-message'>
            Thank you for shopping at Cafe Nyleta! If you have any questions or
            concerns, please <Link to='/contact'>contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
