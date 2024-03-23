import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
 
const NewsFlash = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "NewsUpdates"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
 
  const visibleIndex = data.findIndex((item) => item.Visibility === true);
 
  return (
    <div className="newsFlash">
      <div className="newsText1">
        <p>⭐&nbsp;Latest News&nbsp;&nbsp;</p>
      </div>
 
      <div className="newsText">
        <p className="newsText-p">
          {data.length > 0 && data[visibleIndex].Description}
        </p>
      </div>
    </div>
  );
};
 
export default NewsFlash;