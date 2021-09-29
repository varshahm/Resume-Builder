function addNewTsField()
{
   // console.log("adding field");
   let newNode = document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('TsField');
   newNode.classList.add('mt-1');
   newNode.setAttribute('placeholder','Enter here')
   let Tsob = document.getElementById('Ts')
   let TsAddButtonOb=document.getElementById('TsAddButton');
   Tsob.insertBefore(newNode, TsAddButton);
}

function addNewEdField()
{
   // console.log("adding field");
   let newNode = document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('EdField');
   newNode.classList.add('mt-1');
   newNode.setAttribute('placeholder','Enter here')
   let Eduob = document.getElementById('Edu')
   let EdAddButtonOb=document.getElementById('EdAddButton');
   Eduob.insertBefore(newNode, EdAddButton);
}

function addNewProField()
{
   // console.log("adding field");
   let newNode = document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('ProField');
   newNode.classList.add('mt-1');
   newNode.setAttribute('placeholder','Enter here')
   let Proob = document.getElementById('Pro')
   let ProAddButtonOb=document.getElementById('ProAddButton');
   Proob.insertBefore(newNode, ProAddButton);
}

function addNewIntField()
{
   // console.log("adding field");
   let newNode = document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('InternField');
   newNode.classList.add('mt-1');
   newNode.setAttribute('placeholder','Enter here')
   let Intob = document.getElementById('Int')
   let InternAddButtonOb=document.getElementById('InternAddButton');
   Intob.insertBefore(newNode, InternAddButton);
}

function generateResume(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1')

    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('mailT').innerHTML = document.getElementById('emailField').value;
    document.getElementById('phT').innerHTML = document.getElementById('phoneField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    document.getElementById('linkT').innerHTML = document.getElementById('linkField').value;
    document.getElementById('hobT').innerHTML = document.getElementById('hobbyField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;


    let Edu=document.getElementsByClassName('EdField');
    let str=" ";
    for(let e of Edu){
       str +=  '<li>'+ e.value +'</li>';
    }
    document.getElementById('EduT').innerHTML=str;

    let Ts = document.getElementsByClassName('TsField');
    let str1 = " ";
    for(let e of Ts){
       str1 +=  '<li>'+ e.value +'</li>';
    }
    document.getElementById('TechT').innerHTML=str1;


    let Pro=document.getElementsByClassName('ProField');
    let str2=" ";
    for(let e of Pro){
       str2 +=  '<li>'+ e.value +'</li>';
    }
    document.getElementById('ProT').innerHTML=str2;


    let Int=document.getElementsByClassName('InternField');
    let str3=" ";
    for(let e of Int){
       str3 +=  '<li>'+ e.value +'</li>';
    }
    document.getElementById('IntT').innerHTML=str3;


    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
      document.getElementById('imgT').src=reader.result;
    };


    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';


}


function printResume(){
   /*window.print();*/
   var res = {};
   const element = document.getElementById('resume-template');
   /*let areacv=document.getElementById('resume-temple')*/
   res.pdf=html2pdf().from(element).save();
   console.log(res);
  
 }