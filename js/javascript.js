// var inputt = document.getElementsByName('input').values

// var sbt = document.getElementsByClassName('next_btn')

// $("#frm").click();

function chk(){
    let errorCount=0;
    var first_name = $("#firstname").val();
    var last_name = $('#lastname').val();
    var phone = $('#phoneno').val();
    var offno = $('#offno').val();
    var email = $('#email').val();
//    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    var pass = $('#pass').val();
    var cpass = $('#cpass').val();
    var age = $('#age').val();
    var sex = $('[name=radio]').val();
//    var gender = $('#gender').val();
    var checkbox_sample18 = $('#checkbox_sample18').is(':checked');
    var checkbox_sample19 = $('#checkbox_sample19').is(':checked');
    var checkbox_sample20 = $('#checkbox_sample20').is(':checked');
//    console.log(`checkbox_sample18 ${checkbox_sample18} checkbox_sample19 ${checkbox_sample19} checkbox_sample20 ${checkbox_sample20}`);
    var txt = $('#txt').val();
    var rd1 = $('#residence1').is(':checked');
    var rd2 = $('#residence2').is(':checked');


    if(!first_name){
        //alert("Enter First Name.");
        $('#fn').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(first_name){
        $('#fn').css('opacity',0) ;
        // errorCount+=1;
    }

    if(!last_name){
        //alert("Enter Last Name.");
        $('#ln').css('opacity',1) ;
        // return false;
        errorCount+=1;
        // return false;
    }else if(last_name){
        $('#ln').css('opacity',0) ;
        // errorCount+=1;
    }

    if(!phone){
        //alert("Enter phone number");
        $('#ph').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(phone.length != 10){
        //alert("Phone shopuld have only 10 digits.");
        $('#ph').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(phone == phone.isInteger){
        //alert("Enter Number only");
        $('#ph').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(phone){
        $('#ph').css('opacity',0) ;
    }

    if(!offno){
        //alert("Enter office no.");
        $('#ofn').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(offno){
        $('#ofn').css('opacity',0) ;
    }

    // if(offno == offno.isInteger){
    //     //alert("Enter number only in office no.");
    //     errorCount+=1;
    //     // return false;
    // }

    if(!email){
        //alert("Enter Email Id.");
        $('#em').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(!validateEmail(email)){
        //alert("Enter proper email id.");
        $('#em').css('opacity',1) ;
        errorCount+=1;
        // return false;
    }else if(email){
        $('#em').css('opacity',0) ;
    }

    if(!pass){
        //alert("Enter Password");
        $('#pp').css('opacity',1) ;
        errorCount+=1;
    }else if(pass){
        $('#pp').css('opacity',0) ;
    }
    
    if(!cpass){
        //alert("Enter confirm Paswword.");
        $('#cp').css('opacity',1) ;
        errorCount+=1;
    }else if(!(pass.length >=7)){
        //alert("Password should have 8 char");
        $('#pp').css('opacity',1) ;
        errorCount+=1;
    }else if(pass != cpass){
        //alert("Password not match.");
        $('#cp').css('opacity',1) ;
        errorCount+=1;        
        // return false;
    }else if(cpass){
        $('#cp').css('opacity',0) ;
    }

    if(!age){
        //alert("Enter Password");
        $('#agz').css('opacity',1) ;
        errorCount+=1;
    }else if(age){
        $('#agz').css('opacity',0) ;
    }

    // if(!sex.checked){
    //     //alert("Select gender.")
    //     errorCount+=1;
    // }

    if(!(rd1 || rd2)){
        //alert("Plz select Gender.")
        $('#sx').css('opacity',1) ;
        errorCount+=1;
    }else if(rd1 || rd2){
        $('#sx').css('opacity',0) ;
    }

    if((checkbox_sample18) || (checkbox_sample19) || (checkbox_sample20)){
        $('#ist').css('opacity',0) ;
    }else{
        //alert("Select atleast one box");
        $('#ist').css('opacity',1) ;
        errorCount+=1;
    }

    if(!txt){
        //alert("Enter some text.")
        $('#tt').css('opacity',1) ;
        errorCount+=1;
    }else if(txt){
        $('#tt').css('opacity',0) ;
    }


    if(errorCount>0){
        return false;
    }

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function dd(){
    var bdm = $('#bdm').val();
    var bdd = $('#bdd').val();
    var bdy = $('#bdy').val();


    if(bdd && bdm && bdy){
        var dat = new Date();
        dat.setFullYear(bdy,bdm,bdd);
        var dz = new Date();

    }
}

function calcAge() {
    var bdm = $('#bdm').val();
    var bdd = $('#bdd').val();
    var bdy = $('#bdy').val();
    
    var today = new Date();
    var dbdd = today.getDate() - bdd;
    var mbdm = today.getMonth() - bdm;
    var ybdy = today.getFullYear() - bdy;
    // var birthDate = new Date(bdy,bdm-1,bdd);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // console.log(age);
    // var m = today.getMonth() - birthDate.getMonth();
    // console.log(m);
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    // age--;
    // }
    // if((m === 0 && today.getDate() < birthDate.getDate())) {
    // m-=1;
    // }
    // if(m<0){
    // m+=12; 
    // }
    // $('#age').val(age + '.' + m);
    //return age; 
    if(today.getDate() >= bdd){
        mbdm+=1;
    }
    if((today.getMonth()+1) >= bdm && today.getDate() < bdd){
        ybdy-=1;
    }
    if(mbdm<0){
        mbdm+=12;
    }
    if(mbdm>12){
        mbdm-=12;
    }
    
    $('#age').val((ybdy) + '.' + (mbdm));
}

function calcday(){
    var mm = $('#bdd');
    var bdm = $('#bdm').val();
    var bdd = $('#bdd').val();
    var bdy = $('#bdy').val();
    let bdz = getDaysInMonth(bdm, bdy);
    
    var html;
    for(let i=1;i<=bdz;i++)
    {
        var html = html + "<option value="+i+">"+i+"</option>";
        console.log(html);
    }
    mm.html(html);
}

var getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
}