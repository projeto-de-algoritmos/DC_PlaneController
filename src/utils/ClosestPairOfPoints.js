// Classe para a representação dos pontos
class Coord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function menorX(coordA, coordB) {
    return coordA.x - coordB.x;
}

function menorY(coordA, coordB) {
    return coordA.y - coordB.y;
}

function dist(coordA, coordB) {
    xPower = (coordA.x - coordB.x) * (coordA.x - coordB.x);
    yPower = (coordA.y - coordB.y) * (coordA.y - coordB.y);

    return Math.sqrt(xPower + yPower);
}

function forcaBruta(arr, n) {
    min = Number.MAX_VALUE;

    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            mem = dist(arr[i], arr[j]);
            if (mem < min)
            min = mem;
        }
    }

    return min;
}

function valorMinimo(x, y) {
    return (x < y) ? x : y;
}

function separaProximos(arr, size, d) {
    min = d;

    arr.sort(menorY);

    for (let i=0; i<size; i++) {
        for (let j=i+1; j<size && (arr[j].y - arr[i].y)<min; ++j) {
            mem = dist(arr[i], arr[j]) 
            if (mem < min) min = mem;
        }
    }

    return min;
}

function maisProximosUtilitario(arr, n) {
    if (n <= 3) return forcaBruta(arr, n);

    mid = parseInt(n/2);
    midCoord = arr[mid];

    ladoEsquerdo = maisProximosUtilitario(arr, mid);
    ladoDireito = maisProximosUtilitario(arr+mid, n-mid);

    d = valorMinimo(ladoEsquerdo, ladoDireito);

    strip = [];
    let j=0;
    for (let i=0; i < n; i++) {
        mem = Math.abs(arr[i].x - midCoord.x);
        if (mem < d) {
            strip.push(arr[i]);
            j++;
        }
    }

    return valorMinimo(d, separaProximos(strip, j, d));
}

function parDePontosMaisProximos(arr, n) {
    arr.sort(menorX);

    return maisProximosUtilitario(arr, n);
}

arr = [
    new Coord(2, 3),
    new Coord(12, 30),
    new Coord(40, 50),
    new Coord(5, 1),
    new Coord(12, 10),
    new Coord(3, 4),
];
n = arr.length;

console.log("A menor distancia é de " + parDePontosMaisProximos(arr, n));