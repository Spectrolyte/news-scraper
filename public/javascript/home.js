$(function() {
    $('.modal').modal();

    $('.add-comment-btn').click(function () {
        console.log('clicked');
        var articleId = $(this).attr('id');
        console.log(articleId);
        // $.ajax({
        //     method: 'POST',
        //     url: '/newcomment',
        //     data: articleId,
        //     success: function () {

        //     }
        // });
    });

    $('#submit-comment-btn').click(function () {
        console.log($('#comment-title').val());
        console.log($('#comment-body').val());

    })
});