import React from "react";
import {Link} from "react-router-dom";
import {deleteContact} from "../../redux/action/action";
import {IState} from "../../redux/reducers/reducer";
import {AppDispatch} from "../../redux/store/store";
import {connect} from "react-redux";
import {data} from "../Add/AddContact";

interface IHomeProps {
    contacts: {
        id?: number | undefined,
        name?: string | null | undefined,
        phone?: string | null | undefined
    }[],
    deleteContact: (id: number | undefined) => void,
}
const Home: React.FC<IHomeProps> = ({contacts, deleteContact}) => {
    return (
        <div>
            <Link to='/add'>
                Добавить
            </Link>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {contacts.length > 0 ? (
                    contacts.map((contact: data, id: number) => (
                        <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <Link
                                    to={`/edit/${contact.id}`}
                                >
                                    Редактировать
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => deleteContact(contact.id)}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <th>Нет контактов</th>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
};
const mapStateToProps = (state: IState) => ({
    contacts: state,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    deleteContact: (id: number | undefined) => {
        dispatch(deleteContact(id));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
