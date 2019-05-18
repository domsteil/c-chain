import React, { useEffect, useState } from 'react';
import useFetch from "../../components/useFetch";

export default function LedgerList(props) {
const items = useFetch("http://localhost:10050/api/getLedger");
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th column="0">Ledger Id</th>
                    <th column="1">Description</th>
                    <th column="2">Content Type</th>
                    <th column="3">Hash</th>
                    <th column="4">Key</th>
                    <th column="5">Policy</th>

                </tr>
            </thead>
            <tbody>
                {items.map(i => (
                    <tr>{i.itemId}
                    <td>{i.description}</td>
                    <td>{i.contentType}</td>
                    <td>{i.hash}</td>
                    <td>{i.key}</td>
                    <td>{i.policy}</td>

                    </tr>
                ))}
            </tbody>
            </table>
            <style jsx>{`
      .column {
        text-align: left
      }

      .list-item-check {
        background: url(/static/images/pricing_table_check.png) 2px 1px no-repeat;
        padding-left: 50px;

      }

      .vertical {
        align-left: 30px;
        height: 1200px;
      }

      .table {
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: grey;
    }

    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }

    th {
        color: rgb(102, 102, 102);
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        padding-left: 69px;
    }

    td {
        text-align: left;
        vertical-align: top;
        padding: 0px 10px;
        color: rgb(68, 68, 68);
        font-size: 14px;
        border-bottom: 1px solid rgb(234, 234, 234);
    
    }

    tr {
      text-align: left;
      vertical-align: top;
      padding: 0px 10px;
      color: rgb(68, 68, 68);
      font-size: 14px;
      border-bottom: 1px solid rgb(234, 234, 234);
  
  }

      .accounts {
        font-size: 13px;
        font-color: #000
      }

      .agentItems {
        font-size: 13px;
        font-color: #000
      }

      

      .agentCard {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
        position: center;
        text-align: center;
        box-sizing: border-box;
        align: center;
        padding-left: 28px;
        padding-right: 28px;
        margin-top: 28px;
        margin-left: 28px;
        margin-right: 28px;
        background-color: #F7F6F3;
        width: 1000px;
        height: 400px;
    }

     .col-left {
        box-sizing: border-box;
        min-height: 100%;
        background: #233659;
        background: linear-gradient(135deg,#565b73,#233659);
        padding: 25px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
     }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 350px;
        }

        
.archetype-form__container {
    background: 0 0;
    color: #0d112b;
    width: 100%;
    margin: 0 auto;
    text-align: left;
}
      }
    `}</style>
        </div>
    );
}
