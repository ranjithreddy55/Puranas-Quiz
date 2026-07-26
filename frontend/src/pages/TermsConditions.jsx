import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-orange-700 mb-8">
          Terms & Conditions
        </h1>

        <p>
          By using Puranas Quiz, you agree to these Terms & Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Website Usage
        </h2>

        <p>
          This website is intended for educational and informational purposes.
          Users should use the platform responsibly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          User Accounts
        </h2>

        <p>
          Users are responsible for maintaining the confidentiality of their
          account credentials.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Quiz Content
        </h2>

        <p>
          Quiz questions are created for educational purposes. While we strive
          for accuracy, occasional errors may occur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Intellectual Property
        </h2>

        <p>
          All website content, including text, logos, graphics, and quizzes,
          belongs to Puranas Quiz unless otherwise stated.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Limitation of Liability
        </h2>

        <p>
          Puranas Quiz shall not be liable for any direct or indirect damages
          resulting from the use of this website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Changes
        </h2>

        <p>
          We reserve the right to modify these Terms & Conditions at any time.
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