(function() {
  'use strict'
  var $body = document.body,
      $menu_trigger = $body.querySelector('.menu-trigger'),
      $content = $body.querySelector('.content'),
      $menu_bar = $body.querySelector('.menu-bar'),
      $menu_bar_rect = $menu_bar.getBoundingClientRect(),
      $menu_bar_width = $menu_bar_rect.right - $menu_bar_rect.left,
      $font_size = (parseInt(getComputedStyle($body).fontSize, 10) << 1),
      flag_style = false;
  
  $menu_trigger.addEventListener('click', function() {
    if (!flag_style) {
      $content.style.cssText = 'left: ' + ($menu_bar_width - $font_size) + 'px;';
      $menu_trigger.style.cssText = 'left: ' + ($menu_bar_width - $font_size + 10) + 'px;';
    } else {
      $content.style.cssText = '';
      $menu_trigger.style.cssText = '';
    }
    flag_style = !flag_style;
    $content.classList.toggle('border-radius');
  }); 
})();

/*В данном скрипте вычисляется ширина меню (класс "menu-bar").
Так как у меню может появляться полоса прокрутки, необходимо сдвинуть блок ".content" на такую величину, чтобы не было видно полосы прокрутки. Для этого у элементов "li" правый padding задаём с запасом на величину 2rem. Затем необходимо узнать размер шрифта "body" и вычесть из ширины меню удвоенное значение размера шрифта "body". На полученное значение сдвигаем блок ".content".*/