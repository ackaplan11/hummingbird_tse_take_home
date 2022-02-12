# Helping Customers with Technical Support #

## Step 1: Verification ##  

When dealing with customers claiming that the system is malfunctioning, without logs to prove it, we should first ensure that the customer is using our system properly. If the 'Something went wrong' message is appearing because the customer was trying to attach the document in a way that did not adhere to system specifications, the issue can be solved by guiding the customer through the proper process.  

If we are able to verify that the customer is following our intended process for attaching a document to a case, we move on to step two.

## Step 2: Determing Potential Points of Failure ##  

At this step we will communicate to the customer that their issue has been escalated to our technical support who are looking into possible causes. A point of failure that I identify for this issue could be document uploader which likely makes a 'CaseUpdateRequest' API call under the hood. I

If exploration into the underlying code shows some unhandled exception which send the user a 'Something went wrong' response without logging the error to the dev team, we move on to step 3

## Step 3: Addressing the Issue ##

In this step we make changes to the point of failure which we have identified, both to the code being executed and to our logging process so thay errors are tracked and include relevenant information for their resolution. After the changes are tested, we push the fix to production and inform the customer that their issue should be resolved. We confirm with the customer that their problem has indeed been resolved. If the problem persists, we circle back to step 2 to look into other potential points of failure while actively communicating our findings in non-technical terms to the customer.