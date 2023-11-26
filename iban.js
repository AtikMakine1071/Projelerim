function paraGonder(){
    let i = document.iban.iban1.value
    let p = Number(document.iban.para.value)
    let a = document.iban.isim.value
    let aBakiye = Number(100000 + p)
    let bakiye = 100000 - p

    if(p > 100000){
        document.getElementById("sonuc").innerHTML = "Bakiyeniz yetersiz."
    }
    else{
        document.getElementById("sonuc").innerHTML = ("Paranız başarıyla " + a + " kişisine gönderildi")
        document.getElementById("sonuc1").innerHTML = (" Gönderilen tutar : " + p + ` ₺`)
        document.getElementById("sonuc2").innerHTML = ( " Kalan Bakiyeniz : " + bakiye + ` ₺`)
        document.getElementById("sonuc3").innerHTML = ( a + " kişisinin toplam bakiyesi : " + aBakiye + ` ₺`) 
    }


}