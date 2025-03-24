// import React from "react";
// import { Avatar } from "@mui/material";
// import dotIcon from "@/Assets/Icon/dot-icon.svg";
// import Image from "next/image";
// import matImage from "@/Assets/Images/mat-img.svg";
// import sweatShirtImage from "@/Assets/Images/sweatshirt.svg";
// import foamRollerImage from "@/Assets/Images/foam-roller.svg";
// import { IconButton } from "@mui/material";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// const Shop = () => {
//   const products = [
//     {
//       name: "Cushion Mat",
//       price: "Rs 2499/-",
//       image: matImage,
//     },
//     {
//       title: "SHOP ALL",
//       content: "Rs 2499/-",
//     },
//     {
//       name: "Oversized Sweatshirt",
//       price: "Rs 1899/-",
//       image: sweatShirtImage,
//     },
//     {
//       name: "Foam Roller",
//       price: "Rs 2099/-",
//       image: foamRollerImage,
//     },
//   ];
//   return (
//     <div className="bg-[linear-gradient(to_top,_#FAFAFA_80%,_#1B1B1B_95%)] items-center px-5 pb-60">
//       {/* <Title title="THE KNOX EDGE" iconSrc={dotIcon}/> */}
//       <div className="flex justify-center flex-col items-center pt-36">
//         <div className="flex items-center w-[260px] justify-center gap-2.5 border border-gray-600 rounded-3xl px-10 py-2.5">
//           <Avatar
//             alt="icon"
//             src={dotIcon}
//             sx={{
//               width: 8,
//               height: 8,
//               color: "black",
//               backgroundColor: "black",
//             }}
//           />
//           <h1 className="text-base font-normal text-[#292929]">KNOX SHOP</h1>
//         </div>
//         <h1 className="w-[819px] text-[#292929] text-5xl text-center font-normal mt-6 leading-14">
//           Exclusive releases. Shop our merch before it sells out!
//         </h1>
//       </div>

//       <div className="grid grid-cols-4 overflow-x-hidden space-x-6 mt-20">
//         {products.map((product, index) => (
//           <div key={index} className="rounded-lg">
//             {index === 1 ? (
//               <div className="flex flex-col justify-end h-[550px]">
//                 <div className="flex justify-between items-center">
//                   <div className="flex flex-col gap-2">
//                     <p className="w-[80px] text-[#292929] text-base font-medium border-b-2">
//                       SHOP ALL
//                     </p>
//                     <p className="text-[#292929] text-[26px] font-medium leading-8">
//                       {" "}
//                       Fitness Bundles
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-1.5">
//                     <IconButton
//                       sx={{
//                         backgroundColor: "#D9D9D9",
//                         borderTopRightRadius: "0px",
//                         borderBottomRightRadius: "0px",
//                       }}
//                     >
//                       <ArrowLeftIcon className="text-black" />
//                     </IconButton>
//                     <IconButton
//                       sx={{
//                         backgroundColor: "#D9D9D9",
//                         borderBottomLeftRadius: "0px",
//                         borderTopLeftRadius: "0px",
//                       }}
//                     >
//                       <ArrowRightIcon className="text-black" />
//                     </IconButton>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name || "Product Image"}
//                   objectFit="cover"
//                   className="w-full h-[550px] rounded-2xl"
//                 />
//               </div>
//             )}
//             <div className="flex justify-between items-center px-4 mt-3">
//               <p className=" text-[#292929] text-base font-medium">
//                 {product.name}
//               </p>
//               <p className="text-[#292929] text-base font-medium">
//                 {product.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

"use client";
import React, { useEffect, useState } from "react";
import { Avatar, IconButton, useMediaQuery } from "@mui/material";
import Link from "next/link";
import dotIcon from "@/Assets/Icon/dot-icon.svg";
import Image from "next/image";
import matImage from "@/Assets/Images/mat-img.svg";
import sweatShirtImage from "@/Assets/Images/sweatshirt.svg";
import foamRollerImage from "@/Assets/Images/foam-roller.svg";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Shop = () => {
  const products = [
    {
      name: "Cushion Mat",
      price: "Rs 2499/-",
      image: matImage,
    },
    {
      title: "SHOP ALL",
      content: "Rs 2499/-",
    },
    {
      name: "Oversized Sweatshirt",
      price: "Rs 1899/-",
      image: sweatShirtImage,
    },
    {
      name: "Foam Roller",
      price: "Rs 2099/-",
      image: foamRollerImage,
    },
  ];
  const isTabletOrMobile = useMediaQuery("(max-width: 1024px)"); // Adjust breakpoint as needed
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (isTabletOrMobile) {
      setFilteredProducts(products.filter((_, index) => index !== 1));
    } else {
      setFilteredProducts(products);
    }
  }, [isTabletOrMobile]);

  return (
    <div className="bg-[linear-gradient(to_top,_#FAFAFA_80%,_#1B1B1B_95%)] px-4 sm:px-8 pb-20 md:pb-40 pt-20">
      <div className="flex flex-col items-center pt-20 sm:pt-36">
        <div className="flex items-center w-auto sm:w-[260px] justify-center gap-2.5 border border-gray-600 rounded-3xl px-6 sm:px-10 py-2.5 bebas">
          <FiberManualRecordIcon
            sx={{ width: 10, height: 10 }}
            className="text-black"
          />
          <h1 className="text-sm sm:text-base font-normal text-[#292929]">
            KNOX SHOP
          </h1>
        </div>
        <h1 className="w-full max-w-[819px] text-[#292929] text-3xl sm:text-5xl md:text-center font-normal mt-4 sm:mt-6 leading-snug mono">
          Exclusive releases. Shop our merch before it sells out!
        </h1>
      </div>

      <div className="flex justify-between mt-5 lg:hidden">
        <h3 className="text-[20px] font-medium text-[#292929]">
          Fitness Bundles
        </h3>
        <div className="flex items-center gap-1.5">
          <IconButton
            sx={{
              backgroundColor: "#D9D9D9",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          >
            <ArrowLeftIcon className="text-black" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#D9D9D9",
              borderBottomLeftRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          >
            <ArrowRightIcon className="text-black" />
          </IconButton>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-6 mt-10 sm:mt-20 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 sm:w-auto w-[80%] rounded-lg"
          >
            {product.title === "SHOP ALL" ? (
              <div className="md:flex flex-col justify-end h-[380px] hidden">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="w-20 text-[#292929] text-sm sm:text-base font-medium border-b-2 bebas">
                      SHOP ALL
                    </p>
                    <p className="text-[#292929] text-2xl font-medium leading-8">
                      Fitness Bundles
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconButton
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                      }}
                    >
                      <ArrowLeftIcon className="text-black" />
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderBottomLeftRadius: "0px",
                        borderTopLeftRadius: "0px",
                      }}
                    >
                      <ArrowRightIcon className="text-black" />
                    </IconButton>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name || "Product Image"}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            )}
            <div className="flex justify-around items-baseline gap-20 mt-3">
              <div>
                <p className="text-[#292929] text-sm sm:text-base font-medium figtree">
                  {product.name}
                </p>
                {index === 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-black"></div>
                    <div className="w-4 h-4 bg-[#D9D9D9]"></div>
                    <div className="w-4 h-4 bg-[#CBB2B2]"></div>
                  </div>
                )}
              </div>
              <p className="text-[#292929] text-sm sm:text-base font-medium">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/shop"
          className="text-[#292929] text-base font-medium underline"
        >
          SHOP ALL
        </Link>
      </div>
    </div>
  );
};

export default Shop;
