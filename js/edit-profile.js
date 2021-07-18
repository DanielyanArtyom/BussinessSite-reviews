

$(document).ready(function () {
    const selectedAll = document.querySelectorAll(".selected");
    selectedAll.forEach(selected => {
        const optionsContainer = selected.previousElementSibling

        const optionsList = optionsContainer.querySelectorAll('.option')

        selected.addEventListener('click', () => {
            if (optionsContainer.classList.contains('active')) {
                optionsContainer.classList.remove('active')
            } else {
                let currentActive = document.querySelector('.options-container.active')
                if (currentActive) {
                    currentActive.classList.remove('active')
                }
                optionsContainer.classList.add('active');
            }
        })

        optionsList.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerHTML = option.querySelector('label').innerHTML;
                optionsContainer.classList.remove('active')
            })
        })
    })

    // Open DropDowns

    $('.dropdown-btn').click(function () {
        if ($(this).hasClass("open")) {
            $('.dropdown-btn').removeClass("open")
            $(".dropdown-block__content").removeClass("active-block")
        }
        else {
            $('.dropdown-btn').removeClass("open")
            $(".dropdown-block__content").removeClass("active-block")
            let dataAttr = $(this).attr("data-dropdown")
            $(this).addClass("open")
            $(`#${dataAttr}`).addClass("active-block")
        }

    })


    // Change User Image

    function readURL(input, type) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#userAvatar').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#userImg").change(function () {
        readURL(this);
    })

});