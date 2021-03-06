/**
 *
 * Table
 *
 */

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from '../Button';

function Table({
  headData,
  rowData,
  allowedAttrs,
  buttonColumnText: btnText,
  buttonColumnHrefId: btnHref,
  path,
  onColBtnClick,
}) {
  function generateTableRows() {
    return rowData.map(row => {
      // [ [columnKey, columnValue], [columnKey2, columnValue2] ])
      const columnElements = generateTableColumns(row, allowedAttrs);
      // add last column with button
      if (btnText) {
        columnElements.push(
          generateLastButtonColumn(row, path, btnHref, btnText, onColBtnClick),
        );
      }
      return <tr key={shortid.generate()}>{columnElements}</tr>;
    });
  }

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>{generateHeader(headData)}</tr>
      </thead>
      <tbody>{generateTableRows()}</tbody>
    </table>
  );
}

const generateHeader = headData =>
  headData.map(headItem => (
    <th key={shortid.generate()} scope="col">
      {headItem}
    </th>
  ));

const generateTableColumns = (row, allowedAttrs) =>
  Object.entries(row).map(rowEntries => {
    const colKey = rowEntries[0];
    let colValue = rowEntries[rowEntries.length - 1];
    if (typeof colValue === 'string') {
      // iterate only over allowedAttrs
      if (allowedAttrs.find(attr => attr === colKey)) {
        // convert to date if string is valid Date
        if (moment(colValue).isValid()) {
          colValue = moment(new Date(colValue)).format('LL');
        }
        return <td key={shortid.generate()}>{colValue}</td>;
      }
    }
    return null;
  });

const generateLastButtonColumn = (
  row,
  path,
  buttonColumnHrefId,
  buttonColumnText,
  onColBtnClick,
) => (
  <td key={shortid.generate()}>
    <Button
      onClick={e => onColBtnClick(row[buttonColumnHrefId], e)}
      href={`${path}/${row[buttonColumnHrefId]}`}
    >
      {buttonColumnText}
    </Button>
  </td>
);

Table.propTypes = {
  headData: PropTypes.array,
  rowData: PropTypes.array,
  allowedAttrs: PropTypes.array,
  buttonColumnText: PropTypes.string,
  buttonColumnHrefId: PropTypes.string,
  path: PropTypes.string,
  onColBtnClick: PropTypes.func,
};

export default Table;
