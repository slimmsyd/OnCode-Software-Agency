import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "../intake-form.types";
import { referralSourceOptions } from "../intake-form.types";

export default function AttributionStep() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<IntakeFormData>();

  const selectedSource = watch("referralSource");

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          How did you hear about OnCode?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {referralSourceOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedSource === option.value
                  ? "border-black bg-black/5 ring-1 ring-black"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                value={option.value}
                {...register("referralSource")}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  selectedSource === option.value
                    ? "border-black"
                    : "border-gray-400"
                }`}
              >
                {selectedSource === option.value && (
                  <div className="w-2 h-2 rounded-full bg-black" />
                )}
              </div>
              <span className="text-sm text-black">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.referralSource && (
          <p className="mt-2 text-sm text-red-500">
            {errors.referralSource.message}
          </p>
        )}
      </div>

      {selectedSource === "referral" && (
        <div>
          <label
            htmlFor="referralName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Who referred you?{" "}
            <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <input
            id="referralName"
            type="text"
            placeholder="Their name"
            {...register("referralName")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
          />
        </div>
      )}

      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="text-sm font-medium text-black mb-2">
          What happens next?
        </h4>
        <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
          <li>We review your submission (within 24 hours)</li>
          <li>If it&apos;s a good fit, we send you a link to book a call</li>
          <li>On the call we scope the project and discuss next steps</li>
        </ol>
      </div>
    </div>
  );
}
