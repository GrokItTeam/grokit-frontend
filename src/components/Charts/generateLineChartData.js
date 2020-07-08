import moment from 'moment';

function generateXYData(practisedData,dateFirstPractised) {
    let lastData = practisedData[0];
    let multiplier = 1;

    const simpleData = practisedData.flatMap((data,i) => {      
      let newData = [];
      let days = data.day - lastData.day;
      multiplier = multiplier*lastData.lastGap0/lastData.lastGap1;
      for (let i=1; i<=days; i++) {
        let val = 100*Math.exp(-i*multiplier) | 0;
        newData.push(val);
      }
      newData.push(100);
      lastData = data;      
      
      if (i === practisedData.length-1) {
        let remainingDays = moment().diff(moment(dateFirstPractised),"days")-lastData.day;      
        multiplier = multiplier*lastData.lastGap0/lastData.lastGap1;
        for (let i = 1; i<=remainingDays; i++) {
          let val = 100*Math.exp(-i*multiplier) | 0;
         newData.push(val);
        }
      }
      return newData;
    })
    let x = 0;
    return simpleData.map((data) => {      
      if (data !== 100) {x++}
      let result = {x, y:data}
      return result;
    });
}

export default function generateLineChartData({skillName, dateFirstPractised, practisedData = []}) {
  let chartDataSeries = {id:skillName};
  chartDataSeries.data = generateXYData(practisedData, dateFirstPractised);
  return [chartDataSeries];
}
  