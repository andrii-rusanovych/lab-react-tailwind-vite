import {Post} from "./Post/Post.jsx";
import PropTypes from "prop-types";

const Feed = ({posts}) => (
    <div className="mt-6 max-w-screen-lg mx-auto flex flex-col gap-4 mb-12">
        { posts.map((post,key) => ( <Post post={post} key={key}/>) ) }
    </div>
)

Feed.propTypes = {
    posts: PropTypes.array
}

export {Feed}