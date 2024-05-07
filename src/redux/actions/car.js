import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/car";

export const getCars = (setLoading) => async (dispatch, getState) => {
    const { token } = getState().auth;

    setLoading(true);

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCars(data));
    } catch (error) {
        if (error?.response?.status === 401) {
            toast.error("Unauthorized access");
        }

        if (error?.response?.data?.message === "jwt malformed") {
            toast.error("Please login to access this page");
        }

        toast.error(error?.response?.data?.message);
    } finally {
        setLoading(false);
    }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setCar(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/home");
    }
};

export const addCar =
    (
        navigate,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        availableAt,
        setLoading
    ) =>
    async (dispatch, getState) => {
        setLoading(true);
        const { token } = getState().auth;

        let formData = new FormData();
        formData.append("plate", plate);
        formData.append("manufacture", manufacture);
        formData.append("model", model);
        formData.append("image", image);
        formData.append("rent_per_day", rentPerDay);
        formData.append("capacity", capacity);
        formData.append("description", description);
        formData.append("transmission", transmission);
        formData.append("available", available);
        formData.append("type", type);
        formData.append("year", year);
        formData.append("availableAt", availableAt);

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: formData,
        };

        try {
            await axios.request(config);

            toast.success("Car added successfully");
            navigate("/home");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

export const updateCar =
    (
        navigate,
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        availableAt,
        setLoading
    ) =>
    async (dispatch, getState) => {
        setLoading(true);
        const { token } = getState().auth;

        console.log(id);

        let formData = new FormData();
        formData.append("plate", plate);
        formData.append("manufacture", manufacture);
        formData.append("model", model);
        formData.append("image", image);
        formData.append("rent_per_day", rentPerDay);
        formData.append("capacity", capacity);
        formData.append("description", description);
        formData.append("transmission", transmission);
        formData.append("available", available);
        formData.append("type", type);
        formData.append("year", year);
        formData.append("availableAt", availableAt);

        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: formData,
        };

        try {
            await axios.request(config);

            toast.success("Car updated successfully");
            dispatch(getCars(setLoading));
            navigate("/home");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

export const deleteCar = (id, setLoading) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        await axios.request(config);

        toast.success("Car deleted successfully");
        dispatch(getCars(setLoading));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
