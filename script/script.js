$(document).ready(function () {
    // 最初はページのトップにいるという前提で、.top クラスを付与する
    $(".header").addClass("top");

    $(window).scroll(function () {
        // スクロール量を取得する
        var scroll = $(window).scrollTop();

        // スクロール量が 0 以上の場合は、.top クラスを削除し、.not-top クラスを付与する
        if (scroll > 0) {
            $(".header").removeClass("top");
            $(".header").addClass("not-top");
        } else {
            // スクロール量が 0 以下の場合は、.not-top クラスを削除し、.top クラスを付与する
            $(".header").removeClass("not-top");
            $(".header").addClass("top");
        }
    });

    $(".image-container img").click(function (e) {
        e.preventDefault();
        var thumbnail = $(this);
        var fullImage = thumbnail.attr("data-full-image");
        var imageAlt = thumbnail.attr("alt");
        var imageCite = thumbnail.attr("data-image-cite");
        var imageCiteLink = thumbnail.attr("data-image-cite-link");
        var popup = $(`<img src="${fullImage}" alt="${imageAlt}" class="popup">`);
        var popupCite = $(
          `<div class="popup-cite"><cite><a href="${imageCiteLink}">${imageCite}</a></cite></div>`
        );
        var overlay = $('<div class="overlay"></div>');
        overlay.append(popup);
        overlay.append(popupCite);
        $("body").append(overlay);
        overlay.fadeIn(300);
        popup.css({ transform: "translate(-50%, -50%) scale(1)" });
      });

      $(document).on("click", ".overlay", function (e) {
        e.preventDefault();
        if ($(e.target).hasClass("overlay")) {
          $(this).fadeOut(300, function () {
            $(this).remove();
          });
        }
      });

});
