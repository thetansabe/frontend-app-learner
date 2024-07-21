import axios from "axios";

export const getChatbotHistories = async (userId) => {
  const history = await axios.get(
    `${process.env.CHAT_BOT_URL}/messages/history/${userId}`
  );
  return {
    today: JSON.parse(history.data["today"]),
    thisWeek: JSON.parse(history.data["thisWeek"]),
    thisMonth: JSON.parse(history.data["thisMonth"]),
  };
};

export const sendMessage = async (payload) => {
  const response = await axios.post(
    `${process.env.CHAT_BOT_URL}/completion`,
    payload
  );
  console.log(
    `call ${process.env.CHAT_BOT_URL}/completion with message: ${{
      ...payload,
    }}`
  );
  return response.data;
};

export const getMessages = async (sessionId) => {
  const messages = await axios.get(
    `${process.env.CHAT_BOT_URL}/messages/${sessionId}`
  );
  return messages.data;
};

export const uploadKnowledge = async (formDataPayload, setProgress) => {
  const config = {
    onUploadProgress: function (progressEvent) {
      const progress =
        Math.round((progressEvent.loaded * 100) / progressEvent.total) - 20;
      setProgress(progress);
    },
  };

  const response = await axios.post(
    `${process.env.CHAT_BOT_URL}/upload_files`,
    formDataPayload,
    config
  );

  return response;
};

export const trainFiles = async (userId) => {
  const response = await axios.get(
    `${process.env.CHAT_BOT_URL}/train_files/${userId}`
  );
  return response;
};

export const extractImage = async (form) => {
  const response = await axios.post(
    `${process.env.CHAT_BOT_URL}/extract_image`,
    form
  );
  return response;
};

export const trainImage = async (content) => {
  const response = await axios.post(
    `${process.env.CHAT_BOT_URL}/train_image`,
    null,
    { params: { content } }
  );
  return response;
};
