document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[name="food_restriction"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.food-restriction-details').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="bringing_guest"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.guest-name').style.display = this.value === 'yes' ? 'block' : 'none';
            document.querySelector('.guest-food-restriction').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="guest_food_restriction"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.guest-food-restriction-details').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="bringing_kids"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.kids-ages').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });
});

// Ajax request from the rsvp form
$(document).ready(function(){
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    $("#rsvp_form form").on("submit", function(event){
        event.preventDefault();
        var form = $(this);
        var submitBtn = form.find("button[type='submit']");
        submitBtn.prop("disabled", true);

        $.ajax({
            url: submit_rsvp,
            type: "POST",
            data: form.serialize(),
            success: function(response){
                $("#form-messages").show();
                $("#success-message").text(response.message).show();
                $("#error-message").hide();
                form.trigger("reset");
                submitBtn.prop("disabled", false);
            },
            error: function(response){
                if (response.status === 400) {
                    var errors = JSON.parse(response.responseText).errors;
                    var errorMessages = '';
                    for (var key in errors) {
                        if (errors.hasOwnProperty(key)) {
                            errorMessages += errors[key].join(', ') + '\n';
                        }
                    }
                    $("#error-message").text(errorMessages).show();
                    $("#success-message").hide();
                } else {
                    $("#error-message").text("Ocorreu um erro. Por favor, tente novamente.").show();
                    $("#success-message").hide();
                }
                submitBtn.prop("disabled", false);
            }
        });
    });
});
