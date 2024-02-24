const names = [
    "James Smith",
    "Christopher Andersonm",
    "Ronald Clark",
    "Mary Wright",
    "Lisa Mitchell", 
    "Michelle Johnson", 
    "John Thomas",
    "Daniel Rodriguez",
    "Anthony Lopez",
    "Patricia Perez",
    "Nancy Williams",
    "Laura Jackson",
    "Robert Lewis",
    "Paul Hill", 
    "Kevin Roberts",
    "Linda Jones", 
    "Karen White",
    "Sarah Lee",    
    "Michael Scott",
    "Mark Turner",
    "Jason Brown",
    "Barbara Harris",
    "Betty Walker",
    "Kimberly Green",
    "William Phillips", 
    "Donald Davis",
    "Jeff Martin",
    "Elizabeth Hall", 
    "Helen Adams",
    "Deborah Campbell", 
    "David Miller",
    "George Thompson",
    "Jennifer Allen",
    "Sandra Baker", 
    "Richard Parker", 
    "Kenneth Wilson", 
    "Maria Garcia",
    "Donna Young",
    "Charles Gonzalez",
    "Steven Evans",
    "Susan Moore",
    "Carol Martinez",
    "Joseph Hernandez",
    "Edward Nelson",
    "Margaret Edwards",
    "Ruth Taylor",
    "Thomas Robinson",
    "Brian King",
    "Dorothy Carter",
    "Sharon Collins",
]

const inputTag = document.getElementById('name');
const resultTag = document.querySelector('.result');


let result = [];
inputTag.onkeyup = (e)=>{
  result = names.filter((name)=>{
     if(e.target.value) return name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
  })
  if(result.length>=0){
    resultTag.innerHTML = '';
    showResult(result)
  }
};

function showResult(result){
   
   result.map((name)=>{
    const listTag = document.createElement('li');
    listTag.innerHTML = name;
    resultTag.append(listTag)
   })
}


