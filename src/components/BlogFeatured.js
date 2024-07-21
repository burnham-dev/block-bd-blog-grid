const BlogFeatured = ({ post, getFeaturedImage, gradient }) => {
    const postDate = new Date(post.date).toLocaleDateString('en-us', {month: 'long', day: 'numeric', year: 'numeric'});
    const media = getFeaturedImage(post.featured_media);

    return (
        <div className="blog-grid-results-featured blog-grid-results-item" style={{backgroundImage: media ? 'url(' + media.source_url + ')' : 'none' }}>
            <style
            dangerouslySetInnerHTML={{
                __html: `
                .blog-grid-results-featured:before,
                .blog-grid-results-featured:after {
                    background-image: ${gradient} !important;
                }
                `
            }}
            ></style>
            <div className="blog-grid-results-featured__content">
                <div className="blog-grid-results-featured__content-wrap">
                    <span className="blog-grid-results-featured__date blog-grid-results-item__date">{postDate}</span>
                    <h3 className="blog-grid-results-featured__title blog-grid-results-item__title">{post.title.rendered}</h3>
                    <button className="blog-grid-results-featured__link blog-grid-results-item__link button">Read More</button>
                </div>
            </div>
        </div>
    );
}

export default BlogFeatured;