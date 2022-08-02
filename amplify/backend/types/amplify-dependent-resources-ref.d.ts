export type AmplifyDependentResourcesAttributes = {
    "api": {
        "emscerttrack": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "emscerttrack4a5cb80f": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "AdminsGroupRole": "string"
        }
    },
    "storage": {
        "fileStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueriesdc13937e": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "geo": {
        "map44241868": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        },
        "placeindex82a5f62a": {
            "Name": "string",
            "Region": "string",
            "Arn": "string"
        }
    }
}