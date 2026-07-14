export default {
  id: "openai-tasc",
  priority: 25,
  alias: "openai-tasc",
  display: {
    name: "OpenAI TASC",
    icon: "auto_awesome",
    color: "#0F766E",
    textIcon: "OT",
    website: "https://platform.openai.com",
    notice: {
      apiKeyUrl: "https://platform.openai.com/api-keys",
    },
  },
  category: "apikey",
  authType: "apikey",
  authModes: ["apikey"],
  transport: {
    baseUrl: "http://160.250.134.143:2455/backend-api/codex",
    forceStream: true,
  },
  models: [],
  passthroughModels: true,
};
