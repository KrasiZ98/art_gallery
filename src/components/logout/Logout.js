import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"

export const Logout = () => {
    const { key, user, authLogout } = useContext(AuthContext);

    useEffect(() => {
        fetch(' http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': user.accessToken,
            },
        })
            .then(authLogout());
    })
}