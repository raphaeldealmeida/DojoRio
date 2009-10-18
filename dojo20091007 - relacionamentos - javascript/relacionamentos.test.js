$(function(){
module("Relacionamento");

test("Bart � irm�o de Liza ent�o Liza � irm� de Bart", function(){
	var relacoes_conhecidas = [["bart", "irm�o", "liza"]]
	isSet(relacionamentos(relacoes_conhecidas),
	["bart irm�o liza", "liza irm� bart"], "Relacionamento poss�vel") 	
});

test("Liza � irm� de Bart ent�o Bart � irm�o de Liza", function(){
	var relacoes_conhecidas = [["liza", "irm�", "bart"]]
	isSet(relacionamentos(relacoes_conhecidas),
	["bart irm�o liza", "liza irm� bart"], "Relacionamento poss�vel") 
});
	
test("Liza � filha de Homer ent�o Homer � pai de Liza", function(){
	var relacoes_conhecidas = [["liza", "filha", "homer"]]
	isSet(relacionamentos(relacoes_conhecidas),
	["liza filha homer", "homer pai liza"], "Relacionamento poss�vel") 
});

test("Bart � filho de Homer ent�o Homer � pai de Bart", function(){
	var relacoes_conhecidas = [["bart", "filho", "homer"]]
	isSet(relacionamentos(relacoes_conhecidas),
	["bart filho homer", "homer pai bart"], "Relacionamento poss�vel") 
});

test("Bart � filho de Marge ent�o Marge � m�e de Bart", function(){
	var marge = {
		nome: "marge",
		sexo: "f"
	};
	var relacoes_conhecidas = [["bart", "filho", marge]]
	isSet(relacionamentos(relacoes_conhecidas),
	["bart filho marge", "marge m�e bart"], "Relacionamento poss�vel") 
});
test("Bart e Liza s�o filhos de Homer, ent�o Homer � pai de Bart e Liza e Bart e e Liza s�o irm�os", function(){
	var relacoes_conhecidas = [["bart", "filho", "homer"], ["liza", "filha", "homer"]]
	isSet(relacionamentos(relacoes_conhecidas),
	["bart filho homer", "homer pai bart", "liza filha homer", "homer pai liza", "bart irm�o liza", "liza irm� bart"], "Relacionamento poss�vel") 
});	
});
