class Api::V1::AirlinesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    airlines = Airline.includes(:reviews, logo_attachment: :blob).all # .with_attached_logo

    render json: AirlineSerializer.new(airlines, options).serializable_hash.to_json
  end

  def show
    airline = Airline.find_by_slug(params[:slug])

    render json: AirlineSerializer.new(airline, options).serializable_hash.to_json
  end

  def create
    airline = Airline.new(airline_params.except(:image))
    attached_image(airline, params[:airline][:image])

    if airline.save
      render json: AirlineSerializer.new(airline).serializable_hash.to_json
    else
      render json: { error: airline.error.messages }, status: 422
    end
  end

  def update
    airline = Airline.find_by_slug(params[:slug])

    if airline.update(airline_params)
      render json: AirlineSerializer.new(airline, options).serializable_hash.to_json
    else
      render json: { error: airline.error.messages }, status: 422
    end
  end

  def destroy
    airline = Airline.find_by_slug(params[:slug])

    if airline.destroy
      head :no_content
    else
      render json: { error: airline.error.messages }, status: 422
    end
  end

  private

  def airline_params
    params.require(:airline).permit(:name, :image)
  end

  def options
    @options ||= { include: %i[reviews] }
  end

  def attached_image(airline, image)
    return unless params[:airline][:image].split(',')[0].include?('base64')

    decoded_data = Base64.decode64(image.split(',')[1])
    airline.logo = {
      io: StringIO.new(decoded_data),
      content_type: 'image/jpeg',
      filename: "#{airline&.name.parameterize}_logo.jpg"
    }
  end
end
