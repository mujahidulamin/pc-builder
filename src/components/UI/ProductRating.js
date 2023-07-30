// import { Icon } from "@iconify/react";

// const ProductRating = ({ rating }) => {

//   const MAX_STARS = 5;
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center justify-center py-2 bg-gray-200 dark:bg-gray-700">
//       {Array.from({ length: fullStars }, (_, index) => (
//         <Icon
//           icon="iconamoon:star-fill"
//           key={`star-${index}`}
//           className="w-6 h-6 text-yellow-500"
//         />
//         // <Icon
//         //   icon={starFilled}

//         // />
//       ))}
//       {hasHalfStar && (
//         <Icon
//           icon="tabler:star-half-filled"
//           className="w-6 h-6 text-yellow-500"
//         />
//         // <Icon icon={starHalf} />
//       )}
//       {Array.from({ length: emptyStars }, (_, index) => (
//         // <Icon
//         //   icon={starOutline}

//         // />
//         <Icon
//           icon="iconamoon:star-light"
//           key={`empty-star-${index}`}
//           className="w-6 h-6 text-gray-300"
//         />
//       ))}
//       <p className="ml-2">({rating} out of 5)</p>
//     </div>
//   );
// };

// export default ProductRating;