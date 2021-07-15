import React from "react"
import profile from "./profile.js"
import "./Profile.css"
const Profile = () =>{
  const {login,avatar_url,html_url,bio,name,company,blog,location,emaill,public_repo,followers,following} = profile[0]
  return(
    <>
      <div  className="profile-container">
        <div className="header-container">
          <img src={avatar_url}alt="github-url-img"/>
          <h2><a href={html_url}>{login}</a></h2>
          <h4>{bio || ""}</h4>
          <div class="sub-profile-container">
            </div>
        </div>
        <hr/>
        <div className="info-container">
          <div className="sub_container_one">
            1
          </div>
          <div className="sub_container_two">
            2
          </div>
          <div className="sub_container_three">
            3
          </div>
          <div className="sub_container_four">
            4
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile