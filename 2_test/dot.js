// Variables
const width = 1900;
const height = 1000;
count = 90;
const rowsize = 45;
dotsize = 1;
dotmin = 0.4;
dotsizebase = 6;

// Calc
var canvases = document.querySelectorAll(".CanvasDots");
canvases.forEach((canvas) => {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    mouseOver(canvas, ctx, false)
    canvas.addEventListener('mousemove', function () {
        mouseOver(canvas, ctx, true);
    });
    canvas.addEventListener('mouseleave', function () {
        mouseOver(canvas, ctx, false);
    });
});

function mouseOver(canvas, ctx, cursor) {
    if (cursor) {
        PosX = getPositionX(event);
        PosY = getPositionY(event);
    } else {
        PosX = -100;
        PosY = -100;
    }

    LocX = canvas.getBoundingClientRect().left;
    LocY = canvas.getBoundingClientRect().top;

    GlobalX = PosX - LocX;
    GlobalY = PosY - LocY;

    var ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    // The counter is used to calculate the color (fake random) if u want to have multiple canvas grids with a different color order just increase or decrease the value 
    //$counter = 6.56;
    $counter = 0.1;
    for ($ix = 4; $ix <= (count - 3); $ix++) {
        for ($iy = 4; $iy <= (count - 3); $iy++) {
            ctx.beginPath();
            $scaler = Math.hypot(GlobalX / rowsize - $ix, GlobalY / rowsize - $iy);
            dotsize = dotsizebase - ($scaler) * 1;
            if (dotsize < dotmin) {
                dotsize = dotmin;
            }
            ctx.arc(rowsize * $ix, rowsize * $iy, dotsize, 0, 2 * Math.PI,!1);
            //$counter = $counter * 1.18;
            $counter = $counter * 1.18;
            //$nr = String($counter).charAt(2);
            ctx.strokeStyle = "#3dec9d";
            ctx.lineWidth = 1;
            ctx.stroke();

        }
    }
}

// 
function getPositionX(event) {
    CursorX = event.clientX;
    return CursorX;
}

function getPositionY(event) {
    CursorY = event.clientY;
    return CursorY;
}