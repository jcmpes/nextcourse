import Image from "next/image";
import  { Twitter, Facebook } from "react-social-sharing";
import { YoutubeEmbed } from "../../shared";


function CourseDetail({ title, video, description, content, image }) {
  return (
    <div className="detail-container">
      <div className="detail-image">
        {!image 
          ? null
          : <Image width={150} height={150} src={image} alt=""/>
        }
      </div>
      <div className="detail-title">{title}</div>
      <div className="detail-description">{description}</div>
      <YoutubeEmbed video={video} />
      <div className="detail-content">
        {content}
      </div>
      <div className="deatail-sharer">
        <Facebook link={window.location.href} />
        <Twitter link={window.location.href} />
      </div>
    </div>
  )
}

export default CourseDetail;