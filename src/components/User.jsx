import React from 'react'

const User = ({ users }) => {
    return (
        <>
            <h2>User List</h2>
            <table border="1" cellspacing="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.street + ' ' + user.address.city }</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>

    )
}

export default User