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
},]


function addcheckbox(data){
    const parentCheckNode = document.getElementById('checklist')
    let showOptions = false;
    parentCheckNode.style.visibility = 'hidden'  
    data.map((item)=>{
        const labelElement = document.createElement('label');
        const inputElement = document.createElement('input');
        labelElement.setAttribute('for',item.id);
        inputElement.type = 'checkbox';
        inputElement.id = item.id;
        labelElement.innerText = item.name;
        parentCheckNode.append(labelElement);
        labelElement.append(inputElement)
  
    })

    document.querySelector('#checklis').onclick = function(e){
      showOptions = !showOptions;
      if(showOptions){
        parentCheckNode.style.visibility = 'visible'  
      }else{
          parentCheckNode.style.visibility = 'hidden'  
      }
    }

    parentCheckNode.onchange = function(e){
        showData(e.target.id, data)
    }

    function showData(itemId, data){
      const selectTag = document.querySelectorAll('select')[1]
      //const inputTag = document.querySelector('#'+'`${itemId}`');
      const inputTag = document.getElementById(`${itemId}`)
      data[itemId].items.map((item,index)=>{
        if(inputTag.checked){
            const optionTag = document.createElement('option');
            optionTag.innerHTML = item;
            optionTag.id=itemId+index
            selectTag.append(optionTag)
        }else{
            const options = document.getElementById(`${itemId+index}`);
            options.remove()
        }
      })
    }

}

addcheckbox(Data)