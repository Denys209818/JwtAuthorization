import sender from './axiosCreate'

class axiosService 
{
    send(url, data) 
    {
        return sender.post(url, data);
    }
}

export default new axiosService();