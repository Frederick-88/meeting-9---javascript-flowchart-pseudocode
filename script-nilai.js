console.log('Start Program Penilaian Nilai Siswa');

var scoreInput = window.prompt('Masukkan Nilai Ulangan Anda.')
var score = Number(scoreInput)

if (score <= 60) {
    window.alert('Nilai anda Kurang & Remedial. Jangan Menyerah.');
} else if (score <= 75){
    window.alert('Nilai anda Cukup.');
} else if (score <= 89){
    window.alert('Nilai anda Baik.');
} else if (score >= 101){
    window.alert('maksimal 100 bambang.');
} else{
    window.alert('Selamat! Nilai anda Sangat Baik.');
}

console.log('Stop Program Penilaian Nilai Siswa');
