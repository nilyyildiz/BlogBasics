import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className ="headerTitleLg">Astral Queen</span>
                <span className="headerTitleSm">BLOG</span>
            </div>
            <img
            className="headerImg"
            src=" https://images.pexels.com/photos/4040567/pexels-photo-4040567.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4040567.jpg&fm=jpg"
            alt=""
            />
       
        </div>

    );
}
