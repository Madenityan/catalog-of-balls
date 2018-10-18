$(document).ready(function() {

    $(".plus-btn").on("click",function(){
        let $input = $(this).parent().parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.minus-btn').on("click",function(){
        let $input = $(this).parent().parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.rose-button').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=rose]").show();
    });

    $('.yellow-button').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=yellow]").show();
    });

    $('.green-button').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=green]").show();
    });

    $('.orange-button').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=orange]").show();
    });

    $('.set-balls').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=kit]").show();
    });

    $('.all-balls').on("click",function(){
        $("[class*=goods]").show();
    });

    $('.one-ball').on("click",function(){
        $("[class~=goods]").hide();
        $("[class*=one-by-one]").show();
    });

    $('.sort-poor').on("click",function() {
        $('li[data-price]').sort(function (a, b) {
            let x = parseInt($(a).data('price'));
            let y = parseInt($(b).data('price'));
            return (x > y) ? (x < y) ? 1 : 1 : -1;
        }).appendTo('#page-content');
    });

    $('.sort-higher').on("click",function() {
        $('li[data-price]').sort(function (a, b) {
            let x = parseInt($(a).data('price'));
            let y = parseInt($(b).data('price'));
            return (x < y) ? (x >y) ? 1 : 1 : -1;
        }).appendTo('#page-content');
    });
});






















