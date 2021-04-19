import { combineReducers } from 'redux';

import { users } from './user.reducer';
import { authentication } from './auth.reducer';
import { common } from './common.reducer';
import { system } from './system.reducer';

const rootReducer = combineReducers({
    users,
    authentication,
    common,
    system,
});

export default rootReducer;
