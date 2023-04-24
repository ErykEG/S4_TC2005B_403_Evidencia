import React from "react";
import { useState, useEffect } from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import "./Styles/exportExcel.css";

export const ExportExcel = ({ dataSource, fileName, buttonName }) => {
  // Excel Export
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={() => exportToCSV(dataSource, fileName)}>
      {buttonName}
      {console.log("break")}
      {console.log(dataSource)}
    </button>
  );

  {
    /* Format: dataSource can be a link or a variable 
  <ExportExcel
    dataSource={"https://edbapi.azurewebsites.net/api/candidates"}
    fileName={"Export Stack"}
    buttonName={"Export Stack"}
  />; */
  }
};
