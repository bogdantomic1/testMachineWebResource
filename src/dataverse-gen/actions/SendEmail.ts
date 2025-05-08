/* eslint-disable*/
import { WebApiExecuteRequest } from "dataverse-ify";
import { StructuralProperty } from "dataverse-ify";
import { OperationType } from "dataverse-ify";

// Action SendEmail
export const SendEmailMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.email",
      structuralProperty: StructuralProperty.EntityType
      },		
      "IssueSend": {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "TrackingToken": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "SendEmail"
};

export interface SendEmailRequest extends WebApiExecuteRequest {
  entity?: import("dataverse-ify").EntityReference | import("../entities/Email").Email;
  IssueSend?: boolean;
  TrackingToken?: string;
}