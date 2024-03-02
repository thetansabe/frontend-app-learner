import axios from 'axios';

export const getChatbotHistories = async (userId) => {
    const history = await axios.get(`${process.env.CHAT_BOT_URL}/messages/history/${userId}`);
    return {
        "today" : JSON.parse(history.data["today"]),
        "thisWeek" : JSON.parse(history.data["thisWeek"]),
        "thisMonth" : JSON.parse(history.data["thisMonth"]),
    }
};

export const sendMessage = async (payload) => {
    const response = await axios.post(`${process.env.CHAT_BOT_URL}/completion`, payload);
    console.log(
        `call ${process.env.CHAT_BOT_URL}/completion with message: ${{...payload}}`
      );
    return response.data;
}

export const getMessages = async (sessionId) => {
    const messages = await axios.get(`${process.env.CHAT_BOT_URL}/messages/${sessionId}`);
    return messages.data;
}

export const uploadKnowledge = async (formDataPayload) => {
    const response = await axios.post(`${process.env.CHAT_BOT_URL}/upload_files`, formDataPayload);
    return response.data;
}