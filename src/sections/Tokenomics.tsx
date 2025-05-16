// // src/sections/Tokenomics.tsx

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Copy from "../components/Copy";

// gsap.registerPlugin(ScrollTrigger);

// const TokenomicsFunVariant = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const ringRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!sectionRef.current || !ringRef.current) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });

//       tl.fromTo(
//         sectionRef.current,
//         { opacity: 0, y: 60 },
//         { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
//       ).fromTo(
//         ".stat-block",
//         { scale: 0.8, opacity: 0 },
//         { scale: 1, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" },
//         "-=0.5"
//       );

//       // Spin ring forever (not inside timeline)
//       gsap.to(ringRef.current, {
//         rotate: 360,
//         repeat: -1,
//         ease: "linear",
//         duration: 10,
//       });
//     }, sectionRef);

//     return () => ctx.revert(); // cleanup
//   }, []);

//   return (
//     <section ref={sectionRef} className="">
//       <div id="tokenomics" className="py-10" />
//       <div className="max-w-5xl mx-auto text-center py-10 px-6 font-comic">
//         <h2 className="text-5xl font-extrabold mb-14 drop-shadow yang">
//           $PJMAN Tokenomics
//         </h2>

//         <div className="grid sm:grid-cols-2 gap-10 items-center">
//           {/* Left: Fun Stats */}
//           <div className="space-y-6 text-left">
//             <div className="stat-block bg-white border-2 border-black border-b-4 rounded-2xl px-[48px] py-[10px] ">
//               <p className="text-2xl mb-2 yang">Token Name:</p>
//               <p className="text-xl font-bold">Pajeet Man</p>
//             </div>
//             <div className="stat-block bg-white  border-2 border-black border-b-4 rounded-2xl px-[48px] py-[10px]">
//               <p className="text-2xl mb-2 yang">Ticker:</p>
//               <p className="text-xl font-bold">PJMAN</p>
//             </div>

//             <Copy />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TokenomicsFunVariant;



// src/sections/Tokenomics.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../components/Copy";

gsap.registerPlugin(ScrollTrigger);

const TokenomicsFunVariant = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const AnimatedNumber = ({ value }: { value: number }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.2,
        ease: "power1.out",
        onUpdate: () => setDisplay(Math.floor(obj.val)),
      });
    }, [value]);

    return <span>{display.toLocaleString()}</span>;
  };

  useEffect(() => {
    if (!sectionRef.current || !ringRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      ).fromTo(
        ".stat-block",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Spin ring forever (not inside timeline)
      gsap.to(ringRef.current, {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 10,
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFF8E1]">
      <div id="tokenomics" className="py-10" />
      <div className="max-w-5xl mx-auto text-center py-10 px-6 font-comic">
        <h2 className="text-5xl font-extrabold mb-14 drop-shadow yang text-[#333333]">
          $PJMAN Tokenomics
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 items-center">
          {/* Left: Fun Stats */}
          <div className="space-y-6 text-left">
            <div className="stat-block bg-white border-2 border-[#000080] border-b-4 rounded-2xl px-[48px] py-[10px]">
              <p className="text-2xl mb-2 yang text-[#FF9933]">Token Name:</p>
              <p className="text-xl font-bold text-[#333333]">Pajeet Man</p>
            </div>
            <div className="stat-block bg-white border-2 border-[#000080] border-b-4 rounded-2xl px-[48px] py-[10px]">
              <p className="text-2xl mb-2 yang text-[#FF9933]">Ticker:</p>
              <p className="text-xl font-bold text-[#333333]">PJMAN</p>
            </div>
            <div className="stat-block bg-white  border-2 border-black border-b-4 rounded-2xl px-[48px] py-[10px]">
              <p className="text-2xl mb-2 yang">Total Supply:</p>
              <p className="text-xl font-bold">
                <AnimatedNumber value={1000000000} /> PJMAN
              </p>
            </div>
            <Copy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsFunVariant;