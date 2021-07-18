
$(document).ready(function () {
    // user Img

    function readURL(input, type) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#video').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#videoInput").change(function () {
        readURL(this, type = "video");
    })

    // vars
    let values = document.getElementById('blah').getBoundingClientRect()
    let result = document.querySelector(".result"),
        img_w = values.width,
        img_h = values.height,
        save = document.querySelector(".save"),
        upload = document.querySelector("#imgInp"),
        cropper = "";

    // on change show image with crop options
    upload.addEventListener("change", (e) => {
        if (e.target.files.length) {
            // start file reader
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target.result) {
                    // create new image
                    let img = document.createElement("img");
                    img.id = "image";
                    img.src = e.target.result;
                    // clean result before
                    result.innerHTML = "";
                    // append new image
                    result.appendChild(img);
                    // show save btn and options
                    // save.classList.remove("hide");
                    // options.classList.remove("hide");
                    // init cropper
                    cropper = new Cropper(img, {
                        viewMode: 2,
                        aspectRatio: 16 / 4,
                        rotable: false,
                        zoomable: false,
                        zoomOnTouch: false,
                        zoomOnWheel: false,
                        cropBoxResizable: false,
                        toggleDragModeOnDblclick: false,
                        dragMode: 'none'
                    });
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // save on click
    save.addEventListener("click", (e) => {
        e.preventDefault();
        // get result to data uri
        let imgSrc = cropper
            .getCroppedCanvas({
                width: img_w // input value
            })
            .toDataURL();
        $('#blah').attr('src', imgSrc);
    });


    // Video photo input

    // Cropper js

    // import 'cropperjs/dist/cropper.css';

    // check if he add working hours

    $('input[type=radio][name=businessHours]').change(function () {
        if (this.value == 'businessHours-Yes') {
            $('.businessHours-list').addClass('list-active')
        } else {
            $('.businessHours-list').removeClass('list-active')
        }
    });

    // check if he add videos

    $('input[type=radio][name=video]').change(function () {
        if (this.value == 'video-Yes') {
            $('.videoUpload').addClass('video-active')
        } else {
            $('.videoUpload').removeClass('video-active')
        }
    });

    // Form selects
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


    // isOpen

    $('.businessHours-element').each(function (index, el) {
        $(this).find('.checkmark-check').on('change', function () {
            if ($(this).is(':checked')) {
                $(el).addClass('businessHours-element--disabled')
                $(el).find('.business-element__time-input').addClass('business-element__time-input--disabled')
            } else {
                $(el).removeClass('businessHours-element--disabled ')
                // $(el).find('business-element__time-input').attr('disabled', 'enabled');
                $(el).find('.business-element__time-input').removeClass('business-element__time-input--disabled')
            }
        })



    })


    // Modal
    // open modal

    $(".openModal").click(function (element, index) {
        $(this).click(function () {
            $(`.bg-modal`).addClass("opened")
            // /   / close modal on Click BTn
            $(`.bg-modal`).find(".modal__close").click(() => {
                $(`.bg-modal`).removeClass("opened")
            })
        })
    })

    // OutSide click
    $(".bg-modal").on('click', function (event) {
        if (!$(event.target).closest('.modal').length) {
            $(".bg-modal").removeClass("opened");
        }
    });


    // Tags

    let tags = ['hello', 'hi', 'this is the way']
    const input = document.querySelectorAll('.form__input--tags')
    input.forEach(element => {
        const tagify = new Tagify(element, {
            enforceWhitelist: true,
            whitelist: tags,
        })
    })

    const manualInput = document.querySelectorAll('.form__input--manual-tags')
    manualInput.forEach(element => {
        const tagify = new Tagify(element, {

        })
    })
})