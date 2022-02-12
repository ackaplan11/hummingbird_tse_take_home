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

// Make POST request

const url = 'https://api.sandbox.hummingbird.co/cases'

const data = {
  "case": {
    "name": "Test Case 1",
    "type": "filing",
    "id": `internal-id-${Math.random()}`,
    "individuals": [
      { "names": [ { "name": "Andrew Kaplan", "first_name": "Andrew", "last_name": "Kaplan" } ] }
    ],
    "institutions": [
      {
        "name": "Bank of Hummingbird",
        "institution_type": "DEPOSITORY_INSTITUTION",
        "primary_federal_regulator": "FDIC",
        "tin": "123123123",
        "tin_type": "EIN"
      }
    ],
    "filings": [
      {
        "id": `us-filing-${Math.random()}`,
        "jurisdiction": "FINCEN",
        "workflow": "api-aml-investigation",
        "filing_data": {
          "filing_type": "INITIAL",
          "activities": [
            "SOURCE_OF_FUNDS"
          ],
        }
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
