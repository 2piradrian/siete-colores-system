import { env } from "./env";
import axios from "axios";

export default class HTTPClient {
    private readonly baseURL: string;
    private readonly secret: string;

    constructor() {
        this.baseURL = env.BASE_URL!!;
        this.secret = env.API_SECRET!!;
    }

    public async get(url: string, params?: any) {
        try {
            const response = await axios.get(this.baseURL + url, {
                headers: {
                    Authorization: this.secret
                },
                params: params
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching data: " + error);
            return error; 
        }
    }

    public async post(url: string, params?: any) {
        try {
            const response = await axios.post(this.baseURL + url, params, {
                headers: {
                    Authorization: this.secret
                }
            });
            return response.data;
        }
        catch (error) {
            console.error("Error posting data: " + error);
            return error;
        }
    }

    public async put(url: string, params?: any) {
        try {
            const response = await axios.put(this.baseURL + url, params, {
                headers: {
                    Authorization: this.secret
                },
                params: params
            });
            return response.data;
        }
        catch (error) {
            console.error("Error putting data: " + error);
            return error;
        }
    }

    public async delete(url: string, params?: any) {
        try {
            const response = await axios.delete(this.baseURL + url, {
                headers: {
                    Authorization: this.secret
                },
                params: params
            });
            return response.data;
        }
        catch (error) {
            console.error("Error deleting data: " + error);
            return error;
        }
    }
};