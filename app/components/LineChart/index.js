/**
 *
 * LineChart
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { createStructuredSelector } from 'reselect';
import { makeSelectPatientByPatientId } from '../../containers/App/selectors';
import { annotations } from './annotations';
import { datasetConfig } from './datasetConfig';
moment.suppressDeprecationWarnings = true;

function LineChart({ patientRecord }) {
  const { glucoseMesures: glucMesures } = patientRecord[0];

  const prepareChartData = () =>
    glucMesures.map(glucoseItem => ({
      t: moment.utc(glucoseItem.date).format('LLL'),
      y: glucoseItem.glucose,
    }));

  const prepareStartAndEnd = () => {
    // get first record of a day
    const firstItem = glucMesures[0];
    const shiftUtcTime = 'T00:00:00+02:00';
    const firstMom = moment(firstItem.date);
    const format = 'YYYY-MM-DD';
    return {
      start: firstMom.format(format) + shiftUtcTime,
      end: firstMom.add(1, 'days').format(format) + shiftUtcTime,
    };
  };

  const data = {
    datasets: [
      {
        ...datasetConfig,
        data: prepareChartData(),
      },
    ],
  };
  return (
    <Line
      data={data}
      width={1000}
      height={500}
      options={{
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'hour',
                stepSize: 3,
                min: prepareStartAndEnd().start,
                max: prepareStartAndEnd().end,
                displayFormats: {
                  hour: 'HH:mm',
                },
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                max: 160,
              },
            },
          ],
        },
        annotation: {
          annotations,
        },
      }}
    />
  );
}

LineChart.propTypes = {
  patientRecord: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  patientRecord: makeSelectPatientByPatientId(),
});

export default connect(mapStateToProps)(LineChart);
