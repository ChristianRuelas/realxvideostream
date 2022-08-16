var direccion;
function registrini(){
    document.getElementById('popup').style.visibility='hidden';
    document.getElementById('popupreg').style.visibility='visible';
    document.getElementById('barrasuper').style.opacity='.2';
    document.getElementById('frameuno').style.opacity='.2';
}
function poplog(){
    document.getElementById('popup').style.visibility='visible';
    document.getElementById('barrasuper').style.opacity='.2';
    document.getElementById('frameuno').style.opacity='.2';
}
function logini(){
    
        document.getElementById('barrasuper').style.opacity='1';
        document.getElementById('frameuno').style.opacity='1';
        document.getElementById('popup').style.visibility='hidden';
        document.getElementById('popupreg').style.visibility='hidden';
        document.getElementById('loginimage').src='img/loginin.png';
        document.getElementById('usuario').innerHTML='Christian Ruelas';
        document.getElementById('loggout').style.visibility='visible';
    
}
function categoria() {
    document.getElementById('barrasuper').style.opacity='.2';
    document.getElementById('frameuno').style.opacity='.2';
    document.getElementById('popup2').style.visibility='visible';
    }
    function atras(){
        document.getElementById('barrasuper').style.opacity='1';
    document.getElementById('frameuno').style.opacity='1';
    document.getElementById('popup2').style.visibility='hidden';
    }
    function vercat(x){
       
        document.getElementById('barrasuper').style.opacity='1';
        document.getElementById('frameuno').style.opacity='1';
        switch (x) {
            case 'Zombies':
                document.getElementById('frameuno').src='zombies.html';
                document.getElementById('cuerpo').style.backgroundImage="url('img/fondozombi.jpg')";
                break;
            case 'Comedia':
                document.getElementById('frameuno').src='comedia.html';
                document.getElementById('cuerpo').style.backgroundImage="url('img/fondocomedia.jpg')";
                break;
            case 'Gore':
                document.getElementById('frameuno').src='gore.html';
                document.getElementById('cuerpo').style.backgroundImage="url('img/fondogore.jpg')";
                break;
            case 'Accion':
                document.getElementById('frameuno').src='accion.html';
                document.getElementById('cuerpo').style.backgroundImage="url('img/fodoaccion.jpg')";
                break;
        
            default:
                break;
        }
        document.getElementById('popup2').style.visibility='hidden';
    }
function verpeli(x){
    document.location='reproductor.html';
}
    