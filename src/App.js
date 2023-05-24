import './App.css';
import React, { useState} from 'react';
import {Table, Button} from "reactstrap"

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [invoices, setInvoices] = useState(
    [
      {
        "id" : "100",
        "Vendor": "Hancook",
        "Amount" : "$1,800",
        "Invoice": "1123",
        "Date" : "05/23/2023"
      },
      {
        "id" : "200",
        "Vendor": "Hancook",
        "Amount" : "$1,800",
        "Invoice": "1234",
        "Date" : "05/23/2023"
      },
      {
        "id" : "300",
        "Vendor": "Hancook",
        "Amount" : "$1,800",
        "Invoice": "1345",
        "Date" : "05/23/2023"
      }
    ]
  );

  function remove(id) {
    setInvoices(invoices.filter(i => i.id != id));
  };

  let mytable = invoices.map( invoice => 
    <tr key={invoice.id}>
      <td>{invoice.Vendor}</td>
      <td>{invoice.Amount}</td>
      <td>{invoice.Invoice}</td>
      <td>{invoice.Date}</td>
      <td><Button className='btn btn-lg btn-success' onClick={() => remove(invoice.id)}>OK</Button></td>
      <td><Button className='btn btn-lg btn-danger' onClick={() => remove(invoice.id)}>Not Ok</Button></td>
      <td><Button className='btn btn-lg btn-info' onClick={() => remove(invoice.id)}>50%</Button></td>
      <td><Button className='btn btn-lg btn-waring' onClick={() => remove(invoice.id)}>??</Button></td>
      <td><Button className='btn btn-lg btn-info' onClick={() => remove(invoice.id)}>Image</Button></td>

    </tr>

    )

  if (isLoading){
    return (
      <div>
        Loading...
      </div>
    )
  }
  
  return (
    <div className="container border border-secondary rounded center">

      <div className='row'>
        <div className='col-12'>
          <h4>Pending Invoices</h4>
        </div>
      </div>

      <div className='row'>
        <div className='.col-xs-12 center text-center'>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Invoice #</th>
              <th>Date</th>
              <th colSpan="4">Actions</th>
              <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {invoices.length === 0 ? <td colSpan="9">All Caught Up!</td> : mytable}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
}

export default App;
