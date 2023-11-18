import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from "react";


const AdminPage = () => {
  const [dataForStudents,setDataForStudents] = useState([]);
  const [dataForNews,setDataForNews] = useState([]);

  
  const columnsForNews = [
    { field: "id", headerName: "Sr No", width: 150 },
    {
      field: "Header",
      headerName: "Header",
      width: 200,
      // editable: true,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 525,
      // editable: true,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
        const querySnapshotForNews = await getDocs(collection(db, 'NewsUpdates'));
        const querySnapshotForStudents = await getDocs(collection(db, 'StudentInfo'));
        const newsData = querySnapshotForNews.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const studentsData = querySnapshotForStudents.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDataForNews(newsData);
        setDataForStudents(studentsData);
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  console.log(dataForStudents);


  const columnsForStudentds = [
    { field: "id", headerName: "Sr No", width: 150, editable: true },
    {
      field: "firstName",
      headerName: "FirstName",
      width: 100,
    },
    {
      field: "lastName",
      headerName: "LastName",
      width: 100,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 120,
    },
    {
      field: "email",
      headerName: "Email-Id",
      width: 150,
    },
    {
      field: "courseInterest",
      headerName: "Course",
      width: 200,
    },
    {
      field: "cityLiveIn",
      headerName: "City Live In",
      width: 120,
    },
    {
      field: "consultationCity",
      headerName: "Consultation City",
      width: 200,
    },
  ];

  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center" }}>
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{ height: 300, width: "65%" ,marginTop:"2rem",marginBottom:"2rem"}}
      >
        <AgGridReact
          //   ref={gridRef}
          columnDefs={columnsForNews}
          rowData={dataForNews}
          //   gridOptions={gridOptions}
          //   onGridReady={onGridReady}
        ></AgGridReact>
      </div>
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{ height: 300, width: "85%" ,marginBottom:"2rem"}}
      >
        <AgGridReact
          //   ref={gridRef}
          columnDefs={columnsForStudentds}
          rowData={dataForStudents}
          //   gridOptions={gridOptions}
          //   onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default AdminPage;
