import Link from "next/link";
import Navigation from "./Navigation";
import { RefObject, useState } from "react";

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
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Check if it's a US number without country code
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  
  // If it already has country code
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending email to:", email);

    
    // Format the phone number
    const formattedPhone = formatPhoneNumber(phone);
    
    // Validate phone number
    if (!isValidPhoneNumber(formattedPhone)) {
      alert('Please enter a valid US phone number (10 digits)');
      return;
    }



    try {
      // Send form submission
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          phone: formattedPhone,
          company, 
          idea 
        }),
      });

      // Send admin notification
      const adminEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "ssanderss444@gmail.com",
          subject: "New Form Submission on Oncode",
          content: `
            Email: ${email}
            Phone: ${formattedPhone}
            Company: ${company}
            Idea: ${idea}
          `,
          isClientEmail: false
        }),
      });
      
      // Send client confirmation
      const clientEmailResponse = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: "Thank you for your submission",
          content: `
.`,  // The content will be set in the route
          isClientEmail: true
        }),
      });
      
      if (adminEmailResponse.ok && clientEmailResponse.ok) {
        // alert(data.message);
        setEmail('');
        setPhone('');
        setCompany('');
        setIdea('');
        setShowPopup(false);
        setShowSuccessPopup(true);
        // Auto-hide success message after 3 seconds
        setTimeout(() => setShowSuccessPopup(false), 3000);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [idea, setIdea] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    // Format for display as user types
    if (value.length > 0) {
      if (value.length <= 3) {
        value = `(${value}`;
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length <= 10) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}) ${value.slice(6)}`;
      } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}) ${value.slice(6, 10)}) ${value.slice(10)}`;
      }
    }
    
    setPhone(value);
  };

  return (
    <section className="site-inner-container h-[120vh] md:h-[80vh]  ">
      <Navigation
        scrollToSection={scrollToSection}
        refSection1={refSection1}
        refSection2={refSection2}
        refSection4={refSection4}
        refSection3={refSection3}
      />

      <div className="flex flex-col h-[80%] items-center justify-center mt-[0px] md:mt-[150px]">
        <div className="flex flex-col gap-[5px] items-center text-center w-[100%] text-white">
          <p className="font-light text-[14px]  text-white/50 ">
            Generative AI Software Development
          </p>

          <h1 className="font-medium text-center header-h1 tracking-[-1px]">
            BUILD YOUR MVP IN WEEKS NOT MONTHS
          </h1>

          <p className="font-light  text-white text-center !text-[16px] max-w-[70%] md:max-w-[100%] ">
            Turning ideas into reality, fast. Let us take your idea from concept
            to a market-ready MVP in just a few weeks.
          </p>

          <div className="flex flex-row gap-[20px] mt-[20px]">
            <Link
              href="https://calendly.com/0ncode-info/30min"
              // onClick={() => scrollToSection("about")}
              className="bg-white text-black flex flex-row gap-[10px] items-center px-[20px] py-[10px] rounded-[2px] hover:bg-gray-100 transition-colors duration-300"
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
              className="bg-white  text-black flex flex-row gap-[10px] items-center px-[20px] py-[10px] rounded-[2px] hover:bg-gray-100 transition-colors duration-300"
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
            <p className="font-light text-[16px]  text-white mt-[0px] md:mt-[15px] text-center ">
              we become your strategic partner. While you save equity by not
              bringing on a co-founder CTO, you gain a team that is entirely
              invested in the success of your product. We are as dedicated to
              realizing your vision as any co-founder would be, providing you
              with expert guidance, innovative solutions, and unwavering support
              throughout your journey.
            </p>
          </div>

          <div className=" mobileBanner  flex flex-row gap-[50px] mt-[20px] md:mt-[50px] w-[100%] mb-[10px] md:mb-[0px] ">
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
              <h3 className="text-xl font-semibold text-black">Validate Your Idea</h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={handlePhoneChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Tell us about your idea"
                required
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={4}
                className="border p-2 rounded resize-none"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-start pt-[10px] justify-center z-[100] left-0 ">
          <div className="bg-white rounded-lg p-[0.5rem] shadow-lg flex items-center gap-3 animate-fade-in">
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
            <p className="text-gray-800 font-medium">Email Submitted! Thank you</p>
          </div>
        </div>
      )}
    </section>
  );
}
