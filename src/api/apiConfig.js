export const githubUrl = "https://api.github.com/graphql";
const token = process.env.REACT_APP_API_KEY;
export const oauth = { Authorization: "bearer " + token };
