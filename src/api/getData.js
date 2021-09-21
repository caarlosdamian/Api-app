import axios from "axios";
export const getData = async () => {
  const githubUrl = "https://api.github.com/graphql";
  const token = process.env.REACT_APP_API_KEY;
  const oauth = { Authorization: "bearer " + token };
  const query = ` {
  topic(name:"react"){
	id
    name
    relatedTopics(first:10) {
      id
      name
      stargazerCount
      viewerHasStarred 
      relatedTopics(first:10) {
        id
        name
        stargazerCount
        viewerHasStarred    
      }   
    }
  }
}`;

  const response = await axios.post(
    githubUrl,
    { query: query },
    { headers: oauth }
  );
  return response.data;
};
