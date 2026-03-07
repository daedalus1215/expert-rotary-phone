



function target(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;

  let goingDown = false;
  let currentRow = 0;
  let rows = new Array(numRows).fill('');

  for (const char in s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow >= numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join('');
}

describe('', () => {
  it('', () => {
    expect(target("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  });

   it('', () => {
     expect(target("PAYPALISHIRING", 4)).toEqual('PINALSIGYAHRPI');
   });
})

