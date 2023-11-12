//https://www.w3schools.com/xml/xml_http.asp

    window.addEventListener('load', function() {  
        let heroInput = document.querySelector("input")
        let msg = document.querySelector('.message');
        const button = document.querySelector(".btn")
    
    button.addEventListener('click', (event)=>
    {
            event.preventDefault()
            let input=heroInput.value.trim(); //gets rid of unnecessary whitespace
           
            var ahttp = new XMLHttpRequest()
            let file = "superheroes.php?query="+input;
            ahttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let data = document.getElementById("result").innerHTML = this.responseText;
                    msg.textContent = '${data}';
                }
            }
            ahttp.open('GET', file , true);
            ahttp.send();
          });
    })

    
