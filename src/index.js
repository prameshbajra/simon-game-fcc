import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Components/Game.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
