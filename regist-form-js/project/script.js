const namaInput = document.getElementById("nama");
const nimInput = document.getElementById("nim");
const mataKuliahSelect = document.getElementById("mataKuliah");
const dosenSelect = document.getElementById("dosen");
const suggestionsBox = document.getElementById("nameSuggestions");
const form = document.getElementById("registrationForm");

const resultBox = document.getElementById("resultBox");
const resultNama = document.getElementById("resultNama");
const resultNim = document.getElementById("resultNim");
const resultMataKuliah = document.getElementById("resultMataKuliah");
const resultDosen = document.getElementById("resultDosen");

const daftarNama = [
  "Nurul Akbar",
  "Nurul Aisyah",
  "Nanda Putri",
  "Naufal Ramadhan",
  "Ahmad Fauzan",
  "Ahmad Rizki",
  "Alya Safira",
  "Andi Saputra",
  "Budi Santoso",
  "Citra Lestari",
  "Dewi Anggraini",
  "Dimas Pratama",
  "Fajar Nugroho",
  "Fitri Amalia",
  "Rizky Maulana"
];

const daftarDosen = {
  "Pemrograman Web": [
    "Dr. Budi Santoso, M.Kom",
    "Nina Kartika, S.Kom., M.Kom"
  ],
  "Basis Data": [
    "Dr. Siti Aminah, M.T",
    "Rudi Hartono, M.Kom"
  ],
  "Kecerdasan Buatan": [
    "Dr. Andi Wijaya, M.Kom",
    "Maya Putri, M.Cs"
  ],
  "Jaringan Komputer": [
    "Hendra Saputra, M.T",
    "Dewi Lestari, M.Kom"
  ]
};

namaInput.addEventListener("input", function () {
  const keyword = namaInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (keyword.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  const hasilFilter = daftarNama.filter(function (nama) {
    return nama.toLowerCase().startsWith(keyword);
  });

  if (hasilFilter.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  hasilFilter.forEach(function (nama) {
    const listItem = document.createElement("li");
    listItem.textContent = nama;

    listItem.addEventListener("click", function () {
      namaInput.value = nama;
      suggestionsBox.style.display = "none";
    });

    suggestionsBox.appendChild(listItem);
  });

  suggestionsBox.style.display = "block";
});

mataKuliahSelect.addEventListener("change", function () {
  const mataKuliahDipilih = mataKuliahSelect.value;

  dosenSelect.innerHTML = '<option value="">-- Pilih Dosen --</option>';

  if (mataKuliahDipilih === "") {
    return;
  }

  const dosenTerkait = daftarDosen[mataKuliahDipilih];

  dosenTerkait.forEach(function (namaDosen) {
    const option = document.createElement("option");
    option.value = namaDosen;
    option.textContent = namaDosen;
    dosenSelect.appendChild(option);
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaInput.value.trim();
  const nim = nimInput.value.trim();
  const mataKuliah = mataKuliahSelect.value;
  const dosen = dosenSelect.value;

  if (nama === "") {
    alert("Nama mahasiswa tidak boleh kosong");
    namaInput.focus();
    return;
  }

  if (nim === "") {
    alert("NIM tidak boleh kosong");
    nimInput.focus();
    return;
  }

  if (mataKuliah === "") {
    alert("Mata kuliah harus dipilih");
    mataKuliahSelect.focus();
    return;
  }

  if (dosen === "") {
    alert("Dosen harus dipilih");
    dosenSelect.focus();
    return;
  }

  resultNama.textContent = nama;
  resultNim.textContent = nim;
  resultMataKuliah.textContent = mataKuliah;
  resultDosen.textContent = dosen;

  resultBox.classList.remove("hidden");

  alert("Registrasi berhasil disimpan!");
});