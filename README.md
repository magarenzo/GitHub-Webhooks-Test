# github-webhooks-test
Test communicating with GitHub's webhooks

## Ruby
Initial test to receieve POST requests from GitHub. Exposed local Ruby server to internet using ngrok, and logged the reception of the request in the local server.

### Installations

* [ngrok](https://ngrok.com/)

* [Ruby](https://www.ruby-lang.org/en/)

    * [Sinatra](http://sinatrarb.com/)

### Instructions

In a terminal, run `ruby server.rb`.

In another terminal, run `ngrok http 4567`. Then, copy the http ngrok URL as a new webhook in a GitHub repository.

After selecting "Send me everything" and saving the webhook, GitHub will send its first message to the given webhook endpoint. The reception of the response can be seen in the running Ruby server.

## Lambda
Second test setting up an API Gateway to receive POST requests from GitHub. The gateway executes a Lambda function which parses the event and can log a response to CloudWatch logs, send a message to a Slack channel, and upload a file to an S3 bucket.

## Owner

Michael A. Agarenzo