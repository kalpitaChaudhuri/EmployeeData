let emp_1={id:1,firstName:"Louis",lastName:"Tomlinson",email:"itstommo28@gmail.com",gender:"Male",nationality:"British"};

let emp_2={id:2,firstName:"Perrie",lastName:"Edwards",email:"perrie_disora@gmail.com",gender:"Female",nationality:"British"};

let emp_3={id:3,firstName:"Liam",lastName:"Payne",email:"therealliam@gmail.com",gender:"Male",nationality:"British"};

let emp_4={id:4,firstName:"Niall",lastName:"Horan",email:"niallhoran@gmail.com",gender:"Male",nationality:"Irish"};

let emp_5={id:5,firstName:"Harry",lastName:"Styles",email:"harry1994styles@gmail.com",gender:"Male",nationality:"British"};

let emp_6={id:6,firstName:"Taylor",lastName:"Swift",email:"taylor1989@gmail.com",gender:"Female",nationality:"American"};

let emp_7={id:7,firstName:"Travis",lastName:"Kelce",email:"kelceNY@gmail.com",gender:"Male",nationality:"American"};

let emp_8={id:8,firstName:"Leigh-Anne",lastName:"Pinnock",email:"anneleigh@gmail.com",gender:"Female",nationality:"British"};

let emp_9={id:9,firstName:"Zayn",lastName:"Malik",email:"ZAYN@gmail.com",gender:"Male",nationality:"British"};


let employess=[emp_1,emp_2,emp_3,emp_4,emp_5,emp_6,emp_7,emp_8,emp_9];

function displayEmps(emps)
{
    if(emps.length!=0)
    {
        let eachEmp=``;
        for(let emp of emps)
        {
            eachEmp+=`<tr>
                            <td>${emp.id}</td>
                            <td>${emp.firstName}</td>
                            <td>${emp.lastName}</td>
                            <td>${emp.email}</td>
                            <td>${emp.gender}</td>
                            <td>${emp.nationality}</td>
                        </tr>`
        }
        document.querySelector('#display-emps').innerHTML=eachEmp;
    }
}



let maleEmps=employess.filter((emp)=>
{
    return emp.gender=='Male';
});

let femaleEmps=employess.filter((emp)=>
{
        return emp.gender=='Female';
});


let allEmpsBtn=document.querySelector('#all-emps');
let maleEmpsBtn=document.querySelector('#male-emps');
let femaleEmpsBtn=document.querySelector('#female-emps');

allEmpsBtn.addEventListener('click',()=>
{
    displayEmps(employess);
});

maleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(maleEmps);
});

femaleEmpsBtn.addEventListener('click',()=>
{
    displayEmps(femaleEmps);
});

let inputEle=document.querySelector('#usn');
inputEle.addEventListener('keyup',function()
{
    let username=inputEle.value.toUpperCase().trim();;
    let empsFiltered=searchEmps(username,employess);
    if(username.length>0)
    {
        displayEmps(empsFiltered);
    }
    else 
    {
        document.querySelector('#display-emps').innerHTML="No Rows Selected";
    }
});

function searchEmps(usn,emps)
{
    let filteredEmps=[];
    for(let emp of emps)
    {
        let oName=emp.firstName.toUpperCase().trim();

        if(oName.startsWith(usn))
        {
            filteredEmps.push(emp);
        }
    }
    return filteredEmps;
}