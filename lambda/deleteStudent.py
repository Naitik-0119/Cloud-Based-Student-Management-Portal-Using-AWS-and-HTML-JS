import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('StudentData')

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        student_id = body['studentid']
        
        response = table.delete_item(
            Key={
                'studentid': student_id
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Student deleted successfully!'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }