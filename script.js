
    function hitungLuas() {
      const alas = parseFloat(document.getElementById('alas').value) || 0;
      const tinggi = parseFloat(document.getElementById('tinggi').value) || 0;
      const luas = 0.5 * alas * tinggi;
      document.getElementById('hasilLuas').textContent = luas.toFixed(2);
    }

    function resetLuas() {
      document.getElementById('alas').value = '';
      document.getElementById('tinggi').value = '';
      document.getElementById('hasilLuas').textContent = 0;
    }

    function hitungKeliling() {
      const s1 = parseFloat(document.getElementById('s1').value) || 0;
      const s2 = parseFloat(document.getElementById('s2').value) || 0;
      const s3 = parseFloat(document.getElementById('s3').value) || 0;
      const keliling = s1 + s2 + s3;
      document.getElementById('hasilKeliling').textContent = keliling.toFixed(2);
    }

    function resetKeliling() {
      document.getElementById('s1').value = '';
      document.getElementById('s2').value = '';
      document.getElementById('s3').value = '';
      document.getElementById('hasilKeliling').textContent = 0;
    }

