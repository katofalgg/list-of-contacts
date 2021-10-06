import {ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from "../action/actionType";

const initialState = [
    {id: 0, name: "Катя", phone: '+712345111'},
    {id: 1, name: "Маша", phone: '+929999933'},
];
export type IAction = {
    type: string,
    payload: {
        id?: number | undefined,
        name?: string | null | undefined,
        phone?: string | null | undefined,
    }
}
export type IState = {
    id?: number | undefined,
    name?: string | null | undefined,
    phone?: string | null | undefined,
}[];

export const reducer = (state: IState | undefined = initialState, action: IAction): IState => {
    switch (action.type) {
        case ADD_CONTACT:
            state = [...state, action.payload];
            return state;
        case DELETE_CONTACT:
            const contactFilter = state.filter(contact => contact.id !== action.payload.id);
            state = contactFilter;
            return state;
        case UPDATE_CONTACT:
            const contactUpdate = state.map(contact => contact.id === action.payload.id
                ? Object.assign(contact, action.payload)
                : contact)
            state = contactUpdate;
            return state
        default:
            return state;
    }
}
