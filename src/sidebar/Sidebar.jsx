import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">HAKKIMDA</span>
                <img 
                src="https://images.pexels.com/photos/6944355/pexels-photo-6944355.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6944355.jpg&fm=jpg"
                alt=""
                />
            <p> Lorem ipsum dolor sit amet consectetur
                  </p>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">Takipte Kal!</span>
               <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
               <i className="sidebarIcon fab fa-instagram-square"></i>
               <i className="sidebarIcon fab fa-youtube-square"></i>
               <i className="sidebarIcon fab fa-twitter-square"></i>
               </div>

           </div>
        </div>
    )
}
