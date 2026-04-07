import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "../intake-form.types";
import {
  budgetOptions,
  timelineOptions,
  userCountOptions,
} from "../intake-form.types";

interface RadioGroupProps {
  name: keyof IntakeFormData;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
}

function RadioGroup({ name, label, options }: RadioGroupProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<IntakeFormData>();

  const selected = watch(name);
  const error = errors[name];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
              selected === option.value
                ? "border-black bg-black/5 ring-1 ring-black"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                selected === option.value
                  ? "border-black"
                  : "border-gray-400"
              }`}
            >
              {selected === option.value && (
                <div className="w-2 h-2 rounded-full bg-black" />
              )}
            </div>
            <span className="text-sm text-black">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error.message as string}
        </p>
      )}
    </div>
  );
}

export default function ScopeStep() {
  return (
    <div className="space-y-6">
      <RadioGroup
        name="budgetRange"
        label="What's your budget range?"
        options={budgetOptions}
      />
      <RadioGroup
        name="timeline"
        label="When do you need this live?"
        options={timelineOptions}
      />
      <RadioGroup
        name="approximateUsers"
        label="How many people will use this?"
        options={userCountOptions}
      />
    </div>
  );
}
