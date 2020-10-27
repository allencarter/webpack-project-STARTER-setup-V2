// Global app controller
import num from './test';
import '../sass/style.scss';

const x = 'Babel Polyfill successfully converted const x into var x!' // IF this displays, Polyfill works!

console.log(`
I imported ${num} from another module successfully! 

${x}

`);