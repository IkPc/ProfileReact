const ProfileCard = ({name, bio, imageUrl}) => {
    return(
        <div className="profile-card">
            <img src={imageUrl} alt={`${name} profile`}/>
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}
export default ProfileCard;