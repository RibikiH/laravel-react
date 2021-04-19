import {commonConstants} from "../constants";

type Common = {
    loading: boolean;
};

const initialState: Common = {
    loading: false,
};

export function common(state = initialState, action: { type: any; user: any; }) {
    switch (action.type) {
        case commonConstants.START_PROGRESS:
            return { loading: true };
        case commonConstants.COMPLETE_PROGRESS:
            return { loading: false };
        default:
            return { loading: false };
    }
}
