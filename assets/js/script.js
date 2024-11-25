'use strict';

// Import all funcitons in an object. You can also import one or more components if you want to
import * as utils from './utils.js';

const container = utils.select('.container');
utils.select('.wins-counter').innerText(`Wins: ${wins}`);