let saldo = 0 // Nilai awal saldo

function tambahsaldo(){
    let tambah = 'a' 
    let hasil = 0
    while(!+tambah/1){
        tambah = prompt("Sisa saldo anda ${saldo}. Berapa saldo yang mau ditambahkan:");
        if(tambah == null){
            break
        }
        if(!+tambah/1){
            alert('Masukkan angka!!!')
        }     
    }
    return hasil = +tambah
}

function kurangisaldo(){
    let kurang = 'a'
    let hasil = 0
    while(!+kurang/1 || +kurang>saldo){
        kurang = prompt(`Sisa saldo anda ${saldo}. Berapa saldo yang mau dikurangkan:`);
        if(kurang == null){
            break
        }
        if(+kurang>saldo){
            alert(`Saldo tidak mencukupi. Sisa saldo anda ${saldo}`)
        }  
        if(!+kurang/1){
            alert('Masukkan angka!!!')
        }   
        hasil = +kurang  
    }
    return hasil
}

let bool= true
while(bool){
    let menu = prompt(`Sisa saldo anda ${saldo}.
    Pilih menu
    1. Tambah Saldo
    2. Kurangi Saldo
    3. Keluar`);
    switch (+menu) {
        case 1:
            saldo += tambahsaldo()
            console.log(`Tambah ${saldo}`)
            break;
        case 2:
            if(saldo>0){
                saldo -= kurangisaldo()
                console.log(`Kurang ${saldo}`)
                break;
            }else{
                alert(`Sisa saldo anda ${saldo}. Tidak bisa dikurangi`)
            }
            break;
        default:
            bool= false
            break;  
    }    
}









