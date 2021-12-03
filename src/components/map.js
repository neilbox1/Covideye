import React, { useState } from "react";
import MapChart from "../MapChart.js";
import ReactTooltip from "react-tooltip";
import "../styles.css";
import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

//function for dashboard map
export default function DashboardMap() {
    const products = [ '', '', '', '', '', '', '', ''];
    const columns = [{
      dataField: 'id',
      text: 'Rank'
    }, {
      dataField: 'name',
      text: 'Country Name'
    }, {
      dataField: 'price',
      text: 'No. of Cases'
    }];
    const [content, setContent] = useState("");
    return (
        <div class="content center">
            <h1 class="red-text col-mb-6"> Covid Map </h1>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
            
        <BootstrapTable keyField='id' data={ products } columns={ columns } bootstrap4={true} />
   
   <Button variant="primary">Refresh Data</Button>{' '}
        </div>
        
    );
    
}