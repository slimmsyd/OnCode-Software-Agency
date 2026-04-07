interface SuccessScreenProps {
  onClose?: () => void;
}

export default function SuccessScreen({ onClose }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-semibold text-black mb-3">
        Thank you for reaching out
      </h3>

      <p className="text-gray-600 max-w-sm mb-6 leading-relaxed">
        We&apos;ll review your submission and get back to you within 24 hours. If
        your project is a good fit, we&apos;ll send you a link to book a
        discovery call.
      </p>

      <div className="bg-gray-50 rounded-lg p-5 w-full max-w-sm border border-gray-200">
        <h4 className="text-sm font-medium text-black mb-3">
          While you wait:
        </h4>
        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li className="flex items-start gap-2">
            <span className="text-black mt-0.5">1.</span>
            <span>Check your inbox for a confirmation email</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black mt-0.5">2.</span>
            <span>Think about any examples or inspiration for your project</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-black mt-0.5">3.</span>
            <span>
              Gather any existing assets (logos, brand guidelines, content)
            </span>
          </li>
        </ul>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 hover:text-black transition-colors"
        >
          Close this window
        </button>
      )}
    </div>
  );
}
