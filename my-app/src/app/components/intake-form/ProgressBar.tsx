import { STEP_COUNT, stepTitles } from "./intake-form.types";

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-3">
        {Array.from({ length: STEP_COUNT }).map((_, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                i < currentStep
                  ? "bg-black text-white"
                  : i === currentStep
                  ? "bg-black text-white ring-4 ring-black/10"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {i < currentStep ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {i < STEP_COUNT - 1 && (
              <div className="flex-1 h-[2px] mx-2">
                <div
                  className={`h-full transition-all duration-500 ${
                    i < currentStep ? "bg-black" : "bg-gray-200"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        Step {currentStep + 1} of {STEP_COUNT} -{" "}
        {stepTitles[currentStep]}
      </p>
    </div>
  );
}
