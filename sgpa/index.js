let s1tot=0;
let s2tot=0;
let s3tot=0;
let s4tot=0;
let sem1_sgpa=20;
let sem2_sgpa=20;
let sem3_sgpa=22;
let sem4_sgpa=23;
function sem1()
{
    let s1=document.getElementById('s1').value;
    let s2=document.getElementById('s2').value;
    let s3=document.getElementById('s3').value;
    let s4=document.getElementById('s4').value;
    let s5=document.getElementById('s5').value;
    let s6=document.getElementById('s6').value;
    let s7=document.getElementById('s7').value;
    let result=0;
    if(s1=='o'||s1=='O'){
        result+=10*3;
    }
    else if(s1=='a+'||s1=='A+'){
        result+=9*3;
    }
    else if(s1=='a'||s1=='A'){
        result+=8*3;
    }
    else if(s1=='b+'||s1=='B+'){
        result+=7*3;
    }
    else if(s1=='b'||s1=='B'){
        result+=6*3;
    }
    let result1=0;
    if(s2=='o'||s2=='O'){
        result1+=10*2;
    }
    else if(s2=='a+'||s2=='A+'){
        result1+=9*2;
    }
    else if(s2=='a'||s2=='A'){
        result1+=8*2;
    }
    else if(s2=='b+'||s2=='B+'){
        result1+=7*2;
    }
    else if(s2=='b'||s2=='B'){
        result1+=6*2;
    }
    let result2=0
    if(s3=='o'||s3=='O'){
        result2+=10*3;
    }
    else if(s3=='a+'||s3=='A+'){
        result2+=9*3;
    }
    else if(s3=='a'||s3=='A'){
        result2+=8*3;
    }
    else if(s3=='b+'||s3=='B+'){
        result2+=7*3;
    }
    else if(s3=='b'||s3=='B'){
        result2+=6*3;
    }
    let result3=0
    if(s4=='o'||s4=='O'){
        result3+=10*2;
    }
    else if(s4=='a+'||s4=='A+'){
        result3+=9*2;
    }
    else if(s4=='a'||s4=='A'){
        result3+=8*2;
    }
    else if(s4=='b+'||s4=='B+'){
        result3+=7*2;
    }
    else if(s4=='b'||s4=='B'){
        result3+=6*2;
    }
    let result4=0;
    if(s5=='o'||s5=='O'){
        result4+=10*2;
    }
    else if(s5=='a+'||s5=='A+'){
        result4+=9*2;
    }
    else if(s5=='a'||s5=='A'){
        result4+=8*2;
    }
    else if(s5=='b+'||s5=='B+'){
        result4+=7*2;
    }
    else if(s5=='b'||s5=='B'){
        result4+=6*2;
    }
    let result5=0;
    if(s6=='o'||s6=='O'){
        result5+=10*4;
    }
    else if(s6=='a+'||s6=='A+'){
        result5+=9*4;
    }
    else if(s6=='a'||s6=='A'){
        result5+=8*4;
    }
    else if(s6=='b+'||s6=='B+'){
        result5+=7*4;
    }
    else if(s6=='b'||s6=='B'){
        result5+=6*4;
    }
    let result6=0;
    if(s7=='o'||s7=='O'){
        result6+=10*4;
    }
    else if(s7=='a+'||s7=='A+'){
        result6+=9*4;
    }
    else if(s7=='a'||s7=='A'){
        result6+=8*4;
    }
    else if(s7=='b+'||s7=='B+'){
        result6+=7*4;
    }
    else if(s7=='b'||s7=='B'){
        result6+=6*4;
    }
    s1tot=result+result1+result2+result3+result4+result5+result6;
    document.getElementById('sem1').innerHTML=s1tot/20;
}

function sem2()
{
    let s1=document.getElementById('s21').value;
    let s2=document.getElementById('s22').value;
    let s3=document.getElementById('s23').value;
    let s4=document.getElementById('s24').value;
    let s5=document.getElementById('s25').value;
    let s6=document.getElementById('s26').value;
    let s7=document.getElementById('s27').value;
    let result=0;
    if(s1=='o'||s1=='O'){
        result+=10*3;
    }
    else if(s1=='a+'||s1=='A+'){
        result+=9*3;
    }
    else if(s1=='a'||s1=='A'){
        result+=8*3;
    }
    else if(s1=='b+'||s1=='B+'){
        result+=7*3;
    }
    else if(s1=='b'||s1=='B'){
        result+=6*3;
    }
    let result1=0;
    if(s2=='o'||s2=='O'){
        result1+=10*2;
    }
    else if(s2=='a+'||s2=='A+'){
        result1+=9*2;
    }
    else if(s2=='a'||s2=='A'){
        result1+=8*2;
    }
    else if(s2=='b+'||s2=='B+'){
        result1+=7*2;
    }
    else if(s2=='b'||s2=='B'){
        result1+=6*2;
    }
    let result2=0
    if(s3=='o'||s3=='O'){
        result2+=10*4;
    }
    else if(s3=='a+'||s3=='A+'){
        result2+=9*4;
    }
    else if(s3=='a'||s3=='A'){
        result2+=8*4;
    }
    else if(s3=='b+'||s3=='B+'){
        result2+=7*4;
    }
    else if(s3=='b'||s3=='B'){
        result2+=6*4;
    }
    let result3=0
    if(s4=='o'||s4==
    'O'){
        result3+=10*4;
    }
    else if(s4=='a+'||s4=='A+'){
        result3+=9*4;
    }
    else if(s4=='a'||s4=='A'){
        result3+=8*4;
    }
    else if(s4=='b+'||s4=='B+'){
        result3+=7*4;
    }
    else if(s4=='b'||s4=='B'){
        result3+=6*4;
    }
    let result4=0;
    if(s5=='o'||s5=='O'){
        result4+=10*2;
    }
    else if(s5=='a+'||s5=='A+'){
        result4+=9*2;
    }
    else if(s5=='a'||s5=='A'){
        result4+=8*2;
    }
    else if(s5=='b+'||s5=='B+'){
        result4+=7*2;
    }
    else if(s5=='b'||s5=='B'){
        result4+=6*2;
    }
    let result5=0;
    if(s6=='o'||s6=='O'){
        result5+=10*3;
    }
    else if(s6=='a+'||s6=='A+'){
        result5+=9*3;
    }
    else if(s6=='a'||s6=='A'){
        result5+=8*3;
    }
    else if(s6=='b+'||s6=='B+'){
        result5+=7*3;
    }
    else if(s6=='b'||s6=='B'){
        result5+=6*3;
    }
    let result6=0;
    if(s7=='o'||s7=='O'){
        result6+=10*2;
    }
    else if(s7=='a+'||s7=='A+'){
        result6+=9*2;
    }
    else if(s7=='a'||s7=='A'){
        result6+=8*2;
    }
    else if(s7=='b+'||s7=='B+'){
        result6+=7*2;
    }
    else if(s7=='b'||s7=='B'){
        result6+=6*2;
    }
    s2tot=result+result1+result2+result3+result4+result5+result6;
    document.getElementById('sem2').innerHTML=s2tot/20;
}
function sem3()
{
    let s1=document.getElementById('s31').value;
    let s2=document.getElementById('s32').value;
    let s3=document.getElementById('s33').value;
    let s4=document.getElementById('s34').value;
    let s5=document.getElementById('s35').value;
    let s6=document.getElementById('s36').value;
    let s7=document.getElementById('s37').value;
    let result=0;
    if(s1=='o'||s1=='O'){
        result+=10*4;
    }
    else if(s1=='a+'||s1=='A+'){
        result+=9*4;
    }
    else if(s1=='a'||s1=='A'){
        result+=8*4;
    }
    else if(s1=='b+'||s1=='B+'){
        result+=7*4;
    }
    else if(s1=='b'||s1=='B'){
        result+=6*4;
    }
    let result1=0;
    if(s2=='o'||s2=='O'){
        result1+=10*3;
    }
    else if(s2=='a+'||s2=='A+'){
        result1+=9*3;
    }
    else if(s2=='a'||s2=='A'){
        result1+=8*3;
    }
    else if(s2=='b+'||s2=='B+'){
        result1+=7*3;
    }
    else if(s2=='b'||s2=='B'){
        result1+=6*3;
    }
    let result2=0
    if(s3=='o'||s3=='O'){
        result2+=10*3;
    }
    else if(s3=='a+'||s3=='A+'){
        result2+=9*3;
    }
    else if(s3=='a'||s3=='A'){
        result2+=8*3;
    }
    else if(s3=='b+'||s3=='B+'){
        result2+=7*3;
    }
    else if(s3=='b'||s3=='B'){
        result2+=6*3;
    }
    let result3=0
    if(s4=='o'||s4==
    'O'){
        result3+=10*5;
    }
    else if(s4=='a+'||s4=='A+'){
        result3+=9*5;
    }
    else if(s4=='a'||s4=='A'){
        result3+=8*5;
    }
    else if(s4=='b+'||s4=='B+'){
        result3+=7*5;
    }
    else if(s4=='b'||s4=='B'){
        result3+=6*5;
    }
    let result4=0;
    if(s5=='o'||s5=='O'){
        result4+=10*3;
    }
    else if(s5=='a+'||s5=='A+'){
        result4+=9*3;
    }
    else if(s5=='a'||s5=='A'){
        result4+=8*3;
    }
    else if(s5=='b+'||s5=='B+'){
        result4+=7*3;
    }
    else if(s5=='b'||s5=='B'){
        result4+=6*3;
    }
    let result5=0;
    if(s6=='o'||s6=='O'){
        result5+=10*2;
    }
    else if(s6=='a+'||s6=='A+'){
        result5+=9*2;
    }
    else if(s6=='a'||s6=='A'){
        result5+=8*2;
    }
    else if(s6=='b+'||s6=='B+'){
        result5+=7*2;
    }
    else if(s6=='b'||s6=='B'){
        result5+=6*2;
    }
    let result6=0;
    if(s7=='o'||s7=='O'){
        result6+=10*2;
    }
    else if(s7=='a+'||s7=='A+'){
        result6+=9*2;
    }
    else if(s7=='a'||s7=='A'){
        result6+=8*2;
    }
    else if(s7=='b+'||s7=='B+'){
        result6+=7*2;
    }
    else if(s7=='b'||s7=='B'){
        result6+=6*2;
    }
    s3tot=result+result1+result2+result3+result4+result5+result6;
    document.getElementById('sem3').innerHTML=s3tot/22;
}
function sem4()
{
    let s1=document.getElementById('s41').value;
    let s2=document.getElementById('s42').value;
    let s3=document.getElementById('s43').value;
    let s4=document.getElementById('s44').value;
    let s5=document.getElementById('s45').value;
    let s6=document.getElementById('s46').value;
    let s7=document.getElementById('s47').value;
    let s8=document.getElementById('s48').value;
    let result=0;
    if(s1=='o'||s1=='O'){
        result+=10*3;
    }
    else if(s1=='a+'||s1=='A+'){
        result+=9*3;
    }
    else if(s1=='a'||s1=='A'){
        result+=8*3;
    }
    else if(s1=='b+'||s1=='B+'){
        result+=7*3;
    }
    else if(s1=='b'||s1=='B'){
        result+=6*3;
    }
    console.log(result);
    let result1=0;
    if(s2=='o'||s2=='O'){
        result1+=10*3;
    }
    else if(s2=='a+'||s2=='A+'){
        result1+=9*3;
    }
    else if(s2=='a'||s2=='A'){
        result1+=8*3;
    }
    else if(s2=='b+'||s2=='B+'){
        result1+=7*3;
    }
    else if(s2=='b'||s2=='B'){
        result1+=6*3;
    }
    console.log(result1);
    let result2=0
    if(s3=='o'||s3=='O'){
        result2+=10*3;
    }
    else if(s3=='a+'||s3=='A+'){
        result2+=9*3;
    }
    else if(s3=='a'||s3=='A'){
        result2+=8*3;
    }
    else if(s3=='b+'||s3=='B+'){
        result2+=7*3;
    }
    else if(s3=='b'||s3=='B'){
        result2+=6*3;
    }
    console.log(result2);
    let result3=0
    if(s4=='o'||s4==
    'O'){
        result3+=10*2;
    }
    else if(s4=='a+'||s4=='A+'){
        result3+=9*2;
    }
    else if(s4=='a'||s4=='A'){
        result3+=8*2;
    }
    else if(s4=='b+'||s4=='B+'){
        result3+=7*2;
    }
    else if(s4=='b'||s4=='B'){
        result3+=6*2;
    }
    console.log(result3);
    let result4=0;
    if(s5=='o'||s5=='O'){
        result4+=10*2;
    }
    else if(s5=='a+'||s5=='A+'){
        result4+=9*2;
    }
    else if(s5=='a'||s5=='A'){
        result4+=8*2;
    }
    else if(s5=='b+'||s5=='B+'){
        result4+=7*2;
    }
    else if(s5=='b'||s5=='B'){
        result4+=6*2;
    }
    console.log(result4);
    let result5=0;
    if(s6=='o'||s6=='O'){
        result5+=10*3;
    }
    else if(s6=='a+'||s6=='A+'){
        result5+=9*3;
    }
    else if(s6=='a'||s6=='A'){
        result5+=8*3;
    }
    else if(s6=='b+'||s6=='B+'){
        result5+=7*3;
    }
    else if(s6=='b'||s6=='B'){
        result5+=6*3;
    }
    console.log(result5);
    let result6=0;
    if(s7=='o'||s7=='O'){
        result6+=10*3;
    }
    else if(s7=='a+'||s7=='A+'){
        result6+=9*3;
    }
    else if(s7=='a'||s7=='A'){
        result6+=8*3;
    }
    else if(s7=='b+'||s7=='B+'){
        result6+=7*3;
    }
    else if(s7=='b'||s7=='B'){
        result6+=6*3;
    }
    console.log(result6);
    let result7=0;
    if(s7=='o'||s7=='O'){
        result7+=10*4;
    }
    else if(s7=='a+'||s7=='A+'){
        result7+=9*4;
    }
    else if(s7=='a'||s7=='A'){
        result7+=8*4;
    }
    else if(s7=='b+'||s7=='B+'){
        result7+=7*4;
    }
    else if(s7=='b'||s7=='B'){
        result7+=6*4;
    }
    console.log(result7);
    s4tot=result+result1+result2+result3+result4+result5+result6+result7;

    document.getElementById('sem4').innerHTML=s4tot/23;
}
function cgpa(){
    let count=0;
    const ans = [s1tot, s2tot, s3tot, s4tot];
    for(let i=0;i<ans.length;i++){
        if(ans[i]>0){
            count++;
        }
    }
    document.getElementById('cgpa').innerHTML=(s1tot+s2tot+s3tot+s4tot)/85;
}