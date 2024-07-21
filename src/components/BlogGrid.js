import BlogFilters from './BlogFilters';
import BlogFeatured from './BlogFeatured';
import BlogItem from './BlogItem';

const BlogGrid = ({ posts, categories, showFeaturedPost, showFilters, gradient, getFeaturedImage }) => {
    const limit = showFeaturedPost ? 10 : 9;

    const renderPosts = () => {
        let counter = 0;

        return posts.map(post => {
            counter++;

            if(counter == 1 && showFeaturedPost) {
                return <BlogFeatured post={post} gradient={gradient} getFeaturedImage={getFeaturedImage} />
            }
            else if (counter <= limit) {
                return <BlogItem post={post} getFeaturedImage={getFeaturedImage} />
            }
            else {
                return;
            }
        });
        
    };

    return (
        <div id="bd-blog-grid" className="blog-grid">
			{showFilters && <BlogFilters postCount={posts ? posts.length : '#'} categories={categories} />}
			
			<div className="blog-grid-results">
                {posts && renderPosts()}
			</div>

            {12 > limit && <div className="blog-grid-load-more load-more-container">
                <button className="button">Load More</button>
            </div>}

		</div>
    );
}

export default BlogGrid;