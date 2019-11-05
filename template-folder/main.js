
paging();
var j=0;
var page =["a",$('#p1'),$('#p2'),$('#p3'),$('#p4'),$('#p5'),$('#p6'),$('#p7'),$('#p8')];
function paging(){
    $(".next").on('click',next);
}
function next(){
    $('#p1-work').hide("fade");
   j=j+1;
    // $(page[j-1]).hide( "slide", { direction: "up"  }, 500 );
    $(page[j-1]).hide("fade",1000);
    for(let i =0;i<1;i++){
        console.log(page[j]);
        $(page[j]).show("fade",1000);
        if(j===8){
            j=0;
        }

    }
}

function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
        classIndex = document.getElementsByClassName("circ-Text")[classIndex];

    var deg = 180 / txt.length,
        origin = -90;

    txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;position:absolute;color:lightgoldenrodyellow;
        font-size: 36px;
        background:transparent;
        text-shadow:1px 2px 1px blue;
        transform:rotate(${origin}deg);
        transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
    });
}

circularText(" Groff", 150, 0);


const arr = [$('#intro'),$('#work'),$('#about'),$('#contact')];
const li = $('.list');
const contain = $('.contain');


$('a').on("click",open);
$('#cover').on('click', close);

function open(){
    $('.slide').hide("fade",200);
$('#cover').show( "slide", { direction: "up"  }, 500 );
contain.show( "slide", { direction: "up"  }, 500 );
    arr.forEach(function (el) {
        el.hide( "slide", { direction: "down"  }, 500 );
    });

    let clicked = $(this);
    for(let i =0; i < 4; i++){

        if(clicked.data("match") === arr[i].data("match")){
            arr[i].show( "slide", { direction: "up"  }, 500 );
        }
   }}

    function close() {
        $('.contain').hide( "slide", { direction: "down"  }, 500 );
        $('#cover').hide( "slide", { direction: "down"  }, 500 );
        for(let i =0; i < 4; i++) {
            arr[i].hide( "slide", { direction: "down"  }, 500 );
            $('#p1-work').show("fade", 500);
        }
    }





