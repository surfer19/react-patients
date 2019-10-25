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
import { createStructuredSelector } from 'reselect';
import { makeSelectPatientByPatientId } from '../../containers/App/selectors';
moment.suppressDeprecationWarnings = true;

function LineChart({ patientRecord }) {
  const { glucoseMesures: glucMesures } = patientRecord[0];

  const prepareChartData = () =>
    glucMesures.map(glucoseItem => ({
      t: moment.utc(glucoseItem.date).format('LLL'),
      y: glucoseItem.glucose,
    }));

  const prepareStartAndEnd = () => {
    // get first item
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
        label: 'Glucose value',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#2f7f80',
        pointBackgroundColor: '#2f7f80;',
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
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
