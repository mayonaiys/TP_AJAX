function ajaxRequest(type,url,callback){
    let request = new XMLHttpRequest();
    request.open(type,url);
    request.onload = () => {
        switch(request.status){
            case 200:
            case 201:
                let response = request.responseText;
                callback(response);
                break;
            default: errorRequest(type,"http://localhost/ComWeb/TP_AJAX/php/errors.php",displayError);
        }
    }
    request.send();
}

function errorRequest(type,url,callback){
    let request = new XMLHttpRequest();
    request.open(type,url);
    request.onload = () => {
        switch(request.status){
            case 400:
                callback("Requête incorrecte");
                break;
            case 401:
                callback("Authentifiez vous");
                break;
            case 403:
                callback("Accès refusé");
                break;
            case 404:
                callback("Page non trouvée");
                break;
            case 500:
                callback("Erreur interne du serveur");
                break;
            case 503:
                callback("Service indisponible");
                break;
        }
    }
    request.send();
}

function display(response){
    document.getElementById('timestamp').innerHTML = "<i class='material-icons'>watch_later</i>"+"<strong>"+response+"</strong>";
}

function displayError(response){
    document.getElementById('errors').style.display = "";
    document.getElementById('errors').innerHTML = "<i class='material-icons'>error</i>"+"<strong>"+response+"</strong>";
}

let time = setInterval(timer, 1000);

function timer() {
  setInterval(ajaxRequest("GET","http://localhost/ComWeb/TP_AJAX/php/timestamp.php",display),1000);
} 