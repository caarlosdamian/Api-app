export const query = ` {
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
      relatedTopics(first:3)  {
        id
        name
      }
      }   
    }
  }
}`;
