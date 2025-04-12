// import React from "react";

// export default function SelectInput ({
//   label,
//   name,
//   register,
//   className = "sm:col-span-2",
//   options = [],
//   multiple=false
// }) {
//   return (
//     <div className={className}>
//       <label
//         htmlFor={name}
//         className="block text-sm font-medium leading-6
//          text-gray-900 dark:text-slate-50 mb-2" >
//         {label}
//       </label>
//       <div className="mt-2">
//         <select  {...register(`${name}`)}
//           name={name}
//           id={name}
//           multiple={multiple}
//           className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"  >
//           {options.map((option, i) => {
//             return (
//               <option key={i} value={option.id}>
//                 {option.title}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     </div>
//   );
// }







import React from "react";
import PropTypes from "prop-types";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}) {
  // Ensure options is always an array
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          name={name}
          id={name}
          multiple={multiple}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {safeOptions.length > 0 ? (
            safeOptions.map((option, i) => (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            ))
          ) : (
            <option disabled>No options available</option>
          )}
        </select>
      </div>
    </div>
  );
}

// PropTypes for validation
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  multiple: PropTypes.bool,
};
