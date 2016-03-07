function myFunction() {
                var it;
                it =1;
                var tip = setInterval(function(){
                var image = document.getElementById('test_gallery');
                    it = it% 2;
                    image.src= "Photos/Test_"+it+ ".jpg";
                    it++;
                    }, 2000);
            }       