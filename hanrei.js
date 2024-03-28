// @ts-check

/**
 * @param {string} url
 * @returns {string[]}
 */
function main(url) {
  throw new Error('この関数の中身を実装してください');
}

const answer = main('https://www.courts.go.jp/app/hanrei_jp/recentlist2?page=1&filter%5Brecent%5D=true');

const correct = [
  '臨時社員総会招集許可申立て却下決定に対する抗告棄却決定に対する許可抗告事件',
  '犯罪被害者給付金不支給裁定取消請求事件',
  '遺言無効確認等請求事件',
  '共通義務確認請求事件',
  '公職選挙法違反被告事件',
  '裁決取消請求事件',
  '再審請求棄却決定に対する異議申立て棄却決定に対する特別抗告事件',
];

if (JSON.stringify(answer) === JSON.stringify(correct)) {
  console.log('正解！');
}
