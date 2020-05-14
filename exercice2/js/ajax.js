function ajaxRequest(type,url,callback){
    let request = new XMLHttpRequest();
    request.open(type,url);
    request.onload = () => {
        switch(request.status){
            case 200:
            case 201:
                let response = request.responseText;
                response = JSON.parse(response);
                callback(response);
                break;
            default: 
                document.getElementById('errors').innerHTML = 'HTTP error:' + request.status;
                document.getElementById('errors').style.display = null;
        }
    }
    request.send();
}

function displayTime(response){
    document.getElementById('title').innerHTML = '<strong>'+response[0]+'</strong>';
    document.getElementById('detail').innerHTML = '<strong><p style="color: blue">*** Detail ***</p>'+'<p>hours :'+response[1]['hours']+'</p>'+'<p>minutes :'+response[1]['minutes']+'</p>'+'<p>seconds :'+response[1]['seconds']+'</p></strong>';
    displayClock(response[1]);
}

let time = setInterval(timer, 1000);

function timer() {
    ajaxRequest('GET','http://localhost/ComWeb/TP_AJAX/exercice2/php/time.php',displayTime);
} 