import { Schema } from "mongoose";

export const findAll = (schema: any) => {
  return schema
    .find()
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      return error;
    });
};

export const InsertOne = (schema: any) => {
  return schema
    .save()
    .then((result: any) => {
      return result;
    })
    .catch((err: any) => {
      return err;
    });
};
export const FindOne = (schema: any, query: any) => {
  return schema
    .findOne(query)
    .then((result: any) => {
      return result;
    })
    .catch((err: any) => {
      return err;
    });
};

export const checkExistance = (schema: any, query: any) => {
  return schema
    .findOne(query)
    .then((result: any) => {
      return result;
    })
    .catch((err: any) => {
      return err;
    });
};
