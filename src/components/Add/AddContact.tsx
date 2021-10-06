import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {addContact} from '../../redux/action/action';
import {IState} from '../../redux/reducers/reducer';
import {AppDispatch} from '../../redux/store/store';

export type data = {
    id?: number | undefined,
    name?: string | null | undefined,
    phone?: string | null | undefined,
};

interface IAddContactProps {
    contacts:
        {
            id?: number | undefined,
            name?: string | null | undefined,
            phone?: string | null | undefined
        }[],
    addContact: (data: data) => void,
}

const AddContact: React.FC<IAddContactProps> = ({contacts, addContact}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();
    
    const data: data = {
        id: contacts.length > 0 ? contacts[contacts.length - 1].id! + 1 : 0,
        name,
        phone,
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !phone) {
            return alert("Пожалуйста, заполните все поля!");
        }
        addContact(data);
        history.push('/');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button>
                    Добавить
                </button>
            </form>
        </div>
    );
};
const mapStateToProps = (state: IState) => ({
    contacts: state,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addContact: (data: data) => {
        dispatch(addContact(data))
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
