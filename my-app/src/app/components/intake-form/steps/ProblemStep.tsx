import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "../intake-form.types";
import { existingSystemOptions } from "../intake-form.types";

export default function ProblemStep() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<IntakeFormData>();

  const selectedSystem = watch("hasExistingSystem");

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="problemDescription"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          What&apos;s the manual process or business problem you&apos;re trying
          to fix? <span className="text-red-500">*</span>
        </label>
        <p className="text-gray-500 text-xs mb-2">
          Think in business terms, not features. What slows you down,
          costs you money, or frustrates your team?
        </p>
        <textarea
          id="problemDescription"
          rows={4}
          placeholder="e.g. We manually send invoices and chase payments, which takes 10+ hours per week..."
          {...register("problemDescription")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400 resize-none"
        />
        {errors.problemDescription && (
          <p className="mt-1 text-sm text-red-500">
            {errors.problemDescription.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Do you have an existing website or system?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="grid gap-3">
          {existingSystemOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedSystem === option.value
                  ? "border-black bg-black/5 ring-1 ring-black"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                value={option.value}
                {...register("hasExistingSystem")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  selectedSystem === option.value
                    ? "border-black"
                    : "border-gray-400"
                }`}
              >
                {selectedSystem === option.value && (
                  <div className="w-2.5 h-2.5 rounded-full bg-black" />
                )}
              </div>
              <span className="text-sm text-black">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.hasExistingSystem && (
          <p className="mt-2 text-sm text-red-500">
            {errors.hasExistingSystem.message}
          </p>
        )}

        {(selectedSystem === "yes" || selectedSystem === "yes_broken") && (
          <div className="mt-4">
            <label
              htmlFor="existingSystemUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Drop the link{" "}
              <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <input
              id="existingSystemUrl"
              type="url"
              placeholder="https://your-current-site.com"
              {...register("existingSystemUrl")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
            />
          </div>
        )}
      </div>
    </div>
  );
}
