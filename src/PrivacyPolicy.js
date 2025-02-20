// PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl text-left">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">Last updated: February 20, 2025</p>
        <p className="text-gray-600">
          This Privacy Policy describes Our policies and procedures on the collection, use
          and disclosure of Your information when You use the Service and tells You about
          Your privacy rights and how the law protects You.
        </p>
        <p className="text-gray-600">
          We use Your Personal data to provide and improve the Service. By using the
          Service, You agree to the collection and use of information in accordance with
          this Privacy Policy.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Interpretation and Definitions
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-3">Interpretation</h3>
        <p className="text-gray-600">
          The words of which the initial letter is capitalized have meanings defined under
          the following conditions. The following definitions shall have the same meaning
          regardless of whether they appear in singular or in plural.
        </p>
        <h3 className="text-lg font-semibold text-gray-700 mt-3">Definitions</h3>
        <p className="text-gray-600">
          For the purposes of this Privacy Policy:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            <strong>Account</strong>: A unique account created for You to access our Service.
          </li>
          <li>
            <strong>Company</strong>: Affilipin.io.
          </li>
          <li>
            <strong>Country</strong>: North Carolina, United States.
          </li>
          <li>
            <strong>Service</strong>: Refers to the Application.
          </li>
          <li>
            <strong>Personal Data</strong>: Any information that relates to an identified or
            identifiable individual.
          </li>
          <li>
            <strong>Usage Data</strong>: Data collected automatically (e.g., IP address,
            browser type, time spent on a page).
          </li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Collecting and Using Your Personal Data
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 mt-3">
          Types of Data Collected
        </h3>
        <p className="text-gray-600">
          We may collect the following types of personal data:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Email address</li>
          <li>Usage Data</li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-700 mt-3">
          Use of Your Personal Data
        </h3>
        <p className="text-gray-600">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>To provide and maintain our Service.</li>
          <li>To manage Your Account and registration.</li>
          <li>To contact You for updates, security notices, or marketing purposes.</li>
          <li>For legal compliance and business transfers.</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          Security of Your Personal Data
        </h2>
        <p className="text-gray-600">
          The security of Your Personal Data is important to Us, but remember that no method of transmission
          over the Internet, or method of electronic storage is 100% secure. While We strive to use
          commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
