// // src/sections/About.tsx

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import kekImg from "../assets/wp-4.png";

// gsap.registerPlugin(ScrollTrigger);

// export const About = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const textRef = useRef<HTMLDivElement | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);

//   useLayoutEffect(() => {
//     if (!sectionRef.current || !textRef.current || !imageRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%", // when top of section hits 80% of viewport
//             once: true, // run only once
//           },
//           defaults: { ease: "power3.out", duration: 1 },
//         })
//         .from(textRef.current, { scale: 0, opacity: 0 })
//         .from(imageRef.current, { scale: 0, opacity: 0 }, "<"); // "<" = start at same time
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="bg-white py-16 px-4 md:px-8 lg:px-16"
//     >
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div ref={textRef}>
//           <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-black mb-6 yang">
//             Who is <span className="text-black">Pajeet man</span> ?
//           </h2>
//           <p className="mb-6 text-lg lg:text-[1.5rem] leading-relaxed font-semibold">
//             When a weakened Superman crashes near his apartment building during a Kryptonite meteor shower, 
//             only Rajesh "Pajeetman" Sharma is brave enough to rush to his aid. With quick thinking, 
//             he uses his mother's special turmeric and ginger home remedy to revive the Man of Steel.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="flex flex-col justify-center items-center">
//           <img
//             ref={imageRef}
//             src={kekImg}
//             alt="El Risitas cheering"
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };



// src/sections/About.tsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kekImg from "../assets/wp-4.png";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // when top of section hits 80% of viewport
            once: true, // run only once
          },
          defaults: { ease: "power3.out", duration: 1 },
        })
        .from(textRef.current, { scale: 0, opacity: 0 })
        .from(imageRef.current, { scale: 0, opacity: 0 }, "<"); // "<" = start at same time
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#FFF8E1] py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-[#333333] mb-6 yang">
            Who is <span className="text-[#FF9933]">Pajeet man</span> ?
          </h2>
          <p className="mb-6 text-lg lg:text-[1.5rem] leading-relaxed font-semibold text-[#333333]">
            Pajeetman is an ordinary IT professional from Bangalore who becomes an extraordinary
            hero when he encounters Superman in an unexpected moment of crisis.
          </p>
          <p className="mb-6 text-lg lg:text-[1.5rem] leading-relaxed font-semibold text-[#333333]">
            When a weakened Superman crashes near his apartment building during a Kryptonite meteor shower,
            only Rajesh "Pajeetman" Sharma is brave enough to rush to his aid. With quick thinking,
            he uses his mother's special turmeric and ginger home remedy to revive the Man of Steel.
          </p>
        </div>

        {/* Image */}
        <div className="flex flex-col justify-center items-center">
          <img
            ref={imageRef}
            src={kekImg}
            alt="El Risitas cheering"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};