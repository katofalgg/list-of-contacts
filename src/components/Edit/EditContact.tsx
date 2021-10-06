import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import {updateContact} from "../../redux/action/action";
import {IState} from "../../redux/reducers/reducer";
import {AppDispatch} from "../../redux/store/store";
import {data} from "../Add/AddContact";
import {connect} from 'react-redux';

interface IAddContactProps {
    contacts: {
        id?: number | undefined,
        name?: string | null | undefined,
        phone?: string | null | undefined
    }[],
    updateContact: (data: data) => void,
}

const EditContact: React.FC<IAddContactProps> = ({contacts, updateContact}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
        setName(currentContact!.name!);
        setPhone(currentContact!.phone!);
    }, [currentContact]);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !phone) {
            return alert("Пожалуйта, заполните все поля!");
        }

        const data = {
            id: currentContact!.id,
            name,
            phone,
        };

        updateContact(data);
        history.push("/");
    };
    return (
        <div>
            <button
                onClick={() => history.push('/')}
            >
                Назад
            </button>
            {currentContact ? (
                <form onSubmit={handleSubmit}>
                    <input
                        value={name}
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        value={phone}
                        placeholder='phone'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">
                        Обновить
                    </button>
                    <button
                        type='button'
                        onClick={() => history.push('/')}

                    >
                        Выйти
                    </button>
                </form>
            ) : (
                <h1>Нет контактов</h1>
            )}
        </div>
    );
};
const mapStateToProps = (state: IState) => ({
    contacts: state,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    updateContact: (data: data) => {
        dispatch(updateContact(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
