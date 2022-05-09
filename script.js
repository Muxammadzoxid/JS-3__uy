/*  1 - daraja ******************************************************************************************** */

let num = +prompt('son kiriting!') 

let num1 = +prompt('darajasini kiriting!')

extra = 1
for(let x = 0; x < num1; x++) {
  extra = extra * num
  console.info(extra)
}
alert(extra)




/* 2 - zina ********************************************************************************************** */

let n1 = +prompt('zinani soni')

let n2 = prompt('qator belgisi')

let n3 = prompt('oxirgi belgi')

for(let y = 0; y < n1; y++) {
    n3 = y == 0  ? n3 : n3 + n2
    number = 0  ?  n2 + n3 : n3
    console.info(n3)

    // console.info(n3)
    // n3 = n2 + n3 
}


