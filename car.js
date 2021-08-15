let car=[
    {
        "id":"1",
        "name":"Octavia",
        "company":"Skoda",
        "status":"Active"

    },
    {
        "id":"2",
        "name":"A7",
        "company":"audi",
        "status":"Active"
    },
    {
        "id":"3",
        "name":"Nexon",
        "company":"Tata",
        "status":"Active"
    }
];

getcar=()=>{
    //const url=new url('http://localhost:8080/car');
    const url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/getseries.php'
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true); 
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            console.log(xhr.responseText);
           let response=JSON.parse(xhr.responseText);
           let {car}=response;
           car.forEach(car=>{
            let {id,name,company,status}=car;
        let cardiv=document.createElement('div');
        cardiv.classList.add('car-div');
        let idtitle=document.createElement('h2');
        idtitle.classList.add('car-title');
        let idvl=document.createTextNode(id);
        idtitle.appendChild(idvl);
        let nametitle=document.createElement('h2');
        nametitle.classList.add('car-title');
        let namevl=document.createTextNode(name);
        nametitle.appendChild(namevl);
        let companytitle=document.createElement('h4');
        companytitle.classList.add('company');
        let companyvl=document.createTextNode(company);
        companytitle.appendChild(companyvl);
        let statustitle=document.createElement('p');
        statustitle.classList.add('status');
        let statusvl=document.createTextNode(status);
        statustitle.appendChild(statusvl);
        let body=document.querySelector('.main-body');
        cardiv.appendChild(nametitle);
        cardiv.appendChild(companytitle);
        cardiv.appendChild(statustitle);
        body.appendChild(cardiv);
        });
           
        }  
        else
        {
             console.error('error occured')
        }  
    
      
    }
    xhr.send();
}
getcar();

getcar=()=>{
    car.map(car=>{
        let {id,name,company,status}=car;
    let cardiv=document.createElement('div');
    cardiv.classList.add('car-div');
    let idtitle=document.createElement('h2');
    idtitle.classList.add('car-title');
    let idvl=document.createTextNode(id);
    idtitle.appendChild(idvl);
    let nametitle=document.createElement('h2');
    nametitle.classList.add('car-title');
    let namevl=document.createTextNode(name);
    nametitle.appendChild(namevl);
    let companytitle=document.createElement('h4');
    companytitle.classList.add('company');
    let companyvl=document.createTextNode(company);
    companytitle.appendChild(companyvl);
    let statustitle=document.createElement('p');
    statustitle.classList.add('status');
    let statusvl=document.createTextNode(status);
    statustitle.appendChild(statusvl);
    let body=document.querySelector('.main-body');
    cardiv.appendChild(nametitle);
    cardiv.appendChild(companytitle);
    cardiv.appendChild(statustitle);
    body.appendChild(cardiv);
    });
}
    getcar();
