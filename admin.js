let a=prompt('Id');
if(a=='Admin'){
    let b=prompt('password');
    if(b='TheMaster'){
        document.write('Welcome');
    }else {
        if(b='null'){
            document.write('Cancel');
        }else {
            document.write('Wrong password');
        }
    }
}else {
    if(a='null'){
     document.write('Cancel');
    }else {
        document.write("I don't Know you!")
    }
}