// import * as lib from './module_export.js';
//이름을 변경하여 import
import {pi as PI, square as sq, Person as P} from './module_export.js'

console.log(PI); //3.14
console.log(sq(10));; 
console.log(new P('Lee'));

/* default 키워드와 함께 export 한 모듈은 {} 없이 임의의 이름으로 import한다. 

import squre form './module_export.js'

console.log(squre(3)); //9

*/
