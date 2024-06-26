# Installation and upgrade {#cp_install_upgrade_container .concept}

Experienced customers can download a package to do an automated installation or upgrade of Component Pack for HCL Connections. It is best for new customers to read this introduction and at least initially to do the manual steps in this section to gain a better understanding of Component Pack.

## Ansible deployment automation framework provided by HCL {#section_lly_2sn_tnb .section}
If you are unfamiliar with Kubernetes management and its associated dependencies, or if you wish to gain insights on how to automate the
deployment process, we encourage you to explore our HCL Connections and Component Pack Deployment Automation Framework. This framework provides insights into the automation of deployment workflows and can be used as an accelerator to reduce the overhead of deploying a Connections environment.  It orchestrates the seamless setup of Kubernetes, kubectl, Helm, and performs the necessary tasks to facilitate creation of a deployment of HCL Connections and Component Pack.

For more specifics on how to use the automation, see HCL's open-source GitHub for the documents [Quickstart for setting up HCL Connections and Component Pack Deployment Automation Framework](https://github.com/HCL-TECH-SOFTWARE/connections-automation/blob/main/documentation/QUICKSTART.md) and [HCL Connections and Component Pack Deployment Automation Framework](https://github.com/HCL-TECH-SOFTWARE/connections-automation/blob/main/README.md).

## Replacing Component Pack {#section_g34_mfp_tnb .section}

Component Pack runs on top of the Kubernetes, and for important data uses persistent storage. That storage lives, in a supported way, on NFS or Amazon EFS, if you are running stuff on Amazon, so your data should be already safe.

It is possible to simply recreate Kubernetes cluster and reinstall Component Pack and simply continue using it with the data as where you left it before you did it. Removing Component Pack and/or Kubernetes doesn't affect your data at all. Just don't remove the data.

In theory, you can have multiple Kubernetes clusters with multiple installations of Component Pack, and on Connections side, by manipulating httpd.conf in your IHS, you can decide to which one to point to. Just don't try to have multiple clusters using same PVs at the same time for the sake of data consistency and reliability.

## Installation and upgrade general approach {#section_anp_tfp_tnb .section}

You will notice that we are going to use the same commands to install or upgrade Component Pack. For upgrade from Connections 7.0, the baseline we use includes Kubernetes-based components, like Elasticsearch 7-based Metrics.

## Order of installation {#order_cp_install .section}

Refer to the [HCL Connections System Requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073654) for the Kubernetes versions and platforms tested with the Component Pack.

It is recommended to review all the steps first and perform a system backup before doing the installation/upgrade.

Perform the following steps chronologically, in the order that they appear in the list, to get your Component Pack deployment up and running:

### For a fresh installation {#cp_install_table .section}

|Installing Component Pack 8|Upgrading Component Pack 7 to 8|
|-----|----|
|1.  Install or upgrade HCL Connections|1.  Install or upgrade HCL Connections|
|2.  [Set up NFS](cp_install_services_tasks.md#section_e4p_jrp_tnb)|2. Refer to [Set up NFS](cp_install_services_tasks.md#section_e4p_jrp_tnb) to ensure that you have NFS setup with proper folders and specific permissions.|
|3.  [Create the Connections namespace](cp_install_services_tasks.md#section_ln3_qp3_dvb)|3. [Back up MongoDB data](cp_install_services_tasks.md#backup_mongo3)|
|4.  [Log in to a Harbor OCI registry](cp_install_services_tasks.md#harbor_repo) |4.  [Back up Elasticsearch 7 data](cp_install_services_tasks.md#backup_es7)|
|5.  [Apply Pod security restrictions at the namespace level](cp_install_services_tasks.md#psa_namespace) |5.  [Set up OpenSearch and MongoDB volumes on NFS](cp_install_services_tasks.md#setup_nfs)|
|6.  [Set up Helm charts](cp_install_services_tasks.md#setup_helm) |6. [Uninstall k8s-psp, Infrastructure and if applicable, opensearch-master, opensearch-data, opensearch-client and kudos-boards-cp](cp_install_services_tasks.md#uninstall_charts_k8s125)|
|7. [Set up persistent volumes and persistent volume claims on NFS](cp_install_services_tasks.md#pv_pvc) |7. [Delete ingresses](cp_install_services_tasks.md#del_ingress)|
|8. [Run bootstrap](cp_install_services_tasks.md#bootstrap) |8. Upgrade system to Kubernetes v1.25|8. Upgrade system to Kubernetes v1.25|
|9. [Set up connections-env chart](cp_install_services_tasks.md#cnx_env) |9. [Set up connections-env chart](cp_install_services_tasks.md#cnx_env)|
|10. [Build MongoDB 5 image](cp_install_services_tasks.md#inst_mongo5) |10. [Log in to a Harbor OCI registry](cp_install_services_tasks.md#harbor_repo)|
|11. [Install infrastructure charts](cp_install_services_tasks.md#infra_chart) |11. [Apply Pod security restrictions at the namespace level](cp_install_services_tasks.md#psa_namespace)|
|12. [Set up Customizer](cp_install_services_tasks.md#section_n3c_xhj_dvb) |12.  [Set up Helm charts](cp_install_services_tasks.md#setup_helm) |
|13. [Install OpenSearch](cp_install_services_tasks.md#os_chart) |13. [Set up persistent volumes and persistent volume claims on NFS](cp_install_services_tasks.md#pv_pvc)|
|14. [Set up community ingress](cp_install_services_tasks.md#comm_ingress) |14. [Run bootstrap](cp_install_services_tasks.md#bootstrap) |
|15. [Set up Orient Me for OpenSearch](cp_install_services_tasks.md#orientme_os) |15. [Set up connections-env chart](cp_install_services_tasks.md#cnx_env) |
|16. [Set up Metrics for OpenSearch](cp_install_services_tasks.md#metrics_os) |16. [Build MongoDB 5 image](cp_install_services_tasks.md#inst_mongo5) |
|17. [Set up Microsoft Teams integration](cp_install_services_tasks.md#teams_integ) |17. [Install infrastructure charts](cp_install_services_tasks.md#infra_chart) |
|18. [Install community creation wizard and templates \(Tailored Experience\) chart](cp_install_services_tasks.md#comm_tailored) |18. [Migrate MongoDB data](cp_install_services_tasks.md#migrate_mongo3) |
|19. [Configure the LotusConnections-config.xml](cp_install_services_tasks.md#lotusxml) |19. [Set up Customizer](cp_install_services_tasks.md#section_n3c_xhj_dvb) |
|20. [Set up Activities Plus](cp_install_services_tasks.md#activities_plus) |20. [Install OpenSearch](cp_install_services_tasks.md#os_chart) |
|21. [Set up Connections add-in for Microsoft Outlook](cp_install_services_tasks.md#ms_outlook_addin) |21. [Migrate ElasticSearch 7 data](cp_install_services_tasks.md#migrate_mongo3) |
||22. [Reconfigure Orient Me for OpenSearch](cp_install_services_tasks.md#orientme_os)|
||23. [Set up community ingress](cp_install_services_tasks.md#comm_ingress)|
||24. [Set up Microsoft Teams integration](cp_install_services_tasks.md#teams_integ)|
||25. [Install community creation wizard and templates \(Tailored Experience\) chart](cp_install_services_tasks.md#comm_tailored)|
||26. [Configure the LotusConnections-config.xml](cp_install_services_tasks.md#lotusxml)|
||27. [Set up Activities Plus](cp_install_services_tasks.md#activities_plus)||
||28. [Set up Connections add-in for Microsoft Outlook](cp_install_services_tasks.md#ms_outlook_addin)|

For more information, see [Steps to install or upgrade to Component Pack 8](cp_install_services_tasks.md).


-   **[Upgrade considerations for Component Pack 8](../install/upgrade_considerations.md)**  
The upgrade path described in [Steps to install or upgrade to Component Pack 8](../install/cp_install_services_tasks.md) is based on a given set of components, versions, and goals. Consider the following information when deciding how best to upgrade based on your deployment and needs.

-   **[Upgrade considerations for side-by-side migration of data](../install/cp_upgrade_considerations_for_side_by_side_migration.md)**  
If your Connections upgrade strategy requires a side-by-side migration, understand how that process applies to Component Pack.

-   **[Steps to install or upgrade to Component Pack 8](../install/cp_install_services_tasks.md)**  
Use these steps to help you install the latest CR version of Component Pack 8 or replace Component Pack 7 or 8 with its latest CR version.

**Parent topic:** [Installing or upgrading Component Pack for Connections](../install/cp_install_config_intro.md)

