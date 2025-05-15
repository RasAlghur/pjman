// // src/sections/ComparisonTable.tsx

// import { Check, X } from "lucide-react";

// const data = [
//   { feature: "Flies through the air", superman: true, pajeetman: false },
//   { feature: "Fixes computer viruses", superman: false, pajeetman: true },
//   { feature: "Has X-ray vision", superman: true, pajeetman: false },
//   { feature: "Can explain your WiFi issues", superman: false, pajeetman: true },
//   { feature: "Weakness to Kryptonite", superman: true, pajeetman: false },
//   { feature: "Saves the city", superman: true, pajeetman: true },
//   { feature: "Wears underwear", superman: true, pajeetman: false },
//   { feature: "Superman tech support hotline", superman: false, pajeetman: true },
//   { feature: "Can bend steel", superman: true, pajeetman: false },
//   { feature: "Can bend man of steel", superman: false, pajeetman: true },
//   { feature: "Has secret identity", superman: true, pajeetman: false },
//   { feature: "Speaks Kryptonian", superman: true, pajeetman: false },
//   { feature: "Speaks five programming languages", superman: false, pajeetman: true },
// ];

// const ComparisonTable = () => {
//   return (
//     <section className="">
//       <div id="showdown" className="py-10" />
//       <div className="max-w-5xl mx-auto pt-6 px-4 sm:px-8 lg:px-16">
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 yang drop-shadow">
//           Superman vs Pajeet Man Showdown
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-base rounded-xl shadow-2xl overflow-hidden">
//             <thead>
//               <tr className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-lg md:text-xl lg:text-2xl">
//                 <th className="py-4 px-4 border border-pink-200">Feature</th>
//                 <th className="py-4 px-4 border border-pink-200 text-center">
//                   Superman <br />
//                   <span className="text-sm text-pink-100">(Man of Steel)</span>
//                 </th>
//                 <th className="py-4 px-4 border border-pink-200 text-center">
//                   Pajeet Man <br />
//                   <span className="text-sm text-pink-100">(The Help Desk Hero)</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, idx) => (
//                 <tr
//                   key={idx}
//                   className={`${
//                     idx % 2 === 0 ? "bg-white" : "bg-yellow-50"
//                   } hover:scale-105 hover:bg-pink-100 transition-all duration-200`}
//                 >
//                   <td className="py-6 px-6 border border-pink-200 font-semibold text-pink-700 lg:text-2xl yang">
//                     {item.feature}
//                   </td>
//                   <td className="py-4 px-4 border border-pink-200 text-center text-xl">
//                     {item.superman ? <Check /> : <X />}
//                   </td>
//                   <td className="py-4 px-4 border border-pink-200 text-center text-xl">
//                     {item.pajeetman ? <Check /> : <X />}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComparisonTable;




// src/sections/ComparisonTable.tsx
import { Check, X } from "lucide-react";

const data = [
  { feature: "Flies through the air", superman: true, pajeetman: false },
  { feature: "Fixes computer viruses", superman: false, pajeetman: true },
  { feature: "Has X-ray vision", superman: true, pajeetman: false },
  { feature: "Can explain your WiFi issues", superman: false, pajeetman: true },
  { feature: "Weakness to Kryptonite", superman: true, pajeetman: false },
  { feature: "Saves the city", superman: true, pajeetman: true },
  { feature: "Wears underwear", superman: true, pajeetman: false },
  { feature: "Superman tech support hotline", superman: false, pajeetman: true },
  { feature: "Can bend steel", superman: true, pajeetman: false },
  { feature: "Can bend man of steel", superman: false, pajeetman: true },
  { feature: "Has secret identity", superman: true, pajeetman: false },
  { feature: "Speaks Kryptonian", superman: true, pajeetman: false },
  { feature: "Speaks five programming languages", superman: false, pajeetman: true },
];

const ComparisonTable = () => {
  return (
    <section className="bg-[#FFF8E1]">
      <div id="showdown" className="py-10" />
      <div className="max-w-5xl mx-auto pt-6 px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 yang drop-shadow text-[#333333]">
          Superman vs Pajeet Man Showdown
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base rounded-xl shadow-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#000080] text-white text-lg md:text-xl lg:text-2xl">
                <th className="py-4 px-4 border border-[#138808]">Feature</th>
                <th className="py-4 px-4 border border-[#138808] text-center">
                  Superman <br />
                  <span className="text-sm text-[#FFF8E1]">(Man of Steel)</span>
                </th>
                <th className="py-4 px-4 border border-[#138808] text-center">
                  Pajeet Man <br />
                  <span className="text-sm text-[#FFF8E1]">(The Help Desk Hero)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-[#FFF8E1]"
                    } hover:scale-105 hover:bg-[#FF9933]/20 transition-all duration-200`}
                >
                  <td className="py-6 px-6 border border-[#138808] font-semibold text-[#333333] lg:text-2xl yang">
                    {item.feature}
                  </td>
                  <td className="py-4 px-4 border border-[#138808] text-center text-xl">
                    {item.superman ? <Check className="text-[#138808] mx-auto" /> : <X className="text-[#FF9933] mx-auto" />}
                  </td>
                  <td className="py-4 px-4 border border-[#138808] text-center text-xl">
                    {item.pajeetman ? <Check className="text-[#138808] mx-auto" /> : <X className="text-[#FF9933] mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;