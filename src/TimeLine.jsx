// // export default function Timeline() {
// //     const events = [
// //       { year: "2021", title: "Started Coding", description: "Began learning Java and frontend development." },
// //       { year: "2022", title: "First Project", description: "Built my first React and Django project." },
// //       { year: "2023", title: "Started Content Creation", description: "Started writing blogs and making tutorials." },
// //       { year: "2024", title: "Learning ML", description: "Diving into machine learning and AI." },
// //     ];
  
// //     return (
// //       <div className="max-w-3xl mx-auto p-6">
// //         <h2 className="text-3xl font-bold text-center mb-8">My Timeline</h2>
// //         <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
// //           {events.map((event, index) => (
// //             <div key={index} className="mb-8 ml-6">
// //               <div className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></div>
// //               <p className="text-lg font-semibold">{event.year}</p>
// //               <h3 className="text-xl font-bold">{event.title}</h3>
// //               <p className="text-gray-600">{event.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
  


import React from 'react'

const TimeLine = () => {
    const events = [
      { year: "2022-present", title: "Vivekanand Education Society's Institute of Technology", description: "Pursuing a degree in Information technology, also being part of IEEE and VESLang circle" },
      { year: "2020-2022", title: "Holy Angels' Junior College", description: "I did my entire college from here, started to learn about web-development and kept keen interest in Phy, Maths and Chemistry" },
      { year: "2010-2020", title: "Holy Angels' School and Junior College", description: "Did my entire schooling from here" },
    ];

  return (
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto p-2 pb-15">
        <h1 className="p-1 pt-5 text-white text-3xl md:text-5xl font-bold text-center mb-8">Education</h1>
        <div className="relative border-l-4 border-gray-300 dark:border-gray-600">
          {events.map((event, index) => (
            <div key={index} className="mb-9 ml-9">
              <div className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></div>
              <p className="text-lg text-white font-semibold">{event.year}</p>
              <h3 className="text-xl text-white font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TimeLine