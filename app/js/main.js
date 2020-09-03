$(function () {
  $(".cat__item").on("mouseleave", function () {
    if ($('.cat__item').hasClass('active')) {
      return false;
    } else {
      $(this).addClass('hovered');
    }

  });

  $('.cat__item').on('click', function () {
    //добавляем класс при нажатии
    $(this).toggleClass('active');
    //убрать возможность выбирать карточку if disabled
    if ($(this).attr('disabled')) {
      $(this).removeClass('hovered');
      $(this).prop('disabled', true);
      $(this).css('pointer-events', 'none');
      $(this).css('opacity', '0.8');
      $(this).find('.cat__item-text').text("Печалька, с курой закончился.").css('color', '#ffff66');
      $(this).find('.item__kg').css('background', '#ccc');

      //Проверка на наличие класса
    } else if ($(this).hasClass('active')) {
      $(this).removeClass('hovered');
      $(this).find('.cat__item-text').text("Филе из цыплят с трюфелями в бульоне.");
      $(this).find('.item__kg').css('background', '#d91667');

    } else {
      $(this).removeClass('hovered');
      $(this).find('.cat__item-text').html('Чего сидишь? Порадуй котэ, <a class="cat__item-link" href="#">купи.</a>');
      $(this).find('.item__kg').css('background', '#1698d9');

    }

  });

});