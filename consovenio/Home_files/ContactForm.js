$(document).ready(function () {

    console.log('contact form - Init');

    //$('.clock.sender').mouseout(function () {
    //   // $(this).animate({ 'zoom': 1.2 }, 400);
    //   $(this).animate({ 'zoom': 0.9 }, 350);
    //   $(this).animate({ 'zoom': 1 }, 350);
    //});

    $('.cloock.sender').hover(function () {
        $(this).animate({ 'zoom': 1.1 }, 350);
        $(this).animate({ 'zoom': 1 }, 350);
    });

    $('.cloock.sender').click(function () {

        var canSend = false;
        var dialog = '';

        console.log('contact form - Btn click');

        var email = $("input.input-email").val();
        var name = $("input.input-name").val();
        var comment = $("textarea.text-comment").val();

        console.log('contact form - email: ' + email);
        console.log('contact form - name: ' + name);
        console.log('contact form - comment: ' + comment);


        if (email.length === 0) {
            dialog = "Oops, you are missing a required field. ";
            canSend = false;


        } else {

            var validation = isMailValid(email);
            console.log('validation: ' + validation);

            if (!validation) {


                dialog = "You have entered an invalid e-mail address. Please try again. ";
                canSend = false;


            } else {
                canSend = true;

                if (name.length === 0) {
                    dialog = "Oops, you are missing a required field. ";
                    canSend = false;

                } else {
                    canSend = true;

                    if (comment.length === 0) {
                        dialog = "Oops, you are missing a required field. ";
                        canSend = false;
                    } else {
                        canSend = true;
                    }

                }

            }

        }

       

       


        if (canSend) {

            jsonItem = {};
            jsonItem["name"] = name;
            jsonItem["email"] = email;
            jsonItem["comment"] = comment;

            $.ajax({
                type: "POST",
                url: "https://pdconn.magnusco.net/api/IncomingMessages",
                data: JSON.stringify(jsonItem),
                contentType: 'application/json',
                success: function (res) {

                    var $container = $("html,body");
                    var $scrollTo = $('.cont-intro');

                    $container.animate({
                        scrollTop: $scrollTo.offset().top,
                        scrollLeft: 0
                    }, 450);

                    //console.log(res);
                    console.log("Added");

                    $('.js-contact-box').fadeOut();
                    dialog = "Thank you for getting in touch! We appreciate you contacting Consovenio. One of our colleagues will get back in touch with you soon! Have a great day!";


                    $('.contact-box-dialog').hide();
                    $('.contact-box-dialog').removeClass('error').addClass('success');
                    $('.contact-box-dialog').text(dialog);
                    $('.contact-box-dialog').fadeIn("slow");


                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(xhr, status, err.toString());
                }.bind(this)
            });

        } else {

            var $container = $("html,body");
            var $scrollTo = $('.cont-intro');

            $container.animate({
                scrollTop: $scrollTo.offset().top,
                scrollLeft: 0
            }, 450);


            $('.contact-box-dialog').hide();
            $('.contact-box-dialog').removeClass('success').addClass('error');
            $('.contact-box-dialog').text(dialog);
            $('.contact-box-dialog').fadeIn("slow");

        }

    });


    console.log('contact form - Dispose');

});

function isMailValid(email) {

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);

}