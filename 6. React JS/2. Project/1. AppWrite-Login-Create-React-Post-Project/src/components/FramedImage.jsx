// import React from "react";

// export default function FramedImage({ src, alt, className = "" }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className={`w-full aspect-video object-cover ${className}`}
//     />
//   );
// }

import React from "react";

export default function FramedImage({ src, alt, className = "" }) {
  return (
    <div className={`relative w-full aspect-video overflow-hidden bg-gray-200 ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
      />
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-contain"
      />
    </div>
  );
}