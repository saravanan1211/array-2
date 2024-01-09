      function one(){
        var a=document.getElementById('Num1').value
           var len = a.split(",")
         document.getElementById("res").innerHTML=len.length;
        
        }
        function two(){
            var a=document.getElementById('Num1').value;

             document.getElementById("res").innerHTML=a.toString();
            
            }
            function three(){
                var a=document.getElementById('Num1').value
                var startval=document.getElementById('startval').value;
                var b=a.split(",")
                document.getElementById('res').innerHTML=b.at(startval);
            }
            function four(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                document.getElementById('res').innerHTML=b.join("*");
            }
            function five(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                document.getElementById('res').innerHTML=b.pop();
            }
            function six(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                var startval=document.getElementById('startval').value;
                b.push(startval)
                document.getElementById('res').innerHTML=b;
            }
            function seven(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                document.getElementById('res').innerHTML=b.shift();
              
            }
            function eight(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                var startval=document.getElementById('startval').value;
                b.unshift(startval)
                document.getElementById('res').innerHTML=b;
              
              
            }
            function nine(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                document.getElementById('res').innerHTML=b.shift();
              
              
            }
            function ten(){
                var a=document.getElementById('Num1').value
                var startval=document.getElementById('startval').value;
                 var b=a.concat(startval)

                document.getElementById('res').innerHTML=b;
              
              
            }
            function eleven(){
              let splicing = document.getElementById("Num1").value;
              let splice = splicing.split(",");
              let val1 = document.getElementById("startval").value;
              let val2 = document.getElementById("endval").value;
              splice.copyWithin(val1,val2)
              document.getElementById("res").innerHTML = splice;
              
              
              
            }
           
            function thriteen()
            {
                let splicing = document.getElementById("Num1").value;
                let splice = splicing.split(",");
                let val1 = document.getElementById("startval").value;
                let val2 = document.getElementById("endval").value;
                splice.splice(val1,val2)
                document.getElementById("res").innerHTML = splice;
            
            }
            function fourteen(){
              
              let splicing = document.getElementById("Num1").value;
              let spliced = splicing.split(",");
              let val3 = document.getElementById("startval").value;
              let val4 = document.getElementById("endval").value;
               let c=spliced.toSpliced(val3,val4)
              document.getElementById("res").innerHTML = c;
               
            }


            function fifteen(){
                var a=document.getElementById('Num1').value
                var b=a.split(",")
                var startval=document.getElementById('startval').value;
                document.getElementById('res').innerHTML=b.slice(startval)
            }
          
                      

                  
                


            
        
            
          
          
             
            
    

    
