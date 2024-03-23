import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import * as XLSX from "xlsx";
 
const AdminPage = () => {
  const [saveButton, setSaveButton] = useState(true);
  const [dataForStudents, setDataForStudents] = useState([]);
  const [dataForNews, setDataForNews] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [gridApi, setGridApi] = useState(null);
  const [gridApiForStudents, setGridApiForStudents] = useState(null);
  const gridOptions = {
    pagination: true,
    paginationPageSize: 20, // Set the number of rows per page
  };
 
  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;
 
      if (!user) {
        router.push("/adminlogin");
      } else {
        setUser(user);
        setLoading(false);
      }
    };
 
    checkAuthentication();
 
    return () => {
      // Cleanup tasks (if any)
    };
  }, [router]);
 
  const exportToExcel = () => {
    const allRowNodes = gridApiForStudents.getModel().rootNode.allLeafChildren;
    const data = [];
    allRowNodes.forEach((element) => {
      data.push(element.data);
    });
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "exported_data.xlsx");
  };
 
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
  }, []);
 
  const fetchData = async () => {
    const querySnapshotForNews = await getDocs(collection(db, "NewsUpdates"));
    const querySnapshotForStudents = await getDocs(
      query(collection(db, "StudentInfo"), orderBy("appliedDateTime", "desc"))
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
    let count = 0;
    studentsData.forEach((element) => {
      element.id = ++count;
    });
    count = 0;
    setDataForStudents(studentsData);
  };
  // console.log(dataForNews, dataForStudents);
 
  const columnsForStudents = [
    { field: "id", headerName: "Sr No", width: 70, editable: true },
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
      width: 110,
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
      width: 120,
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
    setSaveButton(true);
  };
 
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  const onStudentsGridReady = (params) => {
    setGridApiForStudents(params.api);
  };
 
  const changeNews = () => {
    const selectedRow = gridApi.getSelectedNodes()[0].data;
    dataForNews.forEach((element) => {
      if (element.id === selectedRow.id) {
        element.Visibility = true;
      } else {
        element.Visibility = false;
      }
      updateNews(element);
    });
    setSaveButton(true);
  };
  const cellEditingStarted = () => {
    setSaveButton(true);
  };
  const onRowSelected = () => {
    setSaveButton(false);
  };
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{
          height: 177,
          width: "85%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        <AgGridReact
          columnDefs={columnsForNews}
          rowData={dataForNews}
          onRowSelected={onRowSelected}
          onCellValueChanged={updateNews}
          onCellEditingStarted={cellEditingStarted}
          editType={"fullRow"}
          rowSelection={"single"}
          suppressRowClickSelection={true}
          onGridReady={onGridReady}></AgGridReact>
        <button
          onClick={changeNews}
          disabled={saveButton}
          style={{ backgroundColor: "#2da397" }}>
          Save
        </button>
      </div>
      <div
        className="bulkMain ag-theme-alpine ag-style d-flex flex-column"
        style={{
          height: "62rem",
          width: "90%",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}>
        <button
          onClick={exportToExcel}
          style={{
            backgroundColor: "#2da397",
            width: "7rem",
            alignSelf: "end",
            marginBottom: 5,
          }}>
          Export to Excel
        </button>
        <AgGridReact
          columnDefs={columnsForStudents}
          rowData={dataForStudents}
          gridOptions={gridOptions}
          onGridReady={onStudentsGridReady}></AgGridReact>
      </div>
    </div>
  );
};
export default AdminPage;