Initially I approached this problem from a technical perspective, taking a similiar approach to challenge 1
and trying to actually debug the POST request. In trying to do so I received an 'INVALID_REQUEST' because
my token was missing or invalid. I then realized that their was a subtle difference in the endpoints of that 
I was making my API call too, so I changed 'https://api.staging.hummingbird.co/alerts' to 
'https://api.sandbox.hummingbird.co/alerts'. Now when I send the POST request, I receive the same error as 
outlined in the spec

The error message recieved is as follows

{
    "success":false,
    "error":
        {
            "message":"Invalid alert. Could not find matching case data for references in alerts: alert1.",
            "type":"INVALID"
        },
    "object":null
}

With my POST request hitting the proper endpoint, I quickly found that there was a discrepency between the 
transaction which was being referenced in the alert, with id:123, and the transaction in the data field,
which had id:321

after finding this, a created a new POST request where the data had been fixed and recieved the following response

{ alerts: [ { token: 'SSEb9RDS8wV3B21vRc7KfxH9' } ], success: true }