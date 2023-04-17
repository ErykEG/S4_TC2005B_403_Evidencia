import React from "react";
import { Tooltip } from "bootstrap";
import * as FileSaver from "file-saver";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ExportReact from "./ExportReact";
import XLSX from "sheetjs-style";

export const ExcelExport = ({ csvData, fileName }) => {
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
    <Button variant="warning" onClick={(e) => exportToCSV(csvData, fileName)}>
      Export
    </Button>
  );
};
