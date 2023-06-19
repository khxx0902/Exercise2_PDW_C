function kirimData() {
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    var alamat = document.getElementById('alamat').value;
    var angkatan = document.getElementById('selectOption').value;
    var tanggal = document.getElementById('tanggal').value;
  
    var hasil = "Nama: " + nama + "\n";
    hasil += "NIM: " + nim + "\n";
    hasil += "Peminatan: " + peminatan + "\n";
    hasil += "Alamat: " + alamat + "\n";
    hasil += "Angkatan: " + angkatan + "\n";
    hasil += "Tanggal: " + tanggal;
  
    alert(hasil);
  }
  