/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateVesselInput = {
  id?: string | null;
  name: string;
  ship_type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  heading?: number | null;
  speed?: number | null;
  rot?: string | null;
  accuracy?: number | null;
  course?: number | null;
  navigational_status?: string | null;
  destination?: string | null;
};

export type ModelVesselConditionInput = {
  name?: ModelStringInput | null;
  ship_type?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  heading?: ModelFloatInput | null;
  speed?: ModelFloatInput | null;
  rot?: ModelStringInput | null;
  accuracy?: ModelFloatInput | null;
  course?: ModelFloatInput | null;
  navigational_status?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  and?: Array<ModelVesselConditionInput | null> | null;
  or?: Array<ModelVesselConditionInput | null> | null;
  not?: ModelVesselConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateVesselInput = {
  id: string;
  name?: string | null;
  ship_type?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  heading?: number | null;
  speed?: number | null;
  rot?: string | null;
  accuracy?: number | null;
  course?: number | null;
  navigational_status?: string | null;
  destination?: string | null;
};

export type DeleteVesselInput = {
  id?: string | null;
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  ship_type?: ModelStringInput | null;
  latitude?: ModelFloatInput | null;
  longitude?: ModelFloatInput | null;
  heading?: ModelFloatInput | null;
  speed?: ModelFloatInput | null;
  rot?: ModelStringInput | null;
  accuracy?: ModelFloatInput | null;
  course?: ModelFloatInput | null;
  navigational_status?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  and?: Array<ModelVesselFilterInput | null> | null;
  or?: Array<ModelVesselFilterInput | null> | null;
  not?: ModelVesselFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateVesselMutation = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type UpdateVesselMutation = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type DeleteVesselMutation = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type GetVesselQuery = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type ListVesselsQuery = {
  __typename: "ModelVesselConnection";
  items: Array<{
    __typename: "Vessel";
    id: string;
    name: string;
    ship_type: string | null;
    latitude: number | null;
    longitude: number | null;
    heading: number | null;
    speed: number | null;
    rot: string | null;
    accuracy: number | null;
    course: number | null;
    navigational_status: string | null;
    destination: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateVesselSubscription = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type OnUpdateVesselSubscription = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

export type OnDeleteVesselSubscription = {
  __typename: "Vessel";
  id: string;
  name: string;
  ship_type: string | null;
  latitude: number | null;
  longitude: number | null;
  heading: number | null;
  speed: number | null;
  rot: string | null;
  accuracy: number | null;
  course: number | null;
  navigational_status: string | null;
  destination: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVessel(
    input: CreateVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<CreateVesselMutation> {
    const statement = `mutation CreateVessel($input: CreateVesselInput!, $condition: ModelVesselConditionInput) {
        createVessel(input: $input, condition: $condition) {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVesselMutation>response.data.createVessel;
  }
  async UpdateVessel(
    input: UpdateVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<UpdateVesselMutation> {
    const statement = `mutation UpdateVessel($input: UpdateVesselInput!, $condition: ModelVesselConditionInput) {
        updateVessel(input: $input, condition: $condition) {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVesselMutation>response.data.updateVessel;
  }
  async DeleteVessel(
    input: DeleteVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<DeleteVesselMutation> {
    const statement = `mutation DeleteVessel($input: DeleteVesselInput!, $condition: ModelVesselConditionInput) {
        deleteVessel(input: $input, condition: $condition) {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVesselMutation>response.data.deleteVessel;
  }
  async GetVessel(id: string): Promise<GetVesselQuery> {
    const statement = `query GetVessel($id: ID!) {
        getVessel(id: $id) {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVesselQuery>response.data.getVessel;
  }
  async ListVessels(
    filter?: ModelVesselFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVesselsQuery> {
    const statement = `query ListVessels($filter: ModelVesselFilterInput, $limit: Int, $nextToken: String) {
        listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            ship_type
            latitude
            longitude
            heading
            speed
            rot
            accuracy
            course
            navigational_status
            destination
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVesselsQuery>response.data.listVessels;
  }
  OnCreateVesselListener: Observable<OnCreateVesselSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateVessel {
        onCreateVessel {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`
    )
  ) as Observable<OnCreateVesselSubscription>;

  OnUpdateVesselListener: Observable<OnUpdateVesselSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVessel {
        onUpdateVessel {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`
    )
  ) as Observable<OnUpdateVesselSubscription>;

  OnDeleteVesselListener: Observable<OnDeleteVesselSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVessel {
        onDeleteVessel {
          __typename
          id
          name
          ship_type
          latitude
          longitude
          heading
          speed
          rot
          accuracy
          course
          navigational_status
          destination
        }
      }`
    )
  ) as Observable<OnDeleteVesselSubscription>;
}
