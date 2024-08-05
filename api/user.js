import Api from "../Services/axios";
import userRoutes from "../Services/endpoints/userEndpoints";

Api.interceptors.request.use(
    (config) => {
        if (config && config.url && config?.url.startsWith("/users")) {
            const userToken = localStorage.getItem("userToken")
            if (userToken) {
                config.headers.Authorization = `Bearer ${userToken}`;
            }
           
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const signup = async (name, email,  password, confirmPassword) => {
    try {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        const res = await Api.post(userRoutes.userSignup, { name, email,  password});
        return res

    } catch (error) {
        console.error('Error in signup:', error);


    }
};


export const userLogin = async (email, password) => {
    try {
        const res = await Api.post(userRoutes.userLogin, { email, password })
        localStorage.setItem("userToken", res?.data.token)

        return res
    } catch (error) {
        console.log(error)
    }
};