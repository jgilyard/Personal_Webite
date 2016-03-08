function myFunction() {
                var it;
                it =1;
                var tip = setInterval(function(){
                var image = document.getElementById('test_gallery');
                    it = Math.floor((Math.random() * 33) + 0);
                    it = it % 33;
                    image.src= "Photos/Test_"+it+ ".jpg";
                    it++;
                    }, 3000);
            }     
function myFunction_2() {
                var it;
                it =1;
                var tip = setInterval(function(){
                    it = Math.floor((Math.random() * 33) + 0);
                    it = it % 33;
                    var holder = "Photos/Test_"+it+ ".jpg";
                    document.getElementById('back_change').style.background = "url("+holder + ") no-repeat center";
                    
                    it++;
                    }, 3000);
            }       