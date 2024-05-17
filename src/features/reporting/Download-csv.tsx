import React from 'react';
import logo from './logo.svg';
import './App.css';



"use client";
import { useRouter } from "next/navigation";
export const CSV_Download = () => {
  const router = useRouter();
  const downloadCSV = () => {
    const csvData = `Name,Email,Phone\nJohn Doe,johndoe@example.com,1234567890\nJane Smith,janesmith@example.com,9876543210`;

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sample.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadCSV}>Download CSV</button>
    );
};

export default CSV_Download;