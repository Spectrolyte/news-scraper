$(function() {
    $('.modal').modal();

    // clicking the add comment button triggers the modal for comment inputs
        // attaches data-articleId attribute to pass on the articleId to be stored with the comment upon submission
    $('.add-comment-btn').click(function () {
        var articleId = $(this).attr('id');
        $('#submit-comment-btn').attr('data-articleId', articleId);
    });

    $('#submit-comment-btn').click(function () {
        var articleId = $(this).attr('data-articleId');
        var commentTitle = $('#comment-title').val();
        var commentBody = $('#comment-body').val();
        $.ajax({
            method: 'PUT',
            url: '/updatecomment',
            data: {
                articleId: articleId,
                title: commentTitle,
                body: commentBody
            },
            success: function () {
                console.log('worked');
            }
        })

    });
});