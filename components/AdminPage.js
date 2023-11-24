import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { db } from "../firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { element } from "prop-types";

const AdminPage = () => {
  const [dataForStudents, setDataForStudents] = useState([]);
  const [dataForNews, setDataForNews] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;

      if (!user) {
        router.push("/adminlogin");
      } else {
        setUser(user);
        setLoading(false); // Set loading to false when authentication check is complete
      }
    };

    checkAuthentication();

    // Add a cleanup function to clear any ongoing asynchronous tasks when the component unmounts
    return () => {
      // Cleanup tasks (if any)
    };
  }, [router]);

  const columnsForNews = [
    { field: "id", headerName: "Sr No", width: 150 },
    {
      field: "Description",
      headerName: "Description",
      width: 525,
      editable: true,
    },
    {
      field: "Visibility",
      headerName: "Visibility",
      width: 200,
    },
    {
      field: "displayNews",
      headerName: "Display News",
      width: 200,
      checkboxSelection: true,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const fetchData = async () => {
    const querySnapshotForNews = await getDocs(collection(db, "NewsUpdates"));
    const querySnapshotForStudents = await getDocs(
      collection(db, "StudentInfo")
    );
    const newsData = querySnapshotForNews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const studentsData = querySnapshotForStudents.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDataForNews(newsData);
    let count=0;
    studentsData.forEach((element)=>{
      element.id=++count;
    })
    count=0;
    setDataForStudents(studentsData);
  };

  const columnsForStudentds = [
    { field: "id", headerName: "Sr No", width: 150, editable: true },
    {
      field: "appliedDateTime",
      headerName: "Date-Time",
      width: 150,
    },
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
      width: 100,
    },
    {
      field: "cityLiveIn",
      headerName: "City Live In",
      width: 120,
    },
    {
      field: "consultationCity",
      headerName: "Consultation City",
      width: 150,
    },
    {
      field: "CouponCode",
      headerName: "CouponCode",
      width: 100,
    },
  ];

  const updateNews = async (event) => {
    if (event.data) {
      const userRef = doc(db, "NewsUpdates", event.data.id);
      await updateDoc(userRef, event.data);
    } else {
      const userRef = doc(db, "NewsUpdates", event.id);
      await updateDoc(userRef, event);
    }
    fetchData();
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const changeNews = () => {
    const selectedRow = gridApi.getSelectedNodes()[0].data;
    dataForNews.forEach((element) => {
      if (element.id == selectedRow.id) {
        element.Visibility = true;
      } else {
        element.Visibility = false;
      }
      updateNews(element);
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{
          height: 177,
          width: "85%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <AgGridReact
          columnDefs={columnsForNews}
          rowData={dataForNews}
          onCellValueChanged={updateNews}
          editType={"fullRow"}
          rowSelection={"single"}
          suppressRowClickSelection={true}
          onGridReady={onGridReady}
        ></AgGridReact>
        <button onClick={changeNews} style={{ backgroundColor: "#2da397" }}>
          Save
        </button>
      </div>
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{
          height: 300,
          width: "85%",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}
      >
        <AgGridReact
          columnDefs={columnsForStudentds}
          rowData={dataForStudents}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default AdminPage;
