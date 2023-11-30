import PropTypes from "prop-types";

const Post = (props) => {
    const {
        firstName, lastName, email, comment, color
    } = props.post;

    return (
        <div style={{backgroundColor: color}} className="px-4 py-2">
            <div>
                name: {firstName} {lastName}
            </div>
            <div>
                email: {email}
            </div>
            <div>
                comment: {comment}
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        comment: PropTypes.string,
        color: PropTypes.string
    })
}


export {Post}