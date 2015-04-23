/**
 * Created by Tarcito on 2015.
 */

var count = 0;
$(document).ready(function () {
        $('#entrada-items').keypress(function (event) {
            var iValue = $("entrada-items").value;
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                $("#itens-aprender").append('<li>' + $(this).val() + '    <button type="button"' +
                    'class="btn btn-xs btn-success ' + 'class_mover' + count + '">' + 'Mover</button>' + ' <button type="button"' +
                    'class="btn btn-xs btn-danger ' + 'class_remover' + count + '">' + 'Remover</button>' + '</li>');
                $(".class_mover" + count).click(function () {
                    $(this).parent().appendTo("#itens-aprendidos");
                    $(this).remove();
                })
                $(".class_remover" + count).click(function () {
                    $(this).parent().remove();
                })
                count++;
            }
        });
    }
);