import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-orange-700 mb-8">
          Privacy Policy
        </h1>

        <p className="mb-6">
          Welcome to <strong>Puranas Quiz</strong>. Your privacy is important
          to us. This Privacy Policy explains how we collect, use, and protect
          your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Name and email address (when registering).</li>
          <li>Quiz scores and leaderboard information.</li>
          <li>Technical information such as browser type and device information.</li>
          <li>Cookies to improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>To provide quiz services.</li>
          <li>To improve website performance.</li>
          <li>To maintain leaderboards.</li>
          <li>To respond to user enquiries.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Cookies
        </h2>

        <p>
          Our website may use cookies to improve functionality and personalise
          your experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Google AdSense
        </h2>

        <p>
          We may display advertisements provided by Google AdSense. Google may
          use cookies to serve ads based on your previous visits to this and
          other websites. Users can learn more about Google's advertising
          practices through Google's Privacy & Terms pages.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Third-Party Services
        </h2>

        <p>
          We may use trusted third-party services such as Google AdSense,
          analytics providers, and hosting services. These providers have their
          own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Data Security
        </h2>

        <p>
          We take reasonable measures to protect your information from
          unauthorised access or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Children's Privacy
        </h2>

        <p>
          Puranas Quiz does not knowingly collect personal information from
          children under 13 years of age.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Contact
        </h2>

        <p>Email: ranjithkumarreddy2006@gmail.com</p>

        <p className="mt-8 text-gray-600">
          Last Updated: July 2026
        </p>
      </div>

      <Footer />
    </>
  );
}