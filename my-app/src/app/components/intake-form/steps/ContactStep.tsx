import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "../intake-form.types";

export default function ContactStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IntakeFormData>();

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          {...register("name")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="jane@company.com"
          {...register("email")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-gray-400 text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          {...register("phone")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
          Business name <span className="text-red-500">*</span>
        </label>
        <input
          id="businessName"
          type="text"
          placeholder="Acme Corp"
          {...register("businessName")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
        />
        {errors.businessName && (
          <p className="mt-1 text-sm text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
          Website <span className="text-gray-400 text-xs">(optional)</span>
        </label>
        <input
          id="website"
          type="url"
          placeholder="https://example.com"
          {...register("website")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-colors text-black placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
