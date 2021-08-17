var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var utilizadores = JSON.parse(this.responseText);    
    document.getElementById("demo").innerHTML = `
        <h3>Dados do utilizador</h3>
            
        <table>
            tr>
                <td>Id-Utilizadores</td>
                <td>Designação</td>
                <td>Nome</td>
                <td>NomeUtilizador</td>
                <td>Estado</td>
       
            </tr>
            <tr>
                <td>${utilizadores.users[0]['UtilizadorId']}</td>
                <td>${utilizadores.users[0]['Designacao']}</td>
                <td>${utilizadores.users[0]['Nome']}</td>
                <td>${utilizadores.users[0]['NomeUtilizador']}</td>
                <td>${utilizadores.users[0]['Estado']}</td>
            </tr> 
            
        </table>
        <br/>    
        <hr/>   
`
  }
};

xmlhttp.open("POST", "../server/api.json", true);
xmlhttp.send();









function carregar() {
  
    var saida = '';
    
    var user = [];
    
    $.getJSON("../server/api.json.json", function(data) { 
        
        for (i = 0; i < user.length; i++) {
          saida += '<div class="row">';
          saida += '<div class="col-lg-4 band-img">';
          saida += '</p>';
          saida += '</div>';
          saida += '</div>';
        }
        
        document.getElementById('tela').innerHTML = saida;
    });
  }
  











