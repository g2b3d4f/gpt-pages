function convertQuoteContainers() {
    var quoteContainers = document.getElementsByClassName("quote-container");

    for (var i = 0; i < quoteContainers.length; i++) {
        var quoteContainer = quoteContainers[i];
        var quoteContent = quoteContainer.innerHTML;
        var quoteCite = quoteContainer.getAttribute("data-cite");
        var quoteLink = quoteContainer.getAttribute("data-link")
        quoteContainer.innerHTML = `
        <blockquote>
            <i class="fas fa-quote-left"></i>
            <div class="quote-content">
                ${quoteContent}
                <cite>
                    <a href="${quoteLink}">${quoteCite}</a>
                </cite>
            </div>
        </blockquote>
        `;

    }
}

function convertImageContainers() {
    var imageContainers = document.getElementsByClassName("image-container");
    for (var i = 0; i < imageContainers.length; i++) {
        var imageContainer = imageContainers[i];
        var imgSrc = imageContainer.getAttribute("data-src");
        var imgAlt = imageContainer.getAttribute("data-alt");
        var imgComment = imageContainer.getAttribute("data-comment");
        imageContainer.innerHTML = `
        <img src="${imgSrc}" alt="${imgAlt}">
        <p>${imgComment}</p>
        `;
    }
}

convertQuoteContainers();
convertImageContainers();
