import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const login =
    (navigate, email, password, setLoading) => async (dispatch) => {
        setLoading(true);

        let data = JSON.stringify({
            email,
            password,
        });

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data,
        };

        try {
            const response = await axios.request(config);

            const { data } = response.data;
            const { token, user } = data;

            dispatch(setToken(token));
            dispatch(setUser(user));

            navigate("/home");

            toast.success("Login success");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }

        setLoading(false);
    };

export const register =
    (navigate, name, email, password, photo, setLoading) =>
    async (dispatch) => {
        setLoading(true);

        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/register`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data,
        };

        try {
            const response = await axios.request(config);

            const { data } = response.data;
            const { token, user } = data;

            dispatch(setUser(user));
            dispatch(setToken(token));

            navigate("/home");
            toast.success("Register success");
        } catch (error) {
            toast.error(error?.response?.data?.message);

            dispatch(logout());
        }

        setLoading(false);
    };

export const getProfile =
    (navigate, successRedirect, errorRedirect) =>
    async (dispatch, getState) => {
        const { token } = getState().auth;

        if (!token) {
            // because token is not valid, we will delete it from local storage
            dispatch(logout());

            //  if there are any error redirection we will redirect it
            if (navigate) {
                if (errorRedirect) {
                    navigate(errorRedirect);
                }
            }
            return;
        }

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setUser(data));

            // if there are any success redirection we will redirect it
            if (navigate) {
                if (successRedirect) {
                    navigate(successRedirect);
                }
            }
        } catch (error) {
            dispatch(logout());

            //  if there are any error redirection we will redirect it
            if (navigate) {
                if (errorRedirect) {
                    navigate(errorRedirect);
                }
            }
        }
    };

export const logout = () => (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
};
