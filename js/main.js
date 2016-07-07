$(function () {

    // �ֲ�ͼ
    if ($('.slider-container').length > 0) {

        var currentIndex = 0;
        var timer = setTimeout(showNext, 5000);

        /**
         * ��ʾָ���ֲ�ͼ
         * @param index
         */
        function showSlider(index) {
            // �����ʱ��
            clearTimeout(timer);
            timer = setTimeout(showNext, 5000);

            currentIndex = index;
            $('.slider-marks span').each(function () {
                if ($('.slider-container .slider-images img').eq($(this).attr('data-index')).css('opacity') == 1) {
                    $('.slider-container .slider-images img').eq($(this).attr('data-index')).animate({opacity: 0}, 1000);
                    $(this).css('background-color', 'rgba(255, 255, 255, 0.3)');
                }
            });
            $('.slider-container .slider-images img').eq(index).animate({opacity: 1}, 1000);
            $('.slider-marks span').eq(index).css('background-color', 'rgba(255, 255, 255, 1)');
        }

        /**
         * ��ʾ��һ���ֲ�ͼ
         */
        function showNext() {
            if (currentIndex === $('.slider-marks span').length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            showSlider(currentIndex);
        }

        /**
         * ��ʾǰһ���ֲ�ͼ
         */
        function showPrev() {
            if (currentIndex === 0) {
                currentIndex = $('.slider-marks span').length - 1;
            } else {
                currentIndex--;
            }
            showSlider(currentIndex);
        }

        // ��ʼ��
        $('.slider-container .slider-images img').eq(0).css('opacity', 1);
        $('.slider-marks span').eq(0).css('background-color', 'rgba(255, 255, 255, 1)');
        $('.slider-marks span').each(function (index) {
            $(this).attr('data-index', index);
        });

        // ���Բ��
        $('.slider-marks span').bind('click', function () {
            showSlider($(this).attr('data-index'));
        });

        // ǰһҳ��һҳ
        $('.slider-pointer-left').bind('click', showPrev);
        $('.slider-pointer-right').bind('click', showNext);
    }
});