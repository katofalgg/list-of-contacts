import {data} from '../../components/Add/AddContact';
import * as actionTypes from './actionType';

export const addContact = (data: data) => {
    return {
        type: actionTypes.ADD_CONTACT,
        payload: data,
    };
};
export const updateContact = (data: data) => {
    return {
        type: actionTypes.UPDATE_CONTACT,
        payload: data,
    };
};
export const deleteContact = (id: number | undefined) => {
    return {
        type: actionTypes.DELETE_CONTACT,
        payload: {
            id
        },
    };
};
;
