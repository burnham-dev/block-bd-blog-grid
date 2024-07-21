(function($) {


    $(document).ready(function() {
        bdAjaxLoadMore();

        $('.filters-form').on('change', 'input', function(e) {
            bdFilterProjects();
        });

    });

    function bdAjaxLoadMore() {
        $('#load-more-bd-blog').on('click', function(e) {
            e.preventDefault();

            const button = $(this);
            const limit = button.closest('.blog-grid').data('limit');
            const offset = button.closest('.blog-grid').data('offset');
            const filters =  button.closest('.blog-grid').find('.filters-form');
            let currentPage = button.closest('.blog-grid').data('page');

            currentPage++;

            $.ajax({
                type: 'POST',
                url: phpVars.ajax_url,
                dataType: 'html',
                method: 'POST',
                data: {
                    action: 'bd_blog_load_more',
                    security: phpVars.security,
                    paged: currentPage,
                    filters: filters.serialize(),
                    limit: limit,
                    offset: offset
                },
                beforeSend:function(xhr){
                    button.text('Loading...');
                },
                error: function(request, status, error) {
                    $('.blog-grid').find('.blog-grid-results').parent().prepend('<div class="error">' + error) + '</div>';
                    button.text('Load More');
                },
                success: function (res) {
                    const parsedRes = JSON.parse(res);
          
                    if(!parsedRes.success) {
                        $('.blog-grid').find('.blog-grid-results').parent().prepend('<div class="error">' + parsedRes.data) + '</div>';
                        return;
                    }
                    
                    button.closest('.blog-grid').data('page', currentPage)
                    $('.blog-grid').find('.blog-grid-results').append(parsedRes.data);

                    if(((currentPage * limit) + offset) >= $('[data-post-count]').val()) {
                        $('.blog-grid').find('.load-more-container').fadeOut(300);
                    } else {
                        button.text('Load More');
                    }
                }
            });
        });
    }

    function bdFilterProjects() {

        const filters =  $('#filters-form');
        const button = $('#load-more-bd-blog');
        const limit = filters.closest('.blog-grid').data('limit');
        const offset = filters.closest('.blog-grid').data('offset');

        $.ajax({
            type: 'POST',
            url: phpVars.ajax_url,
            dataType: 'html',
            method: 'POST',
            data: {
                action: 'filter_bd_blog_posts',
                security: phpVars.security,
                filters: filters.serialize(),
                paged: 1,
                limit: limit + offset,
                offset: offset
            },
            beforeSend:function(xhr){
                filters.closest('.blog-grid').addClass('loading');
                button.text('Loading...');
            },
            error: function(request, status, error) {
                $('.blog-grid').find('.blog-grid-results').parent().prepend('<div class="error">' + error) + '</div>';
                button.text('Load More');
            },
            success: function(res) {
                const parsedRes = JSON.parse(res);

                if(!parsedRes.success) {
                    $('.blog-grid').find('.blog-grid-results').parent().prepend('<div class="error">' + parsedRes.data) + '</div>';
                    return;
                }

                $('.blog-grid').find('.blog-grid-results').replaceWith(parsedRes.data); 

                const postCount = $('.blog-grid-results').data('post-count');
                $('[data-post-count]').val(postCount);

                if(postCount == 1) {
                    $('.blog-grid-meta-results-count').html(postCount + ' Result');
                } else {
                    $('.blog-grid-meta-results-count').html(postCount + ' Results');
                }
                
                if(limit + offset >= postCount) {
                    $('.blog-grid').find('.load-more-container').fadeOut(300);
                } else {
                    $('.blog-grid').find('.load-more-container').fadeIn(300);
                    button.text('Load More');
                }

                button.closest('.blog-grid').data('page', 1);
            }
        });
    }

})(jQuery);