import Avatar from '../Avatar/Avatar';
import './feed.scss'

const Feed = () => {
    return ( <div className="feed">
        {/* date */}
        <div className="feed_date">
            <Avatar />
            <p>03/10/2023</p>
        </div>
        {/* img */}
        <div className="feed_img">
            <img src="https://source.unsplash.com/collection/happy-people" alt="feed_image" />
        </div>
        {/* content */}
        <div className="feed_content">
            <p>nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod</p>
        </div>
    </div> );
}
 
export default Feed;