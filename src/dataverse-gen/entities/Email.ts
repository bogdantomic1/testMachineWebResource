/* eslint-disable*/

// Entity Email FormContext
export interface EmailFormContext extends Xrm.FormContext {
    getAttribute(): Xrm.Attributes.Attribute[];
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Attributes.Attribute;
    getAttribute(index: number): Xrm.Attributes.Attribute;

    getControl(): Xrm.Controls.Control[];
    getControl<T extends Xrm.Controls.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Controls.Control;
    getControl(index: number): Xrm.Controls.Control;

    /*
    Type the number of minutes spent creating and sending the email. The duration is used in reporting.
    */
    getAttribute(name: 'actualdurationminutes'): Xrm.Attributes.NumberAttribute;
    /*
    Type the number of minutes spent creating and sending the email. The duration is used in reporting.
    */
    getControl(name: 'actualdurationminutes'): Xrm.Controls.NumberControl;
    /*
    Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email.
    */
    getAttribute(name: 'actualend'): Xrm.Attributes.DateAttribute;
    /*
    Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email.
    */
    getControl(name: 'actualend'): Xrm.Controls.DateControl;
    /*
    Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email.
    */
    getAttribute(name: 'actualstart'): Xrm.Attributes.DateAttribute;
    /*
    Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email.
    */
    getControl(name: 'actualstart'): Xrm.Controls.DateControl;
    /*
    Shows the umber of attachments of the email message.
    */
    getAttribute(name: 'attachmentcount'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the umber of attachments of the email message.
    */
    getControl(name: 'attachmentcount'): Xrm.Controls.NumberControl;
    /*
    Shows the number of times an email attachment has been viewed.
    */
    getAttribute(name: 'attachmentopencount'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the number of times an email attachment has been viewed.
    */
    getControl(name: 'attachmentopencount'): Xrm.Controls.NumberControl;
    /*
    Hash of base of conversation index.
    */
    getAttribute(name: 'baseconversationindexhash'): Xrm.Attributes.NumberAttribute;
    /*
    Hash of base of conversation index.
    */
    getControl(name: 'baseconversationindexhash'): Xrm.Controls.NumberControl;
    /*
    Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function.
    */
    getAttribute(name: 'category'): Xrm.Attributes.StringAttribute;
    /*
    Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function.
    */
    getControl(name: 'category'): Xrm.Controls.StringControl;
    /*
    Indicates if the body is compressed.
    */
    getAttribute(name: 'compressed'): Xrm.Attributes.BooleanAttribute;
    /*
    Indicates if the body is compressed.
    */
    getControl(name: 'compressed'): Xrm.Controls.OptionSetControl;
    /*
    Identifier for all the email responses for this conversation.
    */
    getAttribute(name: 'conversationindex'): Xrm.Attributes.StringAttribute;
    /*
    Identifier for all the email responses for this conversation.
    */
    getControl(name: 'conversationindex'): Xrm.Controls.StringControl;
    /*
    Indicates if the subject changed compared to the subject of the correlated email
    */
    getAttribute(name: 'correlatedsubjectchanged'): Xrm.Attributes.BooleanAttribute;
    /*
    Indicates if the subject changed compared to the subject of the correlated email
    */
    getControl(name: 'correlatedsubjectchanged'): Xrm.Controls.OptionSetControl;
    /*
    Shows how an email is correlated to an existing email in Microsoft Dynamics 365. XHeader and CustomCorrelation are not used. For system use only.
    */
    getAttribute(name: 'correlationmethod'): Xrm.Attributes.OptionSetAttribute;
    /*
    Shows how an email is correlated to an existing email in Microsoft Dynamics 365. XHeader and CustomCorrelation are not used. For system use only.
    */
    getControl(name: 'correlationmethod'): Xrm.Controls.OptionSetControl;
    /*
    Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getAttribute(name: 'createdon'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getControl(name: 'createdon'): Xrm.Controls.DateControl;
    /*
    Enter the expected date and time when email will be sent.
    */
    getAttribute(name: 'delayedemailsendtime'): Xrm.Attributes.DateAttribute;
    /*
    Enter the expected date and time when email will be sent.
    */
    getControl(name: 'delayedemailsendtime'): Xrm.Controls.DateControl;
    /*
    Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues.
    */
    getAttribute(name: 'deliveryattempts'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues.
    */
    getControl(name: 'deliveryattempts'): Xrm.Controls.NumberControl;
    /*
    Select the priority of delivery of the email to the email server.
    */
    getAttribute(name: 'deliveryprioritycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the priority of delivery of the email to the email server.
    */
    getControl(name: 'deliveryprioritycode'): Xrm.Controls.OptionSetControl;
    /*
    Select whether the sender should receive confirmation that the email was delivered.
    */
    getAttribute(name: 'deliveryreceiptrequested'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the sender should receive confirmation that the email was delivered.
    */
    getControl(name: 'deliveryreceiptrequested'): Xrm.Controls.OptionSetControl;
    /*
    Select the direction of the email as incoming or outbound.
    */
    getAttribute(name: 'directioncode'): Xrm.Attributes.BooleanAttribute;
    /*
    Select the direction of the email as incoming or outbound.
    */
    getControl(name: 'directioncode'): Xrm.Controls.OptionSetControl;
    /*
    Shows the date and time when an email reminder expires.
    */
    getAttribute(name: 'emailreminderexpirytime'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time when an email reminder expires.
    */
    getControl(name: 'emailreminderexpirytime'): Xrm.Controls.DateControl;
    /*
    Shows the status of the email reminder.
    */
    getAttribute(name: 'emailreminderstatus'): Xrm.Attributes.OptionSetAttribute;
    /*
    Shows the status of the email reminder.
    */
    getControl(name: 'emailreminderstatus'): Xrm.Controls.OptionSetControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'emailremindertext'): Xrm.Attributes.StringAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'emailremindertext'): Xrm.Controls.StringControl;
    /*
    Shows the type of the email reminder.
    */
    getAttribute(name: 'emailremindertype'): Xrm.Attributes.OptionSetAttribute;
    /*
    Shows the type of the email reminder.
    */
    getControl(name: 'emailremindertype'): Xrm.Controls.OptionSetControl;
    /*
    Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
    */
    getAttribute(name: 'exchangerate'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
    */
    getControl(name: 'exchangerate'): Xrm.Controls.NumberControl;
    /*
    Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state.
    */
    getAttribute(name: 'followemailuserpreference'): Xrm.Attributes.BooleanAttribute;
    /*
    Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state.
    */
    getControl(name: 'followemailuserpreference'): Xrm.Controls.OptionSetControl;
    /*
    Unique identifier of the data import or data migration that created this record.
    */
    getAttribute(name: 'importsequencenumber'): Xrm.Attributes.NumberAttribute;
    /*
    Unique identifier of the data import or data migration that created this record.
    */
    getControl(name: 'importsequencenumber'): Xrm.Controls.NumberControl;
    /*
    Type the ID of the email message that this email activity is a response to.
    */
    getAttribute(name: 'inreplyto'): Xrm.Attributes.StringAttribute;
    /*
    Type the ID of the email message that this email activity is a response to.
    */
    getControl(name: 'inreplyto'): Xrm.Controls.StringControl;
    /*
    Contains a set of internet headers associated to the email message in json format
    */
    getAttribute(name: 'internetmessageheaders'): Xrm.Attributes.StringAttribute;
    /*
    Contains a set of internet headers associated to the email message in json format
    */
    getControl(name: 'internetmessageheaders'): Xrm.Controls.StringControl;
    /*
    Information regarding whether the email activity was billed as part of resolving a case.
    */
    getAttribute(name: 'isbilled'): Xrm.Attributes.BooleanAttribute;
    /*
    Information regarding whether the email activity was billed as part of resolving a case.
    */
    getControl(name: 'isbilled'): Xrm.Controls.OptionSetControl;
    /*
    Indicates if the sender of the email is unresolved in case of multiple match
    */
    getAttribute(name: 'isduplicatesenderunresolved'): Xrm.Attributes.BooleanAttribute;
    /*
    Indicates if the sender of the email is unresolved in case of multiple match
    */
    getControl(name: 'isduplicatesenderunresolved'): Xrm.Controls.OptionSetControl;
    /*
    For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email.
    */
    getAttribute(name: 'isemailfollowed'): Xrm.Attributes.BooleanAttribute;
    /*
    For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email.
    */
    getControl(name: 'isemailfollowed'): Xrm.Controls.OptionSetControl;
    /*
    For internal use only. Shows whether this email Reminder is Set.
    */
    getAttribute(name: 'isemailreminderset'): Xrm.Attributes.BooleanAttribute;
    /*
    For internal use only. Shows whether this email Reminder is Set.
    */
    getControl(name: 'isemailreminderset'): Xrm.Controls.OptionSetControl;
    /*
    Information regarding whether the activity is a regular activity type or event type.
    */
    getAttribute(name: 'isregularactivity'): Xrm.Attributes.BooleanAttribute;
    /*
    Information regarding whether the activity is a regular activity type or event type.
    */
    getControl(name: 'isregularactivity'): Xrm.Controls.OptionSetControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'issafedescriptiontruncated'): Xrm.Attributes.NumberAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'issafedescriptiontruncated'): Xrm.Controls.NumberControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'isunsafe'): Xrm.Attributes.NumberAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'isunsafe'): Xrm.Controls.NumberControl;
    /*
    Indication if the email was created by a workflow rule.
    */
    getAttribute(name: 'isworkflowcreated'): Xrm.Attributes.BooleanAttribute;
    /*
    Indication if the email was created by a workflow rule.
    */
    getControl(name: 'isworkflowcreated'): Xrm.Controls.OptionSetControl;
    /*
    Contains the date and time stamp of the last on hold time.
    */
    getAttribute(name: 'lastonholdtime'): Xrm.Attributes.DateAttribute;
    /*
    Contains the date and time stamp of the last on hold time.
    */
    getControl(name: 'lastonholdtime'): Xrm.Controls.DateControl;
    /*
    Shows the latest date and time when email was opened.
    */
    getAttribute(name: 'lastopenedtime'): Xrm.Attributes.DateAttribute;
    /*
    Shows the latest date and time when email was opened.
    */
    getControl(name: 'lastopenedtime'): Xrm.Controls.DateControl;
    /*
    Shows the number of times a link in an email has been clicked.
    */
    getAttribute(name: 'linksclickedcount'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the number of times a link in an email has been clicked.
    */
    getControl(name: 'linksclickedcount'): Xrm.Controls.NumberControl;
    /*
    Unique identifier of the email message. Used only for email that is received.
    */
    getAttribute(name: 'messageid'): Xrm.Attributes.StringAttribute;
    /*
    Unique identifier of the email message. Used only for email that is received.
    */
    getControl(name: 'messageid'): Xrm.Controls.StringControl;
    /*
    MIME type of the email message data.
    */
    getAttribute(name: 'mimetype'): Xrm.Attributes.StringAttribute;
    /*
    MIME type of the email message data.
    */
    getControl(name: 'mimetype'): Xrm.Controls.StringControl;
    /*
    Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getAttribute(name: 'modifiedon'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
    */
    getControl(name: 'modifiedon'): Xrm.Controls.DateControl;
    /*
    Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments.
    */
    getAttribute(name: 'notifications'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments.
    */
    getControl(name: 'notifications'): Xrm.Controls.OptionSetControl;
    /*
    Shows how long, in minutes, that the record was on hold.
    */
    getAttribute(name: 'onholdtime'): Xrm.Attributes.NumberAttribute;
    /*
    Shows how long, in minutes, that the record was on hold.
    */
    getControl(name: 'onholdtime'): Xrm.Controls.NumberControl;
    /*
    Shows the number of times an email has been opened.
    */
    getAttribute(name: 'opencount'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the number of times an email has been opened.
    */
    getControl(name: 'opencount'): Xrm.Controls.NumberControl;
    /*
    Date and time that the record was migrated.
    */
    getAttribute(name: 'overriddencreatedon'): Xrm.Attributes.DateAttribute;
    /*
    Date and time that the record was migrated.
    */
    getControl(name: 'overriddencreatedon'): Xrm.Controls.DateControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'postponeemailprocessinguntil'): Xrm.Attributes.DateAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'postponeemailprocessinguntil'): Xrm.Controls.DateControl;
    /*
    Select the priority so that preferred customers or critical issues are handled quickly.
    */
    getAttribute(name: 'prioritycode'): Xrm.Attributes.OptionSetAttribute;
    /*
    Select the priority so that preferred customers or critical issues are handled quickly.
    */
    getControl(name: 'prioritycode'): Xrm.Controls.OptionSetControl;
    /*
    Indicates that a read receipt is requested.
    */
    getAttribute(name: 'readreceiptrequested'): Xrm.Attributes.BooleanAttribute;
    /*
    Indicates that a read receipt is requested.
    */
    getControl(name: 'readreceiptrequested'): Xrm.Controls.OptionSetControl;
    /*
    Shows the number of replies received for an email.
    */
    getAttribute(name: 'replycount'): Xrm.Attributes.NumberAttribute;
    /*
    Shows the number of replies received for an email.
    */
    getControl(name: 'replycount'): Xrm.Controls.NumberControl;
    /*
    Scheduled duration of the email activity, specified in minutes.
    */
    getAttribute(name: 'scheduleddurationminutes'): Xrm.Attributes.NumberAttribute;
    /*
    Scheduled duration of the email activity, specified in minutes.
    */
    getControl(name: 'scheduleddurationminutes'): Xrm.Controls.NumberControl;
    /*
    Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent.
    */
    getAttribute(name: 'scheduledend'): Xrm.Attributes.DateAttribute;
    /*
    Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent.
    */
    getControl(name: 'scheduledend'): Xrm.Controls.DateControl;
    /*
    Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated.
    */
    getAttribute(name: 'scheduledstart'): Xrm.Attributes.DateAttribute;
    /*
    Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated.
    */
    getControl(name: 'scheduledstart'): Xrm.Controls.DateControl;
    /*
    Sender of the email.
    */
    getAttribute(name: 'sender'): Xrm.Attributes.StringAttribute;
    /*
    Sender of the email.
    */
    getControl(name: 'sender'): Xrm.Controls.StringControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'sensitivitylabelinfo'): Xrm.Attributes.StringAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'sensitivitylabelinfo'): Xrm.Controls.StringControl;
    /*
    Shows the date and time that the email was sent.
    */
    getAttribute(name: 'senton'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time that the email was sent.
    */
    getControl(name: 'senton'): Xrm.Controls.DateControl;
    /*
    Shows the date and time by which the activities are sorted.
    */
    getAttribute(name: 'sortdate'): Xrm.Attributes.DateAttribute;
    /*
    Shows the date and time by which the activities are sorted.
    */
    getControl(name: 'sortdate'): Xrm.Controls.DateControl;
    /*
    Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function.
    */
    getAttribute(name: 'subcategory'): Xrm.Attributes.StringAttribute;
    /*
    Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function.
    */
    getControl(name: 'subcategory'): Xrm.Controls.StringControl;
    /*
    Type a short description about the objective or primary topic of the email.
    */
    getAttribute(name: 'subject'): Xrm.Attributes.StringAttribute;
    /*
    Type a short description about the objective or primary topic of the email.
    */
    getControl(name: 'subject'): Xrm.Controls.StringControl;
    /*
    Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365.
    */
    getAttribute(name: 'submittedby'): Xrm.Attributes.StringAttribute;
    /*
    Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365.
    */
    getControl(name: 'submittedby'): Xrm.Controls.StringControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'timezoneruleversionnumber'): Xrm.Attributes.NumberAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'timezoneruleversionnumber'): Xrm.Controls.NumberControl;
    /*
    Shows the email addresses corresponding to the recipients.
    */
    getAttribute(name: 'torecipients'): Xrm.Attributes.StringAttribute;
    /*
    Shows the email addresses corresponding to the recipients.
    */
    getControl(name: 'torecipients'): Xrm.Controls.StringControl;
    /*
    Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365.
    */
    getAttribute(name: 'trackingtoken'): Xrm.Attributes.StringAttribute;
    /*
    Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365.
    */
    getControl(name: 'trackingtoken'): Xrm.Controls.StringControl;
    /*
    For internal use only.
    */
    getAttribute(name: 'traversedpath'): Xrm.Attributes.StringAttribute;
    /*
    For internal use only.
    */
    getControl(name: 'traversedpath'): Xrm.Controls.StringControl;
    /*
    Time zone code that was in use when the record was created.
    */
    getAttribute(name: 'utcconversiontimezonecode'): Xrm.Attributes.NumberAttribute;
    /*
    Time zone code that was in use when the record was created.
    */
    getControl(name: 'utcconversiontimezonecode'): Xrm.Controls.NumberControl;
}
// Entity Email
export const emailMetadata = {
  typeName: "mscrm.email",
  logicalName: "email",
  collectionName: "emails",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    attachmentcount: "Integer",
    attachmentopencount: "Integer",
    baseconversationindexhash: "Integer",
    deliveryattempts: "Integer",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    issafedescriptiontruncated: "Integer",
    isunsafe: "Integer",
    linksclickedcount: "Integer",
    onholdtime: "Integer",
    opencount: "Integer",
    replycount: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    correlationmethod: "Optionset",
    deliveryprioritycode: "Optionset",
    emailreminderstatus: "Optionset",
    emailremindertype: "Optionset",
    notifications: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    delayedemailsendtime: "DateAndTime:UserLocal",
    emailreminderexpirytime: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastopenedtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    postponeemailprocessinguntil: "DateAndTime:UserLocal",
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    senton: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    CorrelatedActivityId_Email: ["mscrm.email"],
    ReceivingMailboxId_Email: ["mscrm.mailbox"],
    SensitivityLabelId_Email: ["mscrm.sensitivitylabel"],
    acceptingentityid: ["mscrm.queue"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    descriptionblobid_email: ["mscrm.fileattachment"],
    ownerid_email: ["mscrm.principal"],
    parentactivityid: ["mscrm.email"],
    sendersaccount: ["mscrm.account"],
    sla_email_sla: ["mscrm.sla"],
    stageid_processstage: ["mscrm.processstage"],
    templateid: ["mscrm.template"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    emailsender: ["account","contact","queue","systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account","adx_invitation","asyncoperation","contact","knowledgearticle","knowledgebaserecord","mspp_adplacement","mspp_pollplacement","mspp_publishingstatetransitionrule","mspp_redirect","mspp_shortcut","mspp_website"],
    sendermailboxid: ["mailbox"],
    slainvokedid: ["sla"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};

// Attribute constants
export const enum EmailAttributes {
  AcceptingEntityId = "acceptingentityid",
  AcceptingEntityIdName = "acceptingentityidname",
  AcceptingEntityTypeCode = "acceptingentitytypecode",
  ActivityAdditionalParams = "activityadditionalparams",
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualStart = "actualstart",
  AttachmentCount = "attachmentcount",
  AttachmentOpenCount = "attachmentopencount",
  BaseConversationIndexHash = "baseconversationindexhash",
  bcc = "bcc",
  Category = "category",
  cc = "cc",
  Compressed = "compressed",
  ConversationIndex = "conversationindex",
  ConversationTrackingId = "conversationtrackingid",
  CorrelatedActivityId = "correlatedactivityid",
  CorrelatedActivityIdName = "correlatedactivityidname",
  correlatedsubjectchanged = "correlatedsubjectchanged",
  CorrelationMethod = "correlationmethod",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  DelayedEmailSendTime = "delayedemailsendtime",
  DeliveryAttempts = "deliveryattempts",
  DeliveryPriorityCode = "deliveryprioritycode",
  DeliveryReceiptRequested = "deliveryreceiptrequested",
  Description = "description",
  DescriptionBlobId = "descriptionblobid",
  DescriptionBlobId_Name = "descriptionblobid_name",
  DirectionCode = "directioncode",
  EmailReminderExpiryTime = "emailreminderexpirytime",
  EmailReminderStatus = "emailreminderstatus",
  EmailReminderText = "emailremindertext",
  EmailReminderType = "emailremindertype",
  EmailSender = "emailsender",
  EmailSenderName = "emailsendername",
  EmailSenderObjectTypeCode = "emailsenderobjecttypecode",
  EmailSenderYomiName = "emailsenderyominame",
  EmailTrackingId = "emailtrackingid",
  ExchangeRate = "exchangerate",
  FollowEmailUserPreference = "followemailuserpreference",
  from = "from",
  ImportSequenceNumber = "importsequencenumber",
  InReplyTo = "inreplyto",
  InternetMessageHeaders = "internetmessageheaders",
  IsBilled = "isbilled",
  IsDuplicateSenderUnresolved = "isduplicatesenderunresolved",
  IsEmailFollowed = "isemailfollowed",
  IsEmailReminderSet = "isemailreminderset",
  IsRegularActivity = "isregularactivity",
  IsSafeDescriptionTruncated = "issafedescriptiontruncated",
  IsUnsafe = "isunsafe",
  IsWorkflowCreated = "isworkflowcreated",
  LastOnHoldTime = "lastonholdtime",
  LastOpenedTime = "lastopenedtime",
  LinksClickedCount = "linksclickedcount",
  MessageId = "messageid",
  MessageIdDupCheck = "messageiddupcheck",
  MimeType = "mimetype",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  Notifications = "notifications",
  OnHoldTime = "onholdtime",
  OpenCount = "opencount",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentActivityId = "parentactivityid",
  ParentActivityIdName = "parentactivityidname",
  ParentSensitivityLabelId = "parentsensitivitylabelid",
  PostponeEmailProcessingUntil = "postponeemailprocessinguntil",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  ReadReceiptRequested = "readreceiptrequested",
  ReceivingMailboxId = "receivingmailboxid",
  ReceivingMailboxIdName = "receivingmailboxidname",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  related = "related",
  ReminderActionCardId = "reminderactioncardid",
  ReplyCount = "replycount",
  ReservedForInternalUse = "reservedforinternaluse",
  SafeDescription = "safedescription",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  Sender = "sender",
  SenderMailboxId = "sendermailboxid",
  SenderMailboxIdName = "sendermailboxidname",
  SendersAccount = "sendersaccount",
  SendersAccountName = "sendersaccountname",
  SendersAccountObjectTypeCode = "sendersaccountobjecttypecode",
  SendersAccountYomiName = "sendersaccountyominame",
  SensitivityLabelId = "sensitivitylabelid",
  SensitivityLabelIdName = "sensitivitylabelidname",
  SensitivityLabelInfo = "sensitivitylabelinfo",
  SentOn = "senton",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SortDate = "sortdate",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  Subcategory = "subcategory",
  Subject = "subject",
  SubmittedBy = "submittedby",
  TemplateId = "templateid",
  TemplateIdName = "templateidname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  to = "to",
  ToRecipients = "torecipients",
  TrackingToken = "trackingtoken",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}
