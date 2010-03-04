require 'spec'
require 'detetive'

describe "Pessoa" do

	before :each do
	  @chuck= Assassino.new
	  @fiona= Vitima.new
	  @holmes= Detetive.new
	end

  describe "Assassino" do

	it "deve tentar matar V�tima e v�tima deve morrer" do
		@chuck.tenta_matar @fiona
		@fiona.morreu?.should be_true
 	end
	
	it "deve tentar matar Detetive e detetive n�o deve morrer" do
		@chuck.tenta_matar @holmes
		@holmes.morreu?.should be_false
 	end

	it "tenta matar detetive e detetive prende assassino" do
		@chuck.tenta_matar @holmes
		@chuck.preso?.should be_true
 	end
	
	it "tenta matar vitima e n�o � preso" do
		@chuck.tenta_matar @fiona
		@chuck.preso?.should be_false
 	end
	
	it "tenta matar vitima, o detetive v� e prende o assassino" do
		@las_vegas = CenaCrime.new(@chuck,@fiona,@holmes)
		@chuck.preso?.should be_true
 	end
	
	it "tenta matar vitima, o detetive n�o v� e n�o prende o assassino" do
		@las_vegas = CenaCrime.new(@chuck,@fiona)
		@chuck.preso?.should be_false
 	end
  end

  describe "Detetive" do
	it "prende assassino" do
		@holmes.prende @chuck
		@chuck.preso?.should be_true
 	end
  end	

  describe "V�tima" do
	it "deve estar viva se nao foi morta" do
		@fiona.morreu?.should be_false
 	end
  end	
end
