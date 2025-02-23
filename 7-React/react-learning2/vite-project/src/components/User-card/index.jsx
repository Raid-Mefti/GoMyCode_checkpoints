export default function UserCard({userName, password, role, picture}){
    return(
        <div className="userCard-div">
            <div>
            <img src={picture} alt="" />
            </div>
            <p>@{userName}</p>
            <p>#{password}</p>
            <p>#{role}</p>
            <p>{picture}</p>
        </div>
    )
}