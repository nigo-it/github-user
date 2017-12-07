const getGithubUser = (username) =>
  fetch(`https://api.github.com/users/${username}`).then((res) => res.json())

export default getGithubUser

