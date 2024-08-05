import Api from "../Services/axios";
import notesRoutes from "../Services/endpoints/notesEndpoint";
Api.interceptors.request.use(
    (config) => {
        if (config && config.url && config?.url.startsWith("/notes")) {
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

export const createNote = async (id,title,content,category,userInfo) => {
    try {
        console.log(title,"hi")
        console.log(userInfo,"hi")
        const res = await Api.post(notesRoutes.createnotes, {id, title,content,category});
        return res

    } catch (error) {
        console.error('Error in signup:', error);
    }
};


export const getnotes = async (id) => {
    try {
        const res = await Api.get(`${notesRoutes.getnotes}/${id}`)

        return res
    } catch (error) {
        console.log(error)
    }
};
export const getNotesbyId = async (id) => {
    try {
        const res = await Api.get(`${notesRoutes.getnotebyid}/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
};
export const updateNotebyId = async (id,userid,title,content,category) => {
    try {
        const res = await Api.put(`${notesRoutes.getnotebyid}/${id}`,{userid,title,content,category})
        return res
    } catch (error) {
        console.log(error)
    }
};

export const deleteNotesByid= async (id,userid) => {
    try {
        const res = await Api.delete(`${notesRoutes.delete}/${id}/${userid}`)
        return res
    } catch (error) {
        console.log(error)
    }
};