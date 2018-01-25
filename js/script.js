var html = '';

/* This is the basic "for" loop structure you start with.
for ( ) {

} */

for ( var i = 1; i <=10; i +=1) { /* WTM: "var i = 1" is only run once and i is just shorthand for the var name ... "i <=10" means that as long as the variable is <=10, loop will run ... "i +=1" runs AFTER THE CODE IN THE {CODE BLOCK} runs. */
    html += '<div>' + i + '</div>';
}
document.write(html);

/* You could even change "i <=10" to "i <=100" or more. */