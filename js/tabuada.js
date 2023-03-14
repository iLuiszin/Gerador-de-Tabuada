function Tabuada() {
  var num = Number(document.getElementById('num').value)
  var end = Number(document.getElementById('end').value)
  var result = ''
  var res = document.getElementById('answer')
  var i = 0

  if (!num || !end) {
    window.alert('[ERRO] Os valores devem ser preenchidos')
  } else {
    res.innerHTML = `A tabuada do ${num} é: <br>`
    do {
      result = i * num
      res.innerHTML += `${i} X ${num} = ${result} <br> `
      i++
    } while (i <= end)
  }
}
