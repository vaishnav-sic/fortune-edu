// import React, { useEffect, useState } from 'react';
// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

// const BlogTwo = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'NewsUpdates'));
//         const dataArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setData(dataArray);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

//   const params = {
//     slidesPerView: 3,
//     loop: true,
//     speed: 1000,
//     spaceBetween: 30,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       1024: {
//         slidesPerView: 3,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       640: {
//         slidesPerView: 1,
//       },
//       320: {
//         slidesPerView: 1,
//       },
//     },
//   };

//   return (
//     <section className="blog-two">
//       <div className="container">
//         <div className="block-title text-center">
//           <h2 className="block-title__title">Our latest news <br /> & articles</h2>
//         </div>
//         <div id="registration2" className="blog-two__carousel">
//           <Swiper {...params}>
//             {data.map((item) => (
//               <div key={item.id} className="item">
//                 <div className="blog-two__single">
//                   <div className="blog-two__inner">
//                     <div className="blog-two__date">
//                       {/* <span>Latest</span>
//                       Updates */}
//                     </div>
//                     <h3 className="blog-two__title">
//                       <p>{item.Description}</p>
//                       <p>{item.Header}</p>
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogTwo;

import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { app, db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Carousel from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

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
    }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="blog-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Our latest news <br /> & articles</h2>
        </div>
        <div id="registration2" className="blog-two__carousel"></div> 
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="item">
              <div className="blog-two__single">
                <div className="blog-two__inner">
                  <div className="blog-two__date">
                    {/* <span>Latest</span>
                        Updates */}
                  </div>
                  <div className="blog-two__title">
                    <p>{item.Description}</p>
                    <h5>{item.Header}</h5>
                  </div>
                </div>
            </div>
        </div>
        ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogTwo;

