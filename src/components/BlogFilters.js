const BlogFilters = ({ postCount, categories }) => {
    const renderFilters = () => {
        return categories.map(category => {
            if(category.count == 0) {
                return;
            }

            return (
                <label className="input-checkbox">
                    <input type="checkbox" name="category" value="" /> {category.name.replace('&amp;', '&')}
                </label>
            );
        });
    };

    return (
        <div className="blog-grid-menu">
            <h2 className="blog-grid-meta-results-count">{postCount} Results</h2>
            <form id="filters-form" className="filters-form">
                <fieldset>   
                    <legend className="sr-only">Categories</legend>
                    <div className="filters-menu">
                        {categories && renderFilters()}
                    </div>
                </fieldset> 
            </form>
        </div>
    );
}

export default BlogFilters;