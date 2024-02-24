async function fetchAPI(url){
    const res = await fetch(url);
    const data = await res.json();
    
    showData(data)
    
  }
  
  function createOptionsHTML(data){
    const selectTag = document.getElementsByTagName('select');
    data.map((item) =>{
      const optionTag = document.createElement('option');
      optionTag.innerText = item.name;
      optionTag.dataset.url = item.url;
      selectTag[0].append(optionTag);
    })
    selectTag[0].addEventListener('change',(e)=>{
       console.log("hello")
       const options = e.target.options;
       const selectIndex = e.target.selectedIndex;
       fetchAPI(`${options[selectIndex].dataset.url}`)
    })
  }

  function createTableHTML(data){
    console.log(data);

        for(let i=0;i<2;i++){
            const tableRow = document.createElement('tr');
                if(i==0){  
                    let j=0; 
                    for(let key in data){
                        if(!(data[key].length>=0)){
                            if(j<5){
                                const tableHeading =  document.createElement('th');
                                tableHeading.innerText = key;
                                tableRow.append(tableHeading);
                                j++
                            }
                        }
                      
                    }
            }
                if(i==1){
                    let j=0;
                    for(let key in data){
                        if(!(data[key].length>=0)){
                            if(j<5){
                                console.log(j, data[key]);
                                const tableData =  document.createElement('td');
                                tableData.innerText = data[key];
                                tableRow.append(tableData);
                                j++
                            }
                        }
                      
                    }
            }
            document.getElementsByTagName('table')[0].append(tableRow)
    }

  }
  
  function showData(data){
    if(data.results !== undefined) createOptionsHTML(data.results);
    else{ createTableHTML(data)}
  }
  
  
  fetchAPI('https://pokeapi.co/api/v2/pokemon/')