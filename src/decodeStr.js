const str = 'TxnbO^lbhk-emoaq_k';

const result = String.fromCharCode(...(str.split('').map(
      (c, i) => {
        return c.charCodeAt(0) + i % 10;
      })
  )
);
console.log(result);
