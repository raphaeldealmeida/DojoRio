$(function(){
module("Mictorio");

    test("Banheiro de 3 mict�rios sem ningu�m", function(){
        banheiro = [0,0,0];
        equals(2, ocupar(banheiro));
    });

    test("Banheiro de 10 mict�rios sem ningu�m", function(){
        banheiro = [0,0,0,0,0,0,0,0,0,0];
        equals(9, ocupar(banheiro));
    });
    
    test("Banheiro de 3 mict�rios com �ltima ocupada", function(){
        banheiro = [0,0,1];
        equals(0, ocupar(banheiro));
    });

    test("Banheiro de 3 mict�rios cheio", function(){
        banheiro = [1,0,1];
        equals(-1, ocupar(banheiro));
    });
    
    test("Banheiro de 5 mict�rios com uma vaga", function(){
        banheiro = [1,0,0,0,1];
        equals(2, ocupar(banheiro));
    });
    
    test("Banheiro de 5 mict�rios com uma vaga", function(){
        banheiro = [1,0,0,0,1];
        equals(2, ocupar(banheiro));
    });
    
});
