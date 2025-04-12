"use client";
export default function TextInput({
  lable,
    name,
    register,
    errors,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2",
    defaultValue=""
}) {
  return (
    <div className={className}>
        <label 
        htmlFor={name}
        className="block text-sm font-medium leading-6
        text-gray-900 dark:text-slate-50 mb-2"
        >
            {lable}
        </label>
        <div className="mt-2">
            <input
            {...register(`${name}`, {required: isRequired})}
             type={type}
             name={name}
             id={name}
             defaultValue={defaultValue}
             autoComplete={name}
             className="block w-full rounded-md border-0 py-3
             text-gray-900 shadow-sm ring-1 ring-inset
             ring-slate-500 placeholder:text-gray-400 focus:ring-
             focus:ring-inset focus:ring-purple-700 dark:focus:ring-slate-500 sm:text-sm
             sm:leading-6 dark:bg-transparent dark:text-slate-100"
             placeholder={`ادخل ${lable}`}
              />
              {errors[`${name}`] && (
                <span className="text-sm text-red-600">{lable} is  required</span>
              )}
        </div>

    </div>
  )
}
