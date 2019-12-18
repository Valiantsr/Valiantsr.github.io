var tulisan = ""
function readURL_tambahkomik(input) {
       if (input.files && input.files[0]) {
           let reader = new FileReader();
           reader.onload = function (e) {
               $('#isi').attr('src', e.target.result);
               let size = $(".isi0")[0].files[0].size;
               size = Math.floor(size/1024)
               $("#isi2").text("Ukuran file : "+size + "KB")
           };
           reader.readAsDataURL(input.files[0]);
       }
   }