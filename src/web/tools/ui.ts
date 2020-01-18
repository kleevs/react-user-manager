import * as $ from 'jquery';

export function attention(e) {
    var $target = $(e.target);
    setTimeout(() => {
        if ($target.filter(":hover")[0]) {
            $target.popover({ animation: true, placement: "bottom" });
            $target.popover("show");
            $target.addClass(`animated shake`);
            setTimeout(function () {
                $target.popover("hide");
                $target.removeClass(`animated shake`);
            }, 4000);
        }
    }, 2000);
}