class FavoritesController < ApplicationController
    before_action :set_favorite, only: [:show, :update, :destroy]
    before_action :authorize_request, only: [:create, :update, :destroy]
    before_action :set_user_favorite, only: [:update, :destroy]

  # GET /recipes
  def index
    @favorites = Favorite.all

    render json: @favorites
  end

  # GET /recipes/1
  def show
    render json: @favorite
  end

  # POST /recipes
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user = @current_user
    if @favorite.save
      render json: @favorite, status: :created
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    def set_user_favorite
      @favorite = @current_user.favorites.find()
    end

    # Only allow a trusted parameter "white list" through.
    def favorite_params
      params.require(:favorite).permit(:recipe_id, :user_id)
    end
end


