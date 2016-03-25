## Вертикальная навигация в мобильных приложениях
Вертикальное меню, которое в неактивном состоянии находится под основным контентом. При вызове меню, контент сдвигается вправо на ширину меню.

<p align="center" >
<img src="https://github.com/sergeyerofeev/vertical-navigation/blob/master/image/image1.png" width="340" height="700"/>
</p>

<p align="center" >
<img src="https://github.com/sergeyerofeev/vertical-navigation/blob/master/image/image2.png" width="671" height="357"/>
</p>

### Описание
Меню представляет собой маркированный список. На самый верхний элемент ul подключаем класс "menu-bar".
Меню поддерживает вертикальную прокрутку, поэтому количество элементов li может быть не ограниченным.
Так как слишком длинные названия пунктов меню или большое количество вложенных элементов ul li увеличивают ширину меню, необходимо учитывать что основной контент может выйти за границы экрана.
### Подключение
``` html
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/menu.js"></script>
```
font.css содержит описание стилей для шрифтовых иконок, файлы которых находятся в папке fonts.
