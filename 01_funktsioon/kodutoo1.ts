function Parool(pikkus:number): String {
    const tahed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numbrid = "0123456789";
     const muud = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
     const koik = tahed + numbrid + muud;
     let parool = "";
     for (let i = 0; i < pikkus; i++) {
         let indeks = Math.floor(Math.random() * koik.length);
         parool += koik[indeks];
     }
     return parool;
 }
 console.log(Parool(12));
