function Parool(pikkus) {
    var tahed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbrid = "0123456789";
    var muud = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var koik = tahed + numbrid + muud;
    var parool = "";
    for (var i = 0; i < pikkus; i++) {
        var indeks = Math.floor(Math.random() * koik.length);
        parool += koik[indeks];
    }
    return parool;
}
console.log(Parool(12));
