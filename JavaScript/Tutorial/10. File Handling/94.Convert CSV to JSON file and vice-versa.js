/*How to Convert CSV to JSON file and vice-versa in JavaScript*/

const JSONToCSV = (objArray, keys) => { 
  let csv = keys.join(','); 
  objArray.forEach((row) => { 
      let values = []; 
      keys.forEach((key) => { 
          values.push(row[key] || ''); 
      }); 
      csv += '\n' + values.join(','); 
  }); 
  return csv; 
}; 

const exampleJSON = [ 
  {  
      "date": 20210307,  
      "positives": 28756184,  
      "fatalities": 515148  
  }, 
  {  
      "date": 20210306,  
      "positives": 28714654,  
      "fatalities": 514309  
  }, 
  {  
      "date": 20210305,  
      "positives": 28654639,  
      "fatalities": 512629  
  }, 
  {  
      "date": 20210304,  
      "positives": 28585852,  
      "fatalities": 510408  
  }, 
  {  
      "date": 20210303,  
      "positives": 28520365,  
      "fatalities": 508665  
  }, 
  {  
      "date": 20210302,  
      "positives": 28453529,  
      "fatalities": 506216  
  }, 
  {  
      "date": 20210301,  
      "positives": 28399281,  
      "fatalities": 504488  
  } 
]; 
console.log(JSONToCSV(exampleJSON,  
  ['date', 'positives', 'fatalities'])); 