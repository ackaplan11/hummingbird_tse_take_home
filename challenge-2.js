import 'dotenv/config';
import { postData } from './postData.js';

// Retrieve Access Token

const auth_url = process.env.API_URL;
const client_id = process.env.HUMMINGBIRD_CLIENT_ID
const client_secret = process.env.HUMMINGBIRD_CLIENT_SECRET

const auth_data = {
    "grant_type": "client_credentials",
    "client_id": client_id,
    "client_secret": client_secret,
}

const auth_headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

const auth_response = await postData(auth_url, auth_data, auth_headers)

const access_token = auth_response.access_token
console.log(access_token)
// Make POST request

const url = 'https://api.sandbox.hummingbird.co/alerts'

const data = {
    "alerts": [
        {
            "id": "alert1",
            "triggered_at": "2021-07-17T16:29:20-07:00",
            "rule": "A rule to rule all rules",
            "references": [
                {
                    "type": "transaction",
                    "id": "txn-123"
                }
            ]
        }
    ],
    "data": {
        "transactions": [
            {
                "id": "txn-321",
                "description": "This is Shady!",
                "completed_at": "2018-07-24T12:34:56.789Z",
                "amount": {
                    "amount": 350000,
                    "currency_code": "USD"
                },
                "amount_local": {
                    "amount": 350000,
                    "currency_code": "USD"
                },
            }
        ]
    }
}

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization" : `Bearer ${access_token}`,
}

const response = await postData(url, data, headers)
console.log(response)

const fixed_data = {
    "alerts": [
        {
            "id": "alert1",
            "triggered_at": "2021-07-17T16:29:20-07:00",
            "rule": "A rule to rule all rules",
            "references": [
                {
                    "type": "transaction",
                    "id": "txn-321"
                }
            ]
        }
    ],
    "data": {
        "transactions": [
            {
                "id": "txn-321",
                "description": "This is Shady!",
                "completed_at": "2018-07-24T12:34:56.789Z",
                "amount": {
                    "amount": 350000,
                    "currency_code": "USD"
                },
                "amount_local": {
                    "amount": 350000,
                    "currency_code": "USD"
                },
            }
        ]
    }
}

const fixed_response = await postData(url, fixed_data, headers)
console.log(fixed_response)