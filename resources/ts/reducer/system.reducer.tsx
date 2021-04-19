import {commonConstants} from "../constants";

type Common = {
    menu: string;
    menu_name: string,
};

const initialState: Common = {
    menu: 'dashboard',
    menu_name: 'Dashboard',
};

export function system(state = initialState, action: { type: string; menu: string; menu_name: string }) {
    switch (action.type) {
        case commonConstants.SET_MENU:
            return {
                menu: action.menu,
                menu_name: action.menu_name
            };
        default:
            return state;
    }
}
