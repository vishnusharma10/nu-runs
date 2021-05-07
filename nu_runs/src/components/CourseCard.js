import { Card} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const CourseCard = ({courseLink,courseTitle,id})=>{

    
    return <div class="col-md-6 col-lg-4" style={{display:"inline-block",textAlign:"center"}}>
    <div>
      <div class="speaker">
        <div class="speaker-img" data-triangle=".speaker-overlay">
          <a href="pricing.php">
          <div style={{textAlign:"center"}}>
        <iframe
          width="400"
          height="300"
          src={courseLink}
          title={courseTitle}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
    </div>
          </a>
        </div>
        <h5 style={{display:"inline-block"}}>
          <p style={{color:"white"}}>{courseTitle}</p>
        </h5>
      
      </div>
    </div>
    </div>;
}

export default CourseCard;

