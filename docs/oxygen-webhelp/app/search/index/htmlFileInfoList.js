define(function () {
return ["v65/configuring_mobile_mt_environment/admin_mobile_mt.html@@@Administering Connections Mobile@@@An organization administrator can access Connections Mobile policies and configuration, including setting up Connections mobile extensions by using the URL: https://org_host/mobileAdmin The user must...","v65/configuring_mobile_mt_environment/authentication_tokens_mobile_mt.html@@@Authentication and Tokens@@@Connections mobile uses the Open ID Connect protocol with OAuth 2.0 to identify users and stores access and refresh tokens in secure storage on the mobile device. It has been tested with Keycloak as...","v65/configuring_mobile_mt_environment/config_desktop_plugins_environ_mobile_mt.html@@@Configuring Desktop Plugins for the Multi-Tenant environment@@@Integrating plug-ins for HCL Connections allows you to access and update your Connections content from other applications. Use the plug-ins to share files and information between Microsoft\u2122 Windows\u2122...","v65/configuring_mobile_mt_environment/config_mobile_mt_environ.html@@@Configuring Mobile for the Multi-Tenant environment@@@The Connections mobile app for iOS and Android fully supports the Connections MT environment. User\u2019s must be using version 6.5.4 or later, as these versions contain critical fixes for multi-tenant. By...","v65/configuring_mobile_mt_environment/config_sametime_environ_mobile_mt.html@@@Configuring Sametime for the Multi-Tenant environment@@@This topic contains general information and guidance on integrating Sametime with Connections. Configure Sametime integration with Connections as per usual Connections and Sametime documentation (i.e...","v65/configuring_mobile_mt_environment/october_2020_mt__fixpack_mobile_mt.html@@@October, 2020 MT fixpack, MT customers should update mobile-config.xml@@@Issue October, 2020 MT fixpack, all MT customers should update their mobile-config.xml under the DMgr path. A customer that migrated data from an IBM cloud community that contained Surveys will see a...","v65/configuring_mobile_mt_environment/setting_up_keycloak _mobile_mt.html@@@Setting up KeyCloak for Connections Mobile@@@The Connection mobile app requires that the SSL certificate used by all endpoints is valid and trusted. Self-signed certificates or expired certificates will cause the app to fail and there is no...","v65/configuring_mobile_mt_environment/using_keycloak_identity_providers_mobile_plugins_mt.html@@@Using Keycloak Identity Providers with Mobile and Plugins@@@When the Connections Mobile and Connections Plugin applications request OAuth tokens from Keycloak, they will first authenticate the user by calling the Keycloak authentication endpoint. By default...","v65/configuring_mobile_mt_environment/using_mobile_appconfig_mt.html@@@Using the Connections Mobile app@@@User\u2019s of the app must use the \u201CMy company\u2019s server\u201D option in the account setup wizard and then enter the hostname of their MT deployment server. A full URL is not required. For example: Touch...","v65/configuring_mt_environment/config_mt_environ.html@@@Configuring the Multi-Tenant environment@@@This section details how to configure your Multi-Tenant environment...","v65/configuring_mt_environment/config_prop_mt.html@@@Configuration properties@@@This section describes the available/necessary configuration properties as well as what they refer to and their default values WebSphere and environment properties Name Description Default...","v65/configuring_mt_environment/configure_om_webclient_container_mt.html@@@Configure the OrientMe web client container for Multi-Tenant@@@Setting environment variables for OrientMe Within Component Pack, add two environment variables to the orient-web-client deployment. Variables to add to the deployment name: ORIENT_CNX_USE_REL_PATH |...","v65/configuring_mt_environment/import_keycloak_ssl_cert.html@@@Importing the Keycloak SSL certificate@@@The WebSphere Open ID Connect Relying Party TAI requires that the public signing certificate from the OIDC provider is imported into the Cell Default Trust store in WAS. The OIDC RP uses this...","v65/configuring_mt_environment/post_install_steps.html@@@Post installation steps@@@Complete the following manual procedures after validating the auto deploy scripts. To use Connections notification_v2 templates, the default templates for email notifications, follow these steps: 1...","v65/configuring_mt_environment/validating_scripts.html@@@Running the auto deploy scripts@@@Check all logs from the MT scripts for errors orwarnings. Verify that all WebSphere Nodes and Servers arerunning Check the WebSphere logs forerrors. Once you have provisioned a user, login with that...","v65/downloading/2020_monthly_updates.html@@@2020 Monthly Updates@@@Download the following HCL Connections 6.5 MT May Monthly Update package from the HCL License & Delivery Portal. File ID File Name File Description HCL_Connections_MT_May_20_Update...","v65/downloading/2021_monthly_updates.html@@@2021 Monthly Updates@@@Download the following HCL Connections 6.5 MT January 2021 Monthly Update package from the HCL License & Delivery Portal. File ID File Name File Description HCL_Connections_MT_January_21_Update...","v65/downloading/HCL MT CH-MSP Downloading HCL Connections Multi-Tenant packages and Monthly releases.html@@@Downloading HCL Connections Multi-Tenant packages, including Monthly Releases and Fix Lists@@@Download the following HCL Connections Multi-Tenant packages from the HCL License & Delivery Portal. Refer to, Downloading the latest Cumulative Refresh (CR) and related updates Name Package Download...","v65/importing_data/import_staging_data.html@@@Staging the Database Import@@@This page explains the rationale behind a preliminary import of the databases and summarizes the actions you will need to take. Because the collaboration model for accommodating users external to your...","v65/importing_data/importing_data.html@@@Importing Data@@@Important: Please make sure that users from an organization do NOT login and access Connections BEFORE the data from the organization are imported!...","v65/importing_data/process_flow_importing_data.html@@@Process flow for importing data@@@Important: Please make sure that users from an organization do NOT login and access Connections BEFORE the data from the organization are imported! This first delivery of files will be used to copy...","v65/importing_data/setting_org_read_only.html@@@How to set an org to Read-Only@@@When you are ready to request the final DB export and update binary files it is recommended that you set the org to read only. This can be performed by an admin of the Org using the customizer tool...","v65/importing_data/setting_up_s3_bucket.html@@@Setting up an S3 bucket@@@Prerequisite: An AWS account Log in to the AWS console and open the Buckets page: https://s3.console.aws.amazon.com/s3/home Click Create bucket . Specify a bucket name and make sure Block all public...","v65/importing_data/txt_config_reclone_parms.html@@@TXT config file and Rclone parameters@@@The requirements that have been put in place for the AWS bucket and rclone encryption attributes are intended to support a transfer process that is primarily intended to protect the transfer of the...","v65/installing_mt_cp_docs/installing.html@@@Installing HCL Connections 6.5 CR1a for a Multi-Tenant Environment@@@This topic contains general information, guidance on installing HCL Connections CR1a for a Multi-Tenant environment, as well as updates required to install and configure HCL Connections CR1a...","v65/managing_external_users/ext_user_can_cannot.html@@@What external users can and can&apos;t do@@@As a general rule, external users in the Multi-Tenant environment can participate fully in things they are directly involved with, such as a file they&apos;ve created or that someone has shared with them...","v65/managing_external_users/man_ext_users_overview.html@@@Managing external user access@@@This section describes how to provision external users and what external users can and cannot do...","v65/managing_external_users/prov_ext_users.html@@@Provisioning external users@@@The following presentation describes the flow for external user data manipulation. Provisioning external users is a separate step that should be performed after the data migration has been completed...","v65/mt_dependencies/mt_dependencies.html@@@Multi-Tenant Dependencies@@@...","v65/mt_dependencies/settingup_open_ldap_mt.html@@@Setting up OpenLDAP for Mulit-Tenant@@@The following changes were made to the way ldap is defined - the mtldif.zip file attached herein contains all the updates for the sample tree that you can populate into a test ldap server. Redefining...","v65/mt_dependencies/understanding_keycloak_dependency.html@@@Understanding the Keycloak dependency@@@Note: The dotted line from connections to ldap is not required for authentication. It may be used for group support from application level. Although it should really be done using keycloak APIs, the...","v65/overview/feature_diff_mt_and_cnx.html@@@Feature differences between HCL Connections MT and IBM Connections@@@Features HCL Connections IBM Connections Notes Groups Not supported Supported In IBM Cloud, Groups were available in Activities, Communities, and Files Invite guest from UI Not supported Supported MT...","v65/overview/known_issues.html@@@Known Issues@@@The following are known issues that you may encounter as you set up and test your multi-tenant environment. Issue: MT does not support IE11 Work around: Please use another browser...","v65/overview/sys_reqs.html@@@System Requirements@@@OS: Centos7 DB: DB211.1.0 OpenLdap -minimum2.4.44+ OR Directory Server: IBM Security Directory Server6.4 Http Server: - IHS 8.5.5.18 WAS 8.5.5.18 Additional information for on-premises products can...","v65/overview/welcome.html@@@Overview@@@This release is reserved strictly for HCL&apos;s Cloud Hosting Partners. This space is for you to reference HCL Connections 6.5 CR1a Muti- Tenant Product Documentation and collaborate with your fellow...","v65/provisioing_apis/provisioning_apis.html@@@Provisioning APIs@@@Refer to the Connections Cloud API Documentation When calling the provisioning APIs, use the credential for users with the &lt;bss-provisioning-admin&gt; role defined in each Connections app. All...","v65/welcome_65/welcome_admin.html@@@HCL Connections MT v6.5 CH MSP Product Documentation@@@Welcome to the HCL Connections MT CH MSP Product Documentation site. HCL Connections is social networking software designed for the workplace. Its features help you to establish dynamic networks that connect you to the people and information you need to achieve your business goals...","v7/configuringv7features/TouchpointMt/base_default_indiv_setting_touchpoint_MT.html@@@Base, Default and Individual Settings@@@Touchpoint MT uses a triple-phased config inheritance approach. In the first step the values from touchpoint-config.xml are being read and provide a base configuration. In the second step, the...","v7/configuringv7features/TouchpointMt/configuring_touchpoint_mt_overview.html@@@Configuring Touchpoint for MT@@@This documentation describes the changes for Touchpoint running on an MT installation. Touchpoint MT splits the configuration into two parts: Host-specific configuration and org specific...","v7/configuringv7features/TouchpointMt/protected_keys_touchpoint_MT.html@@@Protected keys@@@During Config inheritance a few config keys are protected and cannot be set by the Org Admin (Step 3). This feature is here to make Touchpoint MT work properly and eliminate chances to misconfigure...","v7/configuringv7features/TouchpointMt/setting_up_touchpoint_MT_org.html@@@Setting up Touchpoint MT for an Org (touchpont-config.xml)@@@After Installing Touchpoint , perform the following instructions to set up and configure Touchpoint for MT. Open the App Registry (endpoint /appreg/apps) Create a new App Provide the following...","v7/configuringv7features/TouchpointMt/tracing_instrux__touchpoint_MT.html@@@Tracing Instructions@@@To enable trace logging, please set com.ibm.social.apps-touchpoint. * to ALL When Touchpoint MT redirects from Touchpoint to Homepage, it uses an HTTP redirect but adds a response header...","v7/configuringv7features/chatIintegration/chat_integ.html@@@Integrating Chat (chatIdentity)@@@Connections 7.0 includes support for Chat integration with Microsoft Teams. An administrator would follow the steps in the Enabling app registry extensions for Microsoft Teams integration topic to...","v7/configuringv7features/config_v7_features.html@@@Configuring MT v7.0 Features@@@Setup and configure the following MT v7.0 features...","v7/configuringv7features/meetingintegration/meet_integ.html@@@Integrating Meetings (meetingIdentity)@@@Connections 7.0 includes support for Meetings integration. The Meeting URL is managed via a profile extension attribute meetingIdentity and will be set up by an administrator using an API Note: The...","v7/configuringv7features/round_trip_editing/t_admin_enabling_roundtrip_edit.html@@@Enabling round-trip editing for files@@@Enable round-trip editing for files so that users can check out a file and edit it locally with one click. Round-trip editing is not available by default. Being able to perform round-trip editing is...","v7/downloading/2021_monthly_updates.html@@@2021 Monthly Updates@@@Download the following HCL Connections 6.5 MT January 2021 Monthly Update package from the HCL License & Delivery Portal. File ID File Name File Description HCL_Connections_MT_January_21_Update...","v7/downloading/HCL MT CH-MSP Downloading HCL Connections Multi-Tenant packages and Monthly releases.html@@@Updating HCL Connections\u2122 7.0 with the latest interim fix@@@Download the following HCL Connections Multi-Tenant packages from the HCL License and Delivery Portal. Refer to, Updating HCL Connections 7.0 with the latest interim fix to install the latest iFix...","v7/installing MT CP Docs/migrating_to_v7_mt.html@@@Migrating to HCL Connections v7.0 for a Multi-Tenant Environment@@@This topic contains general information, guidance on installing HCL Connections CR1a for a Multi-Tenant environment, as well as updates required to install and configure HCL Connections CR1a...","v7/keycloak_authentication_sso/keycloak_auth_sso.html@@@Keycloak Authentication and SSO@@@Note: The dotted line from connections to LDAP is not required for authentication. It may be used for group support from application level. Although it should really be done using keycloak APIs, the...","v7/ldap_group/providing_ldap_group_support.html@@@Providing LDAP Group Support for the org-admin role in MT@@@This information allows MSPs to create an LDAP group that contains the individuals with org admin privileges. Create a group in LDAP that MSP manages for their customers, that consists solely of those...","v7/managing_external_users/ext_user_can_cannot.html@@@What external users can and can&apos;t do@@@As a general rule, external users in the Multi-Tenant environment can participate fully in things they are directly involved with, such as a file they&apos;ve created or that someone has shared with them...","v7/managing_external_users/man_ext_users_overview.html@@@Managing external user access@@@This section describes how to provision external users and what external users can and cannot do...","v7/managing_external_users/prov_ext_users.html@@@Provisioning external users@@@The following presentation describes the flow for external user data manipulation. Provisioning external users is a separate step that should be performed after the data migration has been completed...","v7/migrating/comp_pack.html@@@Component Pack@@@Import 6.5 PVs (/pv-connections) onto new system at the same level as your source. Install Component Pack v7.0.0.2 services on new system following this procedure, Upgrading Component Pack to the...","v7/migrating/connections.html@@@Connections@@@Install HCL Connections v7 on the new system following this procedure: Installing Connections Apply the HCL Connections v7.0 Multi Tenant Update following this procedure: Updating HCL Connections 7.0...","v7/migrating/mt_side_by_side_upgrade.html@@@Upgrading MT via Side by Side Migration@@@This side-by-side upgrade is used for migrating Connections/CP 6.5 to Connections/CP 7.0...","v7/migrating/switching_dns.html@@@Switching the dns to route to a new system (Post upgrade completion)@@@Before giving access the new system to users and want to test locally with few users, you can make following change, test, and then give access to users in production by registering the ips into DNS...","v7/migrating/valid_data.html@@@Validating and Verifying the Data@@@Connect to es-client-7 pod: kubectl exec -it es-client-7- pod-id -n connections bash pwd: /opt/elasticsearch-7.10.1 cd probe Use sendRequest to search for indexed documents Note : After migration to...","v7/overview/delineation_cnx_mt_and_msps.html@@@Delineation and separation of responsibilities between Connections MT and MSP:@@@It appears there is some confusion around the extend of the capabilities of Connections MT and where an MSP will need to provide additional APIs or wrapper layers. Weve gone through the most important...","v7/overview/feature_diff_mt_and_cnx.html@@@Feature differences between HCL Connections MT and IBM Connections@@@Features HCL Connections IBM Connections Notes Groups Not supported Supported In IBM Cloud, Groups were available in Activities, Communities, and Files Invite guest from UI Not supported Supported MT...","v7/overview/known_issues.html@@@Known Issues@@@The following are known issues that you may encounter as you set up and test your multi-tenant environment. Issue: MT does not support IE11 Work around: Please use another browser...","v7/overview/sys_reqs.html@@@System Requirements@@@OS: Centos 7 DB: DB2 11.1.4.5 OpenLdap -minimum 2.4.44+ OR Directory Server: IBM Security Directory Server 6.4 Http Server: - IHS 8.5.5.19 WAS 8.5.5.19 Additional information for on-premises products...","v7/overview/welcome.html@@@Welcome@@@This release is reserved strictly for HCL&apos;s Cloud Hosting Partners. This space is for you to reference HCL Connections v7.0 Muti- Tenant Product Documentation and collaborate with your fellow hosting...","v7/provisioing_apis_7/provisioning_apis_7.html@@@Provisioning APIs for v7.0@@@Refer to the Connections Cloud API Documentation When calling the provisioning APIs, use the credential for users with the &lt;bss-provisioning-admin&gt; role defined in each Connections app. All...","v7/updating_config_files_via_autodeploy/updating_config_files_via_autodeploy.html@@@Updating configuration files via HCL AutoDeploy@@@The MT Update project provides an automated way to enable the HCL Connections environment for multi tenancy. This is done via the following steps: Update configuration files via HCL AutoDeploy verify...","v7/welcome/welcome_admin.html@@@HCL Connections MT v7.0 CH MSP Product Documentation@@@Welcome to the HCL Connections MT CH MSP Product Documentation site. HCL Connections is social networking software designed for the workplace. Its features help you to establish dynamic networks that connect you to the people and information you need to achieve your business goals..."];
});