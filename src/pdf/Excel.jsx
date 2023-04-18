import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx/xlsx.mjs';
import React from 'react';

const Excel = (props) => {
  // Function to generate the Excel file

const generateExcel = () => {
  const worksheet2 = XLSX.utils.json_to_sheet(
    props.b
  );
  const worksheet3 = XLSX.utils.json_to_sheet(
    props.c
  );
  const worksheet4 = XLSX.utils.json_to_sheet(
    props.d
  );
  const worksheet5 = XLSX.utils.json_to_sheet(
    props.e
  );
  const worksheet6 = XLSX.utils.json_to_sheet(
    props.f
  );
 
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet2, 'Sheet2');
  XLSX.utils.book_append_sheet(workbook, worksheet3, 'Sheet3')
  XLSX.utils.book_append_sheet(workbook, worksheet4, 'Sheet4')
  XLSX.utils.book_append_sheet(workbook, worksheet5, 'Sheet5');
  XLSX.utils.book_append_sheet(workbook, worksheet6, 'Sheet6')
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  saveAs(data, 'backtest.xlsx'); // Save the Excel file
};
  return (
    <div>
      <button className="bg-blue-600 text-white p-2 rounded" onClick={generateExcel}>Download Excel</button>
    </div>
  );
};


export default Excel

