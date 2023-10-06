import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUserMiddle} from "../redux/middleware/UserMiddleware";


function UserList() {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserMiddle())
    }, [])


    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                <tr className="table">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;