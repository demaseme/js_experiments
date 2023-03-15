import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult } 
from "aws-lambda/trigger/api-gateway-proxy";
import {Point} from "./point/point";

function getCollectionOfPoints(jsonString : string) : Point[]{
  let point_collection_string : String[] = JSON.parse(jsonString);
  let point_collection : Point [] = [];
  
  point_collection_string.forEach(s => {
    let pair = s.split(",");
    point_collection.push( new Point( Number(pair[0]).valueOf(),  Number(pair[1]).valueOf()));
  });
  console.log(point_collection);
  return point_collection;
}


export const lambdaHandler = async (
     event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    const data : string = event.body || "";
    getCollectionOfPoints(data);
    return {
      statusCode: 200,
      body: `points: ${data}`
    }
  }