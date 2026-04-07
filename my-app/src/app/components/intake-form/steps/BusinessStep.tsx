import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "../intake-form.types";

export default function BusinessStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IntakeFormData>();

  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed">
        In one or two sentences, what does your business do? For example:
        &ldquo;Wellness spa with 3 locations&rdquo; or &ldquo;Basketball
        training academy.&rdquo;
      </p>

      <div>
        <label
          htmlFor="businessDescription"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your business <span className="text-red-500">*</span>
        </label>
        <textarea
          id="businessDescription"
          rows={4}
          placeholder="Describe your business in a sentence or two..."
          {...register("businessDescription")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400 resize-none"
        />
        {errors.businessDescription && (
          <p className="mt-1 text-sm text-red-500">
            {errors.businessDescription.message}
          </p>
        )}
      </div>
    </div>
  );
}
