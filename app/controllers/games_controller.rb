class GamesController < ApplicationController

  def index
    @test = "Hello Ruby Games!"
    render :index   
  end

end