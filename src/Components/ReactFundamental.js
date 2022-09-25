function ProfilePicture({ userId }) {
  return (
    <img src={`https://avatars.githubusercontent.com/u/${userId}`} />
  );
 }
  
 function ProfileLink({ username }) {
  return (
    <a href={`https://github.com/${username}`} target="_blank">{username}</a>
  )
 }
  
 function GithubInfo({ username, userId }) {
  return (
    <div className='github-info'>
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  )
 }
export default GithubInfo;