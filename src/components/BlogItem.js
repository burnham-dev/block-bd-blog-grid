import placeholder from './images/placeholder.png';

const BlogItem = ({ post, getFeaturedImage }) => {
    const postDate = new Date(post.date).toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'});
    const media = getFeaturedImage(post.featured_media);

    return (
        <div className="blog-grid-results-item">
            <div className="blog-grid-results-item__image"><img src={media ? media.source_url : placeholder} /></div>
            <span className="blog-grid-results-item__date">{postDate}</span>
            <h3 className="blog-grid-results-item__title">{post.title.rendered}</h3>
            <button className="blog-grid-results-item__link button">Read More</button>
        </div>
    );
}
export default BlogItem;