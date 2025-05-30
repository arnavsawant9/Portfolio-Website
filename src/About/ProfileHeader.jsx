// import React from "react";
// import java from "../assets/java_919854.png"
// import js from "../assets/js.png"
// import react from "../assets/react.png"
// import python from "../assets/python.png"
// import cpp from "../assets/c++.png"
// import css from "../assets/css.png"
// import django from "../assets/django.png"
// import html from "../assets/html.png"
// import arnav from "../assets/arnav.jpg"
// import arnav_new from "../assets/arnav-new.jpg"

// const ProfileHeader = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-3">
//       <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-pink-500">
//         <img
//           src={arnav_new}
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <h1 className="text-3xl md:text-5xl font-bold">
//         I do code and <br />
//         <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
//           make content about it!
//         </span>
//       </h1>
//       <p className="text-gray-400 mt-4 max-w-xl">
//         I am a frontend developer, my core interest lies in Java, and i am currently learning ML
//       </p>



//       {/* here starts the experience with section */}
//       {/* <div className="flex pt-9 justify-center items-center">
//         <p className="text-gray-400 mt-4 max-w-xl pt-6 pb-3">Languages and tools that i have experience with</p>
//         <div className="flex gap-10 justify-center items-center pt-4 w-15 h-15">
//         <img src={java}/>
//         <img src={js}/>
//         <img src={react}/>
//         <img src={python}/>
//         <img src={cpp}/>
//         <img src={css}/>
//         <img src={django}/>
//         <img src={html}/>
//         </div>
//       </div> */}
//       <p className="text-gray-400 mt-4 max-w-xl pt-6 pb-3 text-center">
//       Languages and tools that I have experience with
//       </p>

//       {/* Center the images properly */}
//       <div className="flex flex-wrap gap-10 justify-center items-center pt-4">
//         <img src={java} className="w-15 h-15" />
//         <img src={js} className="w-15 h-15" />
//         <img src={react} className="w-15 h-15" />
//         <img src={python} className="w-15 h-15" />
//         <img src={cpp} className="w-15 h-15" />
//         <img src={css} className="w-15 h-15" />
//         <img src={django} className="w-15 h-15" />
//         <img src={html} className="w-15 h-15" />
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;















import React from "react";
import java from "../assets/java_919854.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import cpp from "../assets/c++.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import html from "../assets/html.png";
import arnav_new from "../assets/arnav-new.jpg";
import RotatedRingsModel from "./RotatedRingsModel";
import SoldierModel from "./SoldierModel";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-6 gap-10">
      {/* Rotated rings 3D Model */}
      <div className="w-full md:w-1/2 h-[400px]">
        <SoldierModel />
      </div>

      {/* Profile Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold md:text-5xl pb-2">Hello I'm <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Arnav Sawant
          </span></h1>
        <h1 className="text-1xl md:text-5xl font-bold">
          I do code and <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            make content about it!
          </span>
        </h1>

        <p className="text-white mt-4 max-w-xl">
          I am a frontend developer, my core interest lies in Java, and I am currently learning ML
        </p>

        <p className="text-white mt-4 max-w-xl pt-6 pb-3">
          Languages and tools that I have experience with:
        </p>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center pt-4">
          <img src={java} className="w-10 h-10" />
          <img src={js} className="w-10 h-10" />
          <img src={react} className="w-10 h-10" />
          <img src={python} className="w-10 h-10" />
          <img src={cpp} className="w-10 h-10" />
          <img src={css} className="w-10 h-10" />
          <img src={django} className="w-10 h-10" />
          <img src={html} className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

