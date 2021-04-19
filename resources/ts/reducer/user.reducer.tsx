import { userConstants } from '../constants';

export function users(state = {
    items: []
}, action: { type: any; users: any; error: any; id: any; }) {
    switch (action.type) {
        case userConstants.GET_ALL_REQUEST:
            return {

            };
        case userConstants.GET_ALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GET_ALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map((user: { id: any; }) =>
                    user.id === action.id
                        ? { ...user, deleting: true }
                        : user
                )
            };
        case userConstants.DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter((user : {id: any}) => user.id !== action.id)
            };
        case userConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user
            return {
                ...state,
                items: state.items.map((user : {id: any, deleting: false}) => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...userCopy } = user;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            };
        default:
            return state
    }
}
