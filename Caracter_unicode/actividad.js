//1    texto = " $%$&&%$$$$%&& "
//     /\p{Sc}/

//2    texto = "  alejo  1234   $$$%&"
//      /\p{Z}|\u000A|\u0009/

//3    texto = "MAMA amama Τίτο κάνε μπάνιο     "
//     /\p{Ll}|\p{Lu}/

//4    texto = " alejo 1234  $$$%&"
//     /\p{L}|\p{N}/


let texto = " alejo 1234  $$$%&";
 let expresion = /\p{Z}|\u000A|\u0009/gu;
console.log(texto.match(expresion))