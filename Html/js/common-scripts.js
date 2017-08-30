window.mobileAndTabletCheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

$(document).ready(function () {
    var isMobile = mobileAndTabletCheck();
    $('html').addClass(isMobile ? 'mobile-device' : 'desktop-device');

    $('.menu-toggle').on('click', function (e) {
        e.preventDefault();

        var $target = $('html');

        $target.toggleClass('is-header-menu-visible');
    });

    $('.welcome-tabs a').on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget).closest('li'),
            tab = $target.data('tab');

        $('[data-tab]').removeClass('is-active');
        $('[data-tab="' + tab + '"]').addClass('is-active');
    });

    $('.advert-search-control-show-options').on('click', function (e) {
        e.preventDefault();

        var $target = $('.advert-search-left-part');

        $target.toggleClass('is-active');
        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.advert-map-view .btn').on('click', function (e) {
        e.preventDefault();

        var $target = $('.advert-map-wrapper');

        $target.toggleClass('is-active');
        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('#advert-map-close').on('click', function (e) {
        e.preventDefault();

        var $target = $('.advert-map-wrapper');

        $target.toggleClass('is-active');
        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.advert-search-control-show-map').on('click', function (e) {
        e.preventDefault();

        var $target = $('.advert-map-wrapper');

        $target.toggleClass('is-active');
        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.dropdown .dropdown-selected').on('click', function (e) {
        var $target = $(e.target).closest('.dropdown');

        $target.toggleClass('is-active');
        $('.dropdown').not($target).removeClass('is-active');

        if ($target.hasClass('dropdown-switch')) {
            $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
            $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
        }
    });

    $('.dropdown .dropdown-item').on('click', function (e) {
        var $target = $(e.target),
            $dropdown = $target.closest('.dropdown'),
            $selected = $dropdown.children('.dropdown-selected'),
            $input = $dropdown.prev('input[type=hidden]'),
            text = $target.html(),
            value = $target.data('value');

        $target.addClass('is-selected').siblings().removeClass('is-selected');
        $dropdown.removeClass('is-active');
        $input.val(value).trigger('change');
        $selected.html(text);
    });

    $('body').on('click', function (e) {
        if ($(e.target).closest('.dropdown').length == 0) {
            $('.dropdown.is-active').removeClass('is-active');
        }
    });

    $('.switch-group .switch-item').on('click', function (e) {
        var $target = $(e.target);

        $target.addClass('is-selected').siblings().removeClass('is-selected');
    });

    $('.dropdown-switch .switch-apply .btn').on('click', function (e) {
        e.preventDefault();

        var $target = $(e.target).closest('.dropdown-switch');

        $target.removeClass('is-active');
        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.advert-search-filter .filter-trigger').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $target = $('.dropdown.dropdown-switch .dropdown-selected');

        $target.trigger('click');
    });

    $('.dropdown-currency .dropdown-selected').on('click', function (e) {
        e.preventDefault();

        var $target = $(e.currentTarget).parent();

        $('body').toggleClass('is-overlapped', $target.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.dropdown-currency .currency-item').on('click', function (e) {
        var $target = $(e.target),
            $dropdown = $target.closest('.dropdown'),
            $selected = $dropdown.children('.dropdown-selected'),
            $items = $dropdown.find('.currency-item'),
            $input = $dropdown.prev('input[type=hidden]'),
            text = $target.children('b').html(),
            value = $target.data('value');

        $items.removeClass('is-selected');
        $target.addClass('is-selected');
        $dropdown.removeClass('is-active');
        $input.val(value).trigger('change');
        $selected.html(text);
        $('body').toggleClass('is-overlapped', $dropdown.hasClass('is-active'));
        $target.closest('#header, #content').toggleClass('is-active-block', $target.hasClass('is-active'));
    });

    $('.support-page').on('click', '.support-question', function (e) {
        e.preventDefault();

        var $target = $(e.currentTarget),
            $item = $target.closest('.support-item'),
            $block = $target.closest('.support-block'),
            $items = $block.children();

        $item.toggleClass('is-active').siblings().removeClass('is-active');

        if ($items.filter('.is-active').length === 0) {
            $items.eq(0).addClass('is-active');
        }
    });

    $('[data-popup-target]').on('click', function (e) {
        e.preventDefault();

        var $target = $(e.currentTarget),
            popup = $target.data('popupTarget'),
            $popup = $('[data-popup="' + popup + '"]');

        if ($popup.length) {
            $popup.addClass('is-opened');
            $('body').addClass('popup-opened');
        }
    });

    $('.popup .popup-close').on('click', function (e) {
        e.preventDefault();

        var $target = $(e.target),
            $popup = $target.closest('.popup'),
            popupName = $popup.data('popup');

        $popup.removeClass('is-opened');
        $('body').removeClass('popup-opened');
        //force redraw button which opened this popup because sometimes it's cut
        $('[data-popup-target="' + popupName + '"]').hide().show(0);
    });

    $('.rating-editable')
        .on('mouseenter', '.star', function (e) {
            e.preventDefault();

            var $target = $(e.target),
                rating = $target.index() + 1,
                $stars = $target.closest('.rating').find('.star');

            $stars.removeClass('star-full star-half star-empty');
            $stars
                .slice(0, rating).addClass('star-full')
                .siblings().addClass('star-empty');
        })
        .on('click', '.star', function (e) {
            e.preventDefault();

            var $target = $(e.target),
                rating = $target.index() + 1,
                $rating = $target.closest('.rating');

            $rating.data('rating', rating);
        })
        .on('mouseleave', function (e) {
            e.preventDefault();

            var $target = $(e.currentTarget),
                rating = $target.data('rating'),
                $stars = $target.find('.star');

            $stars.removeClass('star-full star-half star-empty');
            $stars
                .slice(0, rating).addClass('star-full')
                .siblings().addClass('star-empty');
        });

    if ($.fn.slider) {
        function updateRangeInputs(min, max) {
            $('#min-price').val(min);
            $('#max-price').val(max);
        }

        var $slider = $('.form-range-slider').slider({
            range: true,
            min: 0,
            max: 100000,
            values: [950, 8700],
            slide: function (event, ui) {
                updateRangeInputs(ui.values[0], ui.values[1]);
            }
        });
        updateRangeInputs($slider.slider('values', 0), $slider.slider('values', 1));
    }

    if ($('.policy-page').length) {
        $(window)
            .on('scroll', function (e) {
                var scrolled = $(window).scrollTop(),
                    isFixed = scrolled >= 300;

                $('.policy-list').toggleClass('is-fixed', isFixed);

                var $currentItem = $('.policy-description h2 a[name]').filter(function () {
                    return ($(this).offset().top + 30) <= scrolled;
                }).last();

                if ($currentItem.length) {
                    $('.policy-list li a[href="#' + $currentItem.attr('name') + '"]').trigger('click');
                } else {
                    $('.policy-list li a').first().trigger('click');
                }
            })
            .trigger('scroll');

        $('.policy-list').on('click', 'li a', function (e) {
            $(e.currentTarget)
                .closest('li').addClass('is-active')
                .siblings().removeClass('is-active');
        });
    }

    if ($('#welcome-slider').length) {
        $('#welcome-slider').owlCarousel({
            singleItem: true,
            responsive: true,
            navigation: false,
            autoPlay: true,
            //slideSpeed: 500,
            //paginationSpeed: 800,
            //rewindSpeed: 1000,
            rewindNav: true,
            stopOnHover: false,
            mouseDrag: false,
            touchDrag: false,
            transitionStyle: 'fade',
            theme: 'owl-cargo-theme'
        });
    }

    if ($('.payment-methods').length) {
        $('.payment-methods .payment-method').on('click', function (e) {
            e.preventDefault();

            $(e.currentTarget).addClass('is-active').siblings().removeClass('is-active');
        });
    }

    var $advertProlongBtn = $('.btn-advert-prolong');
    if ($advertProlongBtn.length) {
        $('.advert-grid :checkbox').on('change', function (e) {
            var $checkboxes = $('.advert-grid :checkbox:checked');

            if ($checkboxes.length) {
                $advertProlongBtn.removeAttr('disabled');
            } else {
                $advertProlongBtn.attr('disabled', 'disabled');
            }

            var $checkbox = $(e.target),
                $row = $checkbox.closest('.advert-grid-row');

            $row.toggleClass('is-selected', $checkbox.is(':checked'));
        }).trigger('change');
    }
});
