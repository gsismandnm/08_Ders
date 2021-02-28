const { expect, test } = require("@jest/globals")

test ('two plus two is four',() => {
    expect(2 + 2).toBe(5)
});

const{calc} =require('./calc');

test('sonuc obj islemSonucu adinda bir property e sahip olmalı', () =>{
    expect (calc(5, 2, '+')).toHaveProperty ('islemSonucu');

});

test ('2+2=4 sonucunu vermeli', ()=>{
    expect(calc(2, 2,'+').islemSonucu.toBe(4))});

test ('Eğer  hata olursa hata propertisi olacak', ()=>{
    expect(calc(5, 2, 'ü')).toHaveProperty('hata');
});

test ('operatör hatası olacak', ()=>{
    const sonuc=calc(5, 2, 'ü');
    const obj = {islemSonucu:'hata'. hata=['Operatör hatası']};
    expect(sonuc).toMatchObject (obj);
});