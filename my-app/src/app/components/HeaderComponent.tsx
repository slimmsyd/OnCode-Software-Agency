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
      fetch("https://godofai.app.n8n.cloud/webhook-test/228d6cec-48b3-4c6d-9628-f1951ae4fcc3", {
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
    <section className="site-inner-container h-[100vh] md:h-[100vh]  ">
      <Navigation
        scrollToSection={scrollToSection}
        refSection1={refSection1}
        refSection2={refSection2}
        refSection4={refSection4}
        refSection3={refSection3}
      />

      <div className="flex flex-col h-[80%] items-center justify-center mt-[0px] md:mt-[90px]">
        <div className="flex flex-col gap-[5px] items-center text-center w-[100%] text-black">
          <p className="font-light text-[14px]  text-black/50 ">
            Generative AI Software Development
          </p>

          <h1 className="font-medium text-center header-h1 tracking-[-1px]">
            BUILD YOUR MVP IN WEEKS NOT MONTHS
          </h1>

          <p className="font-light  text-black text-center !text-[16px] max-w-[70%] md:max-w-[100%] ">
            Turning ideas into reality, fast. Let us take your idea from concept
            to a market-ready MVP in just a few weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-[20px] mt-[20px] w-full sm:w-auto px-4 sm:px-0">
            <Link
              target="_blank"
              href="https://calendly.com/0ncode-info/30min"
              // onClick={() => scrollToSection("about")}
              className="bg-black text-white text-[14px] flex flex-row gap-[10px] items-center px-[10px] py-[8px] rounded-[8px] hover:bg-gray-100 transition-colors duration-300 w-[200px] m-auto text-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Book A Call
            </Link>

            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[14px] flex flex-row gap-[10px] items-center px-[20px] py-[10px] rounded-[8px] hover:bg-gray-100 transition-colors duration-300 border border-[#CDCDCD] w-[200px] m-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-file-text w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              Validate Your Idea
            </button> 


          </div>

          <div className="flex flex-col gap-[10px] mt-[20px] w-[95%] md:w-[60%]">
            <p className="font-light text-[16px]  text-black mt-[0px] md:mt-[15px] text-center ">
              We at Oncode, help you build your MVP(software application) with
              the execution of 4 devs but with the price of 1 , we build your
              MVP in weeks not months using effecive AI agentic automation
              workflows.
              <br />
              <br />
              As tech updates, so do we.
            </p>
          </div>

          <div className=" mobileBanner items-center justify-center  flex flex-row gap-[50px] mt-[20px] md:mt-[50px] w-[100%] mb-[10px] md:mb-[0px] ">
            <div className="flex items-center w-[100%] lg:w-[320px] justify-center gap-[10px]">
              <h2 className="md:text-[28px] text-[18px]">Build</h2>
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex items-center w-[100%] lg:w-[320px] justify-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
              <h2 className="md:text-[28px] text-[18px]">Innovate</h2>
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
            </div>

            <div className="flex items-center w-[100%] lg:w-[320px] justify-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center">
                <div className="w-[5px] h-[5px]  rounded-full bg-black"></div>
              </div>
              <h2 className="md:text-[28px] text-[18px]">Educare</h2>
            </div>
          </div>
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
