import { axiosCall } from "../apiCall";

export function organizationRequest(api, data = {}, usetoken = true) {
  let method = "post";
  let url = "";
  let config = {};

  switch (api) {
    //get all contacts
    case "retrieve":
      method = "post";
      url = "m/organization/retrieve";
      data = {};
      usetoken = true;
      break;

    //add
    case "add":
      data._id = undefined;
      method = "post";
      url = "m/organization/add";
      data = data;
      usetoken = true;
      break;

    //update
    case "update":
      method = "post";
      url = "m/organization/update/" + data._id;
      data = data;
      usetoken = true;
      break;

    //delte
    case "delete":
      method = "post";
      url = "m/organization/delete" + data._id;
      usetoken = true;
      break;

    //get by id
    case "retrieveByID":
      method = "post";
      url = "m/organization/retrieve/" + data._id;
      data = { id: data._id };
      usetoken = true;
      break;

    default:
      break;
  }

  return axiosCall(method, url, config, data, usetoken);
}
