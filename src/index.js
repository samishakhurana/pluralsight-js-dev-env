import numeral from 'numeral'
import './index.css' // We are able to import css because of webpack

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this pluralsight course`) // eslint-disable-line no-console
