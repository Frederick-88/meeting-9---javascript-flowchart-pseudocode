console.log('Start Program Penilaian Nilai Siswa');

const scoreInput = window.prompt('Masukkan Nilai Ulangan Anda.')
const score = Number(scoreInput)

if (score <= 60) {
    window.alert('Kurang.')
} else if (score <= 75){
    window.alert('Cukup.')
} else if (score <= 89){
    window.alert('Baik.')
} else (score >= 90){
    window.alert('Sangat Baik.')
}

console.log('Stop Program Penilaian Nilai Siswa');
