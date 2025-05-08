/* eslint-disable*/
import { ct_machineMetadata } from "./entities/ct_Machine";
import { emailMetadata } from "./entities/Email";
import { SendEmailMetadata } from "./actions/SendEmail";

export const Entities = {
  ct_Machine: "ct_machine",
  Email: "email",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    ct_machine: ct_machineMetadata,
    email: emailMetadata,
  },
  actions: {
    SendEmail: SendEmailMetadata,
  }
};