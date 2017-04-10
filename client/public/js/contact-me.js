const routes = require('../../../common/routes');

$(function () {
    $('body').on('input propertychange', '.floating-label-form-group', function (e) {
        $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
    }).on('focus', '.floating-label-form-group', function () {
        $(this).addClass('floating-label-form-group-with-focus');
    }).on('blur', '.floating-label-form-group', function () {
        $(this).removeClass('floating-label-form-group-with-focus');
    });


    $('#contactForm input,#contactForm textarea').jqBootstrapValidation({
        preventSubmit: true,
        // filters out non-visible elements
        filter: function () {
            return $(this).is(':visible');
        },
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behavior

            $('#submit').each(function () {
                $(this).prop('disabled', true);
                $(this).text('Sending, please wait...');
            });

            // gets name for success/failure message
            var name = $('input#name').val().trim();
            var firstName = name;
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ')[ 0 ];
            }
            $.post(routes.MAIL_SEND, $form.serialize())
                .done(function (data) {
                    // Success message
                    $('#result').html('<div class=\'alert alert-success\'>');
                    $('#result > .alert-success').html('<button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-hidden=\'true\'>&times;')
                        .append('</button>');
                    $('#result > .alert-success')
                        .append('<strong>' + firstName + ', your message has been sent.</strong>');
                    $('#result > .alert-success')
                        .append('</div>');
                })
                .fail(function (jqReq, text) {
                    // Fail message
                    $('#result').html('<div class=\'alert alert-danger\'>');
                    $('#result > .alert-danger').html('<button type=\'button\' class=\'close\' data-dismiss=\'alert\' aria-hidden=\'true\'>&times;')
                        .append('</button>');
                    $('#result > .alert-danger').append('<strong>Sorry, ' + firstName + ', it seems that my mail server is not responding. Please try again later!');
                    $('#result > .alert-danger').append('</div>');
                })
                .always(function () {
                    //clear all fields
                    $form.find('input, textarea').val('').focus().focusout();

                    $form.find('.floating-label-form-group').each(function () {
                        $(this).removeClass('floating-label-form-group-with-value');
                        $(this).removeClass('floating-label-form-group-with-focus');
                    });

                    $('#submit').each(function () {
                        $(this).prop('disabled', false);
                        $(this).text($(this).data('title'));
                    });

                    $('body').scrollTop($('#result').position().top);
                });
        }
    });

});


/*When clicking on Full hide fail/success boxes */
// $('#name').focus(function () {
//     $('#result').html('');
// });
