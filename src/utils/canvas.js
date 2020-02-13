function lineTo(canId, x1, y1, x2, y2, lineWidth, strokeStyle, isStartPoint) {
    let sta = [x1, y1];
    let end = [x2, y2];
    let canvas = document.getElementById(canId);
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.translate(0, 0, 0);
    ctx.moveTo(sta[0], sta[1]);
    if (isStartPoint) {
        ctx.arc(sta[0], sta[1], 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.translate(0, 0, 0);
    ctx.moveTo(sta[0], sta[1]);
    ctx.translate(0, 0, 0);
    ctx.lineTo(end[0], end[1]);
    ctx.fill();
    ctx.stroke();
    ctx.save();
}

function clearCanvas(canId) {
    let c = document.getElementById(canId);
    let cxt = c.getContext("2d");
    cxt.clearRect(0, 0, 800, 600);
}


function arrow2(canId, x1, y1, x2, y2, lineWidth, strokeStyle, startPosition, endPosition) {
    let points = [];
    let start = [x1, y1];
    let end = [x2, y2];
    let second = null;
    switch (startPosition) {
        case 'left':
            second = [start[0] - 20, start[1]];
            break;
        case 'top':
            second = [start[0], start[1] - 20];
            break;
        case 'bottom':
            second = [start[0], start[1] + 20];
            break;
        default:
            second = [start[0] + 20, start[1]];
            break;
    }
    let penult = null;
    switch (endPosition) {
        case 'right':
            penult = [end[0] + 20, end[1]];
            break;
        case 'top':
            penult = [end[0], end[1] - 20];
            break;
        case 'bottom':
            penult = [end[0], end[1] + 20];
            break;
        case 'left' :
            penult = [end[0] - 20, end[1]];
            break;
        default:
            penult = [end[0], second[1]];
            break;
    }
    points.push(start);
    points.push(second);
    startPosition = startPosition || 'right';
    endPosition = endPosition || 'left';
    let direction = getDirection(x1, y1, x2, y2);
    switch (direction) {
        case 'lu':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerY = (second[1] - penult[1]) / 2;
                let third = [second[0], second[1] - centerY];
                let forth = [penult[0], second[1] - centerY];
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
        case 'u':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerY = (second[1] - penult[1]) / 2;
                let third = [second[0], second[1] - centerY];
                let forth = [penult[0], second[1] - centerY];
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
        case 'ru':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerX = (penult[0] - second[0]) / 2;
                let third = [second[0] + centerX, second[1]];
                let forth = [second[0] + centerX, penult[1]];
                if (second[0] > third[0]) {
                    second[0] = third[0];
                }
                if (penult[0] < third[0]) {
                    penult[0] = third[0];
                }
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [second[0], penult[1]];
                points.push(third);
            }
            break;
        case 'l':
            if (startPosition === 'right' && endPosition === 'left') {
                let third = [second[0], second[1] - 60];
                let forth = [penult[0], second[1] - 60];
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
        case 'r':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerX = (penult[0] - second[0]) / 2;
                let third = [second[0] + centerX, second[1]];
                let forth = [second[0] + centerX, penult[1]];
                if (second[0] > third[0]) {
                    second[0] = third[0];
                }
                if (penult[0] < third[0]) {
                    penult[0] = third[0];
                }
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let centerX = (penult[0] - second[0]) / 2;
                let third = [second[0] + centerX, second[1]];
                let forth = [second[0] + centerX, penult[1]];
                if (penult[0] < third[0]) {
                    penult[0] = third[0];
                }
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
        case 'ld':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerY = (second[1] - penult[1]) / 2;
                let third = [second[0], second[1] - centerY];
                let forth = [penult[0], second[1] - centerY];
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
        case 'd':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerY = (second[1] - penult[1]) / 2;
                let third = [second[0], second[1] - centerY];
                let forth = [penult[0], second[1] - centerY];
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [second[0] - 90, second[1]];
                let forth = [second[0] - 90, penult[1]];
                points.push(third);
                points.push(forth);
            }
            break;
        case 'rd':
            if (startPosition === 'right' && endPosition === 'left') {
                let centerX = (penult[0] - second[0]) / 2;
                let third = [second[0] + centerX, second[1]];
                let forth = [second[0] + centerX, penult[1]];
                if (second[0] > third[0]) {
                    second[0] = third[0];
                }
                if (penult[0] < third[0]) {
                    penult[0] = third[0];
                }
                points.push(third);
                points.push(forth);
            } else if (startPosition === 'bottom' && endPosition === 'left') {
                if (penult[0] < second[0]) {
                    penult[0] = second[0];
                }
                let third = [second[0], penult[1]];
                points.push(third);
            } else if (startPosition === 'top' && endPosition === 'left') {
                let third = [penult[0], second[1]];
                points.push(third);
            } else if (startPosition === 'right' && endPosition === 'top') {
                let third = [penult[0], second[1]];
                points.push(third);
            }
            break;
    }
    points.push(penult);
    points.push(end);

    let lines = [];
    for (let i = 0; i < points.length; i++) {
        let from = points[i];
        let to = points[i + 1];
        lines.push([from[0], from[1], to[0], to[1]]);
        let isStartPoint = i === 0;
        if (i === points.length - 2) {
            arrowTo(canId, from[0], from[1], to[0], to[1], lineWidth, strokeStyle, isStartPoint);
            break;
        } else {
            lineTo(canId, from[0], from[1], to[0], to[1], lineWidth, strokeStyle, isStartPoint);
        }
    }
    return lines;
}

function arrowTo(canId, x1, y1, x2, y2, lineWidth, strokeStyle, isStartPoint) {
    lineTo(canId, x1, y1, x2, y2, lineWidth, strokeStyle, isStartPoint);
    let sta = [x1, y1];
    let end = [x2, y2];
    let canvas = document.getElementById(canId);
    let ctx = canvas.getContext('2d');
    ctx.translate(end[0], end[1]);
    let ang = (end[0] - sta[0]) / (end[1] - sta[1]);
    ang = Math.atan(ang);
    if (end[1] - sta[1] >= 0) {
        ctx.rotate(-ang);
    } else {
        ctx.rotate(Math.PI - ang);
    }
    ctx.lineTo(-5, -10);
    ctx.lineTo(0, -5);
    ctx.lineTo(5, -10);
    ctx.lineTo(0, 0);
    ctx.fillStyle = strokeStyle;
    ctx.fill();
    ctx.restore();
    ctx.closePath();
}

function getDirection(x1, y1, x2, y2) {
    if (x2 < x1 && y2 < y1) {
        return 'lu';
    }
    if (x2 === x1 && y2 < y1) {
        return 'u';
    }
    if (x2 > x1 && y2 < y1) {
        return 'ru'
    }
    if (x2 < x1 && y2 === y1) {
        return 'l';
    }
    if (x2 > x1 && y2 === y1) {
        return 'r';
    }
    if (x2 < x1 && y2 > y1) {
        return 'ld';
    }
    if (x2 === x1 && y2 > y1) {
        return 'd';
    }
    return 'rd';
}

export {
    arrowTo, lineTo, clearCanvas, getDirection, arrow2
}