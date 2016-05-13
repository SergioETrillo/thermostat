require 'sinatra'
require 'json'

enable :sessions
set :session_secret, 'super secret'

get '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	@json = File.read('status.json')
	p @json
end

post '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	# @json = JSON.parse(request.body.read)
	@json = request.body.read
	# $time = @json['time']
	# $city = @json['city']
	File.open('status.json', 'w') do |f|
		f.write(@json)
	end
end