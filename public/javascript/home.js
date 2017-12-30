$(function() {
    $('.modal').modal();

    // clicking the add comment button triggers the modal for comment inputs
        // attaches data-articleId attribute to pass on the articleId to be stored with the comment upon submission
    $('.add-comment-btn').click(function () {
        var articleId = $(this).attr('id');
        $('#submit-comment-btn').attr('data-articleId', articleId);

        $.ajax({
            method: 'GET',
            url: '/comment/' + articleId,
            success: function (dbArticle) {
                console.log(dbArticle);
                $('#comment-title').val(dbArticle.comment.title);
                $('#comment-body').val(dbArticle.comment.body);
            }
        })
    });

    $('#submit-comment-btn').click(function () {
        var articleId = $(this).attr('data-articleId');
        var commentTitle = $('#comment-title').val();
        var commentBody = $('#comment-body').val();
        $.ajax({
            method: 'PUT',
            url: '/updatecomment/' + articleId,
            data: {
                title: commentTitle,
                body: commentBody
            },
            success: function () {
                // empty input fields
                $('#comment-title').val('');
                $('#comment-body').val('');
            }
        })

    });
});