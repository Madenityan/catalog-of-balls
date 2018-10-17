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

    $('.price').on("click",function (minPrice, maxPrice) {
        $("#page-content li").filter(function() {
            let price = parseInt($(this).data("price"), 75);
            console.log(minPrice);
            return price >= minPrice && price <= maxPrice;
        }).show(); //НЕ ПРАЦЮЄ
    });

});



