
var contarLikes = 0;
var contarDislike = 0 
 
function incrementoClick(){
         atualizarTela(++contarLikes); 
        } 
 function atualizarTela(like){
         document.getElementById("likes").innerHTML = "👍" + like; 
        }  
function incrementoDislike(){ 
        contarDislike ++    
         document.getElementById("dislikes").innerHTML = "👎" + contarDislike
}







