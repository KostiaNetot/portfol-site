import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get('/data.json')
    .catch(err => console.log("Error: ", err));

  if (response && response.data) {
    return response.data;
  }
};

  export const getProject = (id) => {
    return getProjects().then(({ projects }) => {
      return projects.filter(proj => proj.id === id)[0];
    });
  };