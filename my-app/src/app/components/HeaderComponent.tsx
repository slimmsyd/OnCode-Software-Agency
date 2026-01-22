import Link from "next/link";
import Navigation from "./Navigation";
import { RefObject, useState } from "react";
import styles from "../styles/response.module.css";

interface Props {
  refSection1: RefObject<HTMLDivElement>;
  refSection2: RefObject<HTMLDivElement>;
  refSection3: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
  priceRef: RefObject<HTMLDivElement>;
  scrollToSection: (sectionId: string) => void;
}

const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check if it's a US number without country code
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }

  // If it already has country code
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `+${cleaned}`;
  }

  return cleaned;
};

const isValidPhoneNumber = (phoneNumber: string): boolean => {
  // Basic phone validation regex
  const phoneRegex = /^\+1\d{10}$/;
  return phoneRegex.test(phoneNumber);
};

export default function HeaderComponent({
  refSection1,
  refSection2,
  refSection3,
  refSection4,
  priceRef,
  scrollToSection,
}: Props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent submission if already loading
    if (isLoading) return;

    console.log("Sending idea validation request for:", email);
    setIsLoading(true); // Start loading

    // Format the phone number
    const formattedPhone = formatPhoneNumber(phone);

    // Validate phone number
    if (!isValidPhoneNumber(formattedPhone)) {
      alert("Please enter a valid US phone number (10 digits)");
      setIsLoading(false); // Stop loading on validation error
      return;
    }

    try {
      // Send to idea validation endpoint
      const validationResponse = await fetch("/api/validateIdea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone: formattedPhone,
          company,
          idea,
        }),
      });

      if (!validationResponse.ok) {
        // Try to get error message from response
        let errorMsg = 'Failed to validate idea';
        try {
          const errorData = await validationResponse.json();
          errorMsg = errorData.error || errorMsg;
        } catch (jsonError) {
          // Ignore if response is not JSON
        }
        throw new Error(errorMsg);
      }

      // Extract the AI response from the response body
      const responseData = await validationResponse.json();
      const response = responseData.aiResponse;
      setAiResponse(response);

      console.log("AI Response:", response);

      // Send form submission to webhook with AI response (Run in background, don't wait)
      fetch("https://godofai.app.n8n.cloud/webhook/228d6cec-48b3-4c6d-9628-f1951ae4fcc3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone: formattedPhone,
          company,
          idea,
          aiResponse: response,
        }),
      }).catch(webhookError => {
        // Log webhook error but don't block UI
        console.error("Webhook submission failed:", webhookError);
      });

      // Clear form and show success message
      setEmail("");
      setPhone("");
      setCompany("");
      setIdea("");
      setShowPopup(false);
      setShowSuccessPopup(true);
      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
        setAiResponse("");
      }, 10000);
    } catch (error: any) {
      console.error("Failed to submit form:", error);
      alert(`Something went wrong: ${error.message || 'Please try again.'}`);
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [idea, setIdea] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    // Format for display as user types
    if (value.length > 0) {
      if (value.length <= 3) {
        value = `(${value}`;
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length <= 10) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}) ${value.slice(
          6
        )}`;
      } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}) ${value.slice(
          6,
          10
        )}) ${value.slice(10)}`;
      }
    }

    setPhone(value);
  };


  return (
    <section className="min-h-screen md:min-h-[70vh] relative overflow-hidden flex flex-col">
      <Navigation
        scrollToSection={scrollToSection}
        refSection1={refSection1}
        refSection2={refSection2}
        refSection4={refSection4}
        refSection3={refSection3}
      />

      {/* Grid Backdrop */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)',
        }}
      />

      {/* Animated Glow Overlay */}
      <style jsx>{`
        @keyframes gridGlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              135deg,
              transparent 0%,
              transparent 45%,
              rgba(100, 150, 255, 0.15) 48%,
              rgba(100, 150, 255, 0.25) 50%,
              rgba(100, 150, 255, 0.15) 52%,
              transparent 55%,
              transparent 100%
            )
          `,
          backgroundSize: '200% 200%',
          animation: 'gridGlow 8s ease-in-out infinite',
          mixBlendMode: 'overlay',
          maskImage: 'radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 120% 120% at 70% 30%, black 0%, transparent 85%)',
        }}
      />


      <div className="flex flex-col flex-1 items-center justify-center py-12 md:py-20">
        <div className="flex flex-col items-center text-center w-[100%] text-black max-w-5xl mx-auto px-4">
          {/* Eyebrow */}
          <p className="font-light text-[14px] text-black/50 uppercase tracking-wide">
            Generative AI Software Development
          </p>

          {/* Main Heading */}
          <h1 className="font-medium text-center uppercase header-h1 tracking-[-1px] mt-6 mb-6">
            Custom Software. Automation. AI That Works For Your Business.
          </h1>

          {/* Description */}
          <p className="font-light max-w-[85%] text-black text-center text-[18px] leading-relaxed md:max-w-[700px] mt-6">
            OnCode builds automation workflows, AI tools, and full-stack applications tailored to the way your company actually works. Whether you're launching an MVP or replacing manual processes, we deliver custom systems in weeks - not months.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-[20px] mt-8 w-full sm:w-auto px-4 sm:px-0">
            <Link
              target="_blank"
              href="https://cal.com/oncode-software-kuxhkk/30min"
              className="bg-black text-white text-[15px] flex flex-row gap-[10px] items-center px-6 py-3 rounded-[8px] hover:bg-gray-800 transition-colors duration-300 w-[200px] m-auto text-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Book A Call
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-light text-[16px] text-black/70 mt-12 text-center italic">
            From idea to implementation - we keep you OnCode.
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="fixed  inset-0 text-black bg-black/50 flex items-center justify-center z-100">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative z-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-black">
                Validate Your Idea
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-black"
            >
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
                disabled={isLoading}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={handlePhoneChange}
                className="border p-2 rounded"
                disabled={isLoading}
              />
              <input
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border p-2 rounded"
                disabled={isLoading}
              />
              <textarea
                placeholder="Tell us about your idea"
                required
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={4}
                className="border p-2 rounded resize-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`bg-black text-white py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-center transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-start pt-[10px] justify-center z-[100] left-0">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl w-full mx-4 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">
                Thank you for sharing your vision!
              </h3>
            </div>
            <div
              className={`prose max-w-none ${styles['response-container']}`}
              dangerouslySetInnerHTML={{ __html: aiResponse }}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setShowSuccessPopup(false);
                  setAiResponse("");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
