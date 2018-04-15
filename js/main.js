// Function to change the value for each slider
var valueBubble = '<output class="rangeslider__value-bubble" />';
function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    var $valueBubble = $('.rangeslider__value-bubble', context.$range);
    var tempPosition = pos + context.grabPos;
    var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
    }
}

// Function to calculate the value, the final value is calculated by the amount divided by month
function updateFinalPrice() {

    var amontValue = $('#js-rangeslider-0 .rangeslider__value-bubble').text();
    var monthValue = $('#js-rangeslider-1 .rangeslider__value-bubble').text();

    var finalValue = amontValue / monthValue;
    finalValue

    $('#finalValue').html(finalValue.toFixed(0));
    
}

// This is how slider works
$('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function () {
        this.$range.append($(valueBubble));
        updateValueBubble(null, null, this);
        updateFinalPrice();
    },
    onSlide: function (pos, value) {
        updateValueBubble(pos, value, this);
        updateFinalPrice();
    }
});