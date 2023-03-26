

// [youtube video channel: Web dev simplified title:Learn Emmet In 15 Minutes - Double Your HTML Coding Speed] 

// Emmet Cheat Sheet: https://docs.emmet.io/cheat-sheet

//     1. typing '!' and hitting enter will generate the full html5 template in a new html page
//     2. div.class1.class2#id1 will create a div with class attribute with classes class1,class2
//        and id attribute with id, 'id1'  'OR'  you can do .class1.class2#id1 for the same purpose
//     3. If we want to create an element with any attributes we can mention it using a sqare bracket,
//        ex: if we want to create a button with type button you type  button[type="button"] and hit enter
//     4. Or you can do adding a class and id and attribute together by typing as below example
//         ex: button[type="button submit"].class1.button#id1
//     5. You can create nested html elements easily with the help of emmet for example if you want to 
//        create an div with a class and a span inside that div with some id you can do as below
//        .class1>span>#id1
//     6. You can create multiple components inside a main component by using mulitplication symbol "*"
//        ex: if you want three span inside a parent div you can type div>span*3 and hit enter
//     7. You can create text inside the html along with it by addding the text inside a curly braces
//        ex: div>span*3{hello world}
//     8. If we want different data to be printed in each of these inner spans, example if we want to 
//        include the index of that inner element we can do this by adding a dollar sign
//        ex: div>span*3{div $}
//        along with above you can also do 01,02,03.. type of numbering with help of two '$' signs
//        ex: div>span*3{div $$}
//        also you can add class with it as below
//        div>span*3.class-$${div $$}
//     9. you can add different type of sibblings in a parent div as exapmle below
//        ex: div>footer.footer1+header.myHeader+nav.nav
//     10. If we want a header and footer and nav inside a parent div and we also want another div inside
//         the header we can do as below
//         ex:  div>header>div^footer.footer+nav.myNav
//         or we can do the same thing as given below
//         ex: >(header>div)+footer.footer+nav.myNav
//     11. You can utlise this for creating a form group as below
//         ex: form:post>.group>(label+input[type="text"])+(label+input[type="number"])