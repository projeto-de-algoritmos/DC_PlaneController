// Classe para a representação dos pontos
export class Coord {
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
  var xPower = (coordA.x - coordB.x) * (coordA.x - coordB.x);
  var yPower = (coordA.y - coordB.y) * (coordA.y - coordB.y);

  return Math.sqrt(xPower + yPower);
}

function forcaBruta(arr, n) {
  var min = Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      var mem = dist(arr[i], arr[j]);
      if (mem < min) min = mem;
    }
  }

  return min;
}

function valorMinimo(x, y) {
  return x < y ? x : y;
}

function separaProximos(arr, size, d) {
  var min = d;

  arr.sort(menorY);

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size && arr[j].y - arr[i].y < min; ++j) {
      var mem = dist(arr[i], arr[j]);
      if (mem < min) min = mem;
    }
  }

  return min;
}

function maisProximosUtilitario(arr, n) {
  if (n <= 3) return forcaBruta(arr, n);

  var mid = parseInt(n / 2);
  var midCoord = arr[mid];

  var ladoEsquerdo = maisProximosUtilitario(arr, mid);
  var ladoDireito = maisProximosUtilitario(arr + mid, n - mid);

  var d = valorMinimo(ladoEsquerdo, ladoDireito);

  var strip = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    var mem = Math.abs(arr[i].x - midCoord.x);
    if (mem < d) {
      strip.push(arr[i]);
      j++;
    }
  }

  return valorMinimo(d, separaProximos(strip, j, d));
}

export function parDePontosMaisProximos(arr, n) {
  arr.sort(menorX);

  return maisProximosUtilitario(arr, n);
}
