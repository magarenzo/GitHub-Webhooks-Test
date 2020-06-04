require 'sinatra'
require 'json'

post '/payload' do
    push = JSON.parse(request.body.read)
    puts "GitHub JSON: #{push.inspect}"
end