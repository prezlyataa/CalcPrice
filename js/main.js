function average_5() {
    var fields_1 = document.getElementById('inputs_1').getElementsByTagName('input');
    var val_1 = 0;
    for (var i = 0; i < fields_1.length; i++) {
        val_1 +=+ fields_1[i].value;
    };
    val_1 = val_1/fields_1.length;
    document.getElementById('output').innerHTML = 'Average price: ' + val_1.toFixed(2);
}

function average_10() {
    var fields_2 = document.getElementById('inputs_2').getElementsByTagName('input');
    var val_2 = 0;
    for (var i = 0; i < fields_2.length; i++) {
        val_2 +=+ fields_2[i].value;
    };
    val_2 = val_2/fields_2.length;
    document.getElementById('output2').innerHTML = 'Average price: ' + val_2.toFixed(2);
}

var inputs = document.getElementById('inputs');
function create_input() {
    var n = document.getElementById('number').value;
    n = parseInt(n);
    var last_sales = document.createElement('h4');
    last_sales.textContent = 'Input last ' + n + ' sales';
    inputs.appendChild(last_sales);
    for (var i = 0; i < n; i++) {
        var new_input = document.createElement('input');
        new_input.id = 'sold_n';
        inputs.appendChild(new_input);
    }
}

function average_n() {
    var fields = document.getElementById('inputs').getElementsByTagName('input');
    var val = 0;
    for (var i = 0; i < fields.length; i++) {
        val +=+ fields[i].value;
    };
    val = val/fields.length;
    document.getElementById('outputn').innerHTML = 'Average price: ' + val.toFixed(2);
};

function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800);
    return false;
}

