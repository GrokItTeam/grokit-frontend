// for a single skill

function produceFormattedBackendData(rawBackendData) {
    const {skillId, dateFirstPractised} = rawBackendData[0];
    let formattedBackedData = {skillId, dateFirstPractised, data: []};
    formattedBackedData.data = rawBackendData.map(({day, lastGap0, lastGap1}) => {
        return {day, lastGap0, lastGap1}
    });
    return formattedBackedData;
};