const backendData = [{
    skillId: 1,
    name: "Skill 1",
    dateFirstPractised: "2020-06-01",
    practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5},{day:11,lastGap0:5,lastGap1:8}]
},
{
    skillId: 2,
    name: "Skill 2",
    dateFirstPractised: "2020-06-03",
    practisedData: [{day:0,lastGap0:1,lastGap1:1},{day:1,lastGap0:1,lastGap1:2},{day:3,lastGap0:2,lastGap1:3},{day:6,lastGap0:3,lastGap1:5}]
}];

function generateXYData(practisedData) {
    let lastData = practisedData[0];
    let multiplier = 1;

    const simpleData = practisedData.flatMap(data => {
      let newData = [];
      let days = data.day - lastData.day;
      multiplier = multiplier*lastData.lastGap0/lastData.lastGap1;
      for (let i=1; i<=days; i++) {
        let val = 100*Math.exp(-i*multiplier) | 0;
        newData.push(val);
      }
      newData.push(100);
      lastData = data;
      return newData;
    })
    return simpleData.map((data,i) => {return {x:i, y:data}});
}



export default function generateLineChartData(backendData) {
    return backendData.map(skill => {
        let dataItem = {};
        dataItem.id = skill.skillId;
        dataItem.data = generateXYData(skill.practisedData);
        return dataItem;
    })
}