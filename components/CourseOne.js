import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const BlogTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'NewsUpdates'));
        const dataArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="blog-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Our latest news <br /> & articles</h2>
        </div>
        <div id="registration2" className="blog-two__carousel">
          <Swiper {...params}>
            {data.map((item) => (
              <div key={item.id} className="item">
                <div className="blog-two__single">
                  <div className="blog-two__inner">
                    <div className="blog-two__date">
                      {/* <span>Latest</span>
                      Updates */}
                    </div>
                    <h3 className="blog-two__title">
                      <p>{item.Description}</p>
                      <p>{item.Header}</p>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;

// import React from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
// import { app, db } from "../firebaseConfig";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// const Footer = () => {
//   function scrollTop() {
//     window.scrollTo(0, 0);
//   }
//     const [Data, setData] = useState();
//     useEffect(async () => {
//     const querySnapshot = await getDocs(collection(db, "NewsUpdates"));
//     const dataArray = [];
//     querySnapshot?.forEach((doc) => {
//     dataArray.push({ id: doc.id, ...doc.data() });
//     });
//     setData(dataArray);
//   }, []);
// }
// const BlogTwo = () => {
//     const params = {
//         slidesPerView: 3,
//         loop: true,
//         speed: 1000,
//         spaceBetween: 30,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         },
//         // Responsive breakpoints
//         breakpoints: {
//             1024: {
//                 slidesPerView: 3
//             },
//             768: {
//                 slidesPerView: 2
//             },
//             640: {
//                 slidesPerView: 1
//             },
//             320: {
//                 slidesPerView: 1
//             }
//         }
//     }
//     return (
//         <section className="blog-two">
//             <div className="container">
//                 <div className="block-title text-center">
//                     <h2 className="block-title__title">Our latest news <br />
//                         & articles</h2>
//                 </div>
//                 <div id="registration2" className="blog-two__carousel">
//                     <Swiper {...params}>
//                         {
//                             <div className="item">
//                             <div className="blog-two__single">
//                                 <div className="blog-two__inner">
//                                     <div className="blog-two__date">
//                                         <span>Latest</span>
//                                         Updates
//                                     </div>
//                                     {/* <div className="blog-two__meta">
//                                     <a href="#">by Admin</a>
//                                     <a href="#">3 Comments</a>
//                                 </div> */}
//                                     <h3 className="blog-two__title">
//                                         <p>You'll get all latest news and updates related to Medical & Engineering Admissions.</p>
//                                         {/* <a href="news-details.html">Summer high school journalism camp</a> */}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                         }
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default BlogTwo;
