import {
  ct_MachineFormContext,
  ct_MachineAttributes,
} from "../dataverse-gen/entities/ct_Machine";

export async function OnLoad(context: Xrm.Events.EventContext): Promise<void> {
  const formContext = context.getFormContext();
  console.log("OnLoad hook" + formContext.data.entity.getEntityName());
  formContext
    .getAttribute(ct_MachineAttributes.ct_Price)
    ?.addOnChange(name_onChange);
  // Run the onchange event to show/hide the number of bathrooms field
  name_onChange(context as Xrm.Events.Attribute.ChangeEventContext);
}

function name_onChange(context: Xrm.Events.Attribute.ChangeEventContext): void {
  const formContext = context.getFormContext() as ct_MachineFormContext;
  const name = formContext.getAttribute(ct_MachineAttributes.ct_Name);
  const price = formContext
    .getAttribute(ct_MachineAttributes.ct_Price)
    ?.getValue();
  if (name) {
    name?.setValue(price.toString());
  }
}
