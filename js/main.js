function average_5() {
    var p1,p2,p3,p4,p5,result;
    p1 = document.getElementById('sold_1').value;
    p2 = document.getElementById('sold_2').value;
    p3 = document.getElementById('sold_3').value;
    p4 = document.getElementById('sold_4').value;
    p5 = document.getElementById('sold_5').value;
    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);
    p4 = parseInt(p4);
    p5 = parseInt(p5);

        result = (p1 + p2 + p3 + p4 + p5) / 5;
        document.getElementById('output').innerHTML = 'Average price: ' + result;
}

function average_10() {
    var p11,p22,p33,p44,p55,p6,p7,p8,p9,p10,result2;
    p11 = document.getElementById('sold_11').value;
    p22 = document.getElementById('sold_22').value;
    p33 = document.getElementById('sold_33').value;
    p44 = document.getElementById('sold_44').value;
    p55 = document.getElementById('sold_55').value;
    p6 = document.getElementById('sold_6').value;
    p7 = document.getElementById('sold_7').value;
    p8 = document.getElementById('sold_8').value;
    p9 = document.getElementById('sold_9').value;
    p10 = document.getElementById('sold_10').value;
    p11 = parseInt(p11);
    p22 = parseInt(p22);
    p33 = parseInt(p33);
    p44 = parseInt(p44);
    p55 = parseInt(p55);
    p6 = parseInt(p6);
    p7 = parseInt(p7);
    p8 = parseInt(p8);
    p9 = parseInt(p9);
    p10 = parseInt(p10);
    result2 = (p11+p22+p33+p44+p55+p6+p7+p8+p9+p10)/10;
    document.getElementById('output2').innerHTML = 'Average price: ' + result2;
}

var inputs = document.getElementById('inputs');
function create_input() {
    var n = document.getElementById('number').value;
    n = parseInt(n);
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
    document.getElementById('outputn').innerHTML = 'Average price: ' + val;
};

