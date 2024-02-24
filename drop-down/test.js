const Data = [{
    "id":0,
    "name":"Fruits",
    "items":["Apple","Banana","Orange","Kiwi"]
},{
    "id":1,
    "name":"Vegetables",
    "items":["Carrot","Radish","Tomato","potato"]
},{
    "id":2,
    "name":"Flowers",
    "items":["Rose","Lily","Lotus","Sunflower"]
},{
    "id":3,
    "name":"Cars",
    "items":["A","B","C","D"]
}
]

//<---- Single Select DropDown using select Tag --->

// function insertHTML(data){
//     const selectElement = document.querySelectorAll('select')[0]; 
//     data.map((item)=>{
//         const optionsTag = document.createElement('option');
//         optionsTag.innerHTML = item.name;
//         optionsTag.id = item.id;
//         selectElement.append(optionsTag);
//     })

//     selectElement.addEventListener('change',(e)=>{
//         addTable(e.target.selectedOptions);
//     })

// }
 
// function addTable(options){
//      const option = [...options]
//     const selectList = document.querySelectorAll('select')[1]
//     selectList.innerHTML = ''

//     option.forEach((single)=>{
//         Data[single.id].items.map((item)=>{
//             console.log(item);
//             const listTag = document.createElement('option');
//             listTag.innerHTML = item;
//             selectList.append(listTag)

//         })
//     })

// }

// insertHTML(Data)

//<---- Multi Select DropDown using select Tag --->

function insertHTML(data){
    const selectElement = document.querySelectorAll('select')[0];
    
    data.map((item)=>{
        const optionsTag = document.createElement('option');
        optionsTag.innerHTML = item.name;
        optionsTag.id = item.id;
        selectElement.append(optionsTag);
    })
 
    selectElement.addEventListener('change',(e)=>{
       //console.log(e.target.value);
        addTable(e.target.selectedOptions);
    })

}

function addTable(options){
     const option = [...options]
    const selectList = document.querySelectorAll('select')[1]
    selectList.innerHTML = ''
    //console.log(Data[index])

    option.forEach((single)=>{
        Data[single.id].items.map((item)=>{
            console.log(item);
            const listTag = document.createElement('option');
            listTag.innerHTML = item;
            selectList.append(listTag)
        })
    })
}
insertHTML(Data)



//<---- Multi Select DropDown using checkboxes Tag --->

// function addcheckbox(data){
//     const parentCheckNode = document.getElementById('checklist')
//     let showOptions = false;
//     parentCheckNode.style.visibility = 'hidden'  
//     data.map((item)=>{
//         const labelElement = document.createElement('label');
//         const inputElement = document.createElement('input');
//         labelElement.setAttribute('for',item.id);
//         inputElement.type = 'checkbox';
//         inputElement.id = item.id;
//         labelElement.innerText = item.name;
//         parentCheckNode.append(labelElement);
//         labelElement.append(inputElement)
  
//     })

//     document.querySelector('#checklis').onclick = function(e){
//       showOptions = !showOptions;
//       if(showOptions){
//         parentCheckNode.style.visibility = 'visible'  
//       }else{
//           parentCheckNode.style.visibility = 'hidden'  
//       }
//     }

//     parentCheckNode.onchange = function(e){
//         showData(e.target.id, data)
//     }

//     function showData(itemId, data){
//       const selectTag = document.querySelectorAll('select')[1]
//       //const inputTag = document.querySelector('#'+'`${itemId}`');
//       const inputTag = document.getElementById(`${itemId}`)
//       data[itemId].items.map((item,index)=>{
//         if(inputTag.checked){
//             const optionTag = document.createElement('option');
//             optionTag.innerHTML = item;
//             optionTag.id=itemId+index
//             selectTag.append(optionTag)
//         }else{
//             const options = document.getElementById(`${itemId+index}`);
//             options.remove()
//         }
//       })
//     }

// }

// addcheckbox(Data)





