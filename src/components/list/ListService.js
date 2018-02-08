module.exports = {
  createRows: inputArray => {
    let rows = [];
    for (let i = 0, len = inputArray.length; i < len; i++) {
      let count = 0;
      let row = [];
      while (count < 3 && i < len) {
        row.push(inputArray[i]);
        count++;
        i++;
      }
      i--;
      rows.push(row);
    }
    return rows;
  },
  testFunction: () => {
    return console.log("coucou");
  }
};
