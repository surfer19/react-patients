export const annotations = [
  {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: 60,
    borderColor: 'blue',
    borderWidth: 1,
    label: {
      enabled: true,
      position: 'right',
      content: 'Low',
      backgroundColor: 'blue',
    },
  },
  {
    type: 'box',
    // ID of the Y scale to bind onto
    yScaleID: 'y-axis-0',
    // Top edge of the box in units along the y axis
    yMax: 105,
    // Bottom edge of the box
    yMin: 80,
    backgroundColor: 'rgba(112,251,20, 0.2)',
    borderWidth: 0.01,
    label: {
      enabled: true,
      position: 'right',
      backgroundColor: 'red',
      content: 'High',
    },
  },
  {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y-axis-0',
    value: 150,
    borderColor: 'red',
    borderWidth: 2,
    label: {
      enabled: true,
      position: 'right',
      backgroundColor: 'red',
      content: 'High',
    },
  },
];
