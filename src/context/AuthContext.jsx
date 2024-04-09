import { createContext, useContext, useEffect, useState } from "react";
import { deleteUserId, editUserId, getUserId, getUsers, postLoginUser, postRegisterUser } from "../service/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("El useAuth debe estar dentro del contexto");
    }
    return context;
}
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isAuthen, setIsAuthen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rol, setRol] = useState(null);

    const _getUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const _getProfile = async (userId) => {
        try {
            const UserId = await getUserId(userId);
            return UserId.data;
        } catch (error) {
            console.log(error);
        }
    }

    const signUp = async (user) => {
        try {
            const res = await postRegisterUser(user);
            await _getUsers();
            return res.status;
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    }

    const login = async (user) => {
        try {
            const res = await postLoginUser(user);
            setUser(res.data);
            setRol(res.data?.rol);
            setIsAuthen(true);
            return res.status;
        } catch (error) {
            console.log(error);
        }
    }

    const _putUserId = async (userId, data) => {
        try {
            const res = await editUserId(userId, data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    const _deleteUser = async (userId) => {
        try {
            const deleteUser = await deleteUserId(userId);
            if (deleteUser.status === 200) setUsers(users.filter((user) => user._id !== userId));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()
            if (!cookies.login) {
                setIsAuthen(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verityTokenRequest(cookies.login);
                if (res.status !== 200) {
                    setIsAuthen(false);
                    setLoading(false);
                    return;
                }
                setLoading(false);
                setIsAuthen(true);
                return;
            } catch (error) {
                setIsAuthen(false);
                setUser(null);
                setLoading(false);
            }
        }

        checkLogin();
    }, []);
    return (
        <AuthContext.Provider value={{ _getUsers, _getProfile, signUp, login, _putUserId, _deleteUser, user, isAuthen, errors, rol }}>
            {children}
        </AuthContext.Provider>
    )
}