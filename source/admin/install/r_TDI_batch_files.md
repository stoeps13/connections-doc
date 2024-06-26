# Batch files for processing Profiles data {#lotusconnectionbatchfilesfortivolidirectoryintegrator .reference}

HCL Connections provides several batch files that automate the collection and processing of LDAP data for the Profiles database.

## Batch file functions { .section}

**Note:** The name of each batch file ends with the .sh suffix for the IBM® AIX® and Linux™ operating systems and with the .bat suffix for the Microsoft™ Windows™ operating system.

The following list describes each batch file and its functions. You can search for more information about these files in the help topics.

clearLock
:   Delete the lock file that is generated by the sync\_all\_dns batch file.

collect\_dns
:   Create a file called collect.dns that contains the distinguished names from the LDAP directory. This batch file is used in the first step of the process to populate the Profiles database.

delete\_or\_inactivate\_employees
:   Deactivate employee records in the Profiles database. The records are not removed from the Profiles database but are set to an inactive state and the employee login and mail address values are removed. These changes are propagated to the member and login tables in the databases of installed applications. The records to be deactivated are defined in the delete\_or\_inactivate\_employees.in file. To remove users from only the Profiles database, change the value of the sync\_delete\_or\_inactivate property in the profiles\_tdi.properties file to delete.

    **Note:** You must manually create the delete\_or\_inactivate\_employees.in file. Use the following format for adding entries:

    $dn:cn=Any User3,cn=Users,l=Westford,st=Kansas,c=US,ou=Marketing,o=ABC Company,dc=ibm,dc=com uid:Any User3

    .

    $dn:cn=Any User99,cn=Users,l=Westford,st=Kansas,c=US,ou=Marketing,o=ABC Company,dc=ibm,dc=com uid:Any User3

    .

dump\_photos\_to\_files
:   Copy all the photos from the PHOTO table in the Profiles database to a folder on the local system called dump\_photos. This batch file also creates a local file called collect\_photos.in that contains the UID and URL of each photo.

dump\_pronounce\_to\_files
:   Copy all the pronunciation files from the PRONUNCIATION table in the Profiles database to a folder on the local system called dump\_pronounce. the local files. This batch file also creates a local file called collect\_pronounce.in that contains the UID and URL of each pronunciation file.

fill\_country
:   Populate the COUNTRY table in the Profiles database from the isocc.csv file.

fill\_department
:   Populate the DEPARTMENT table in the Profiles database from the deptinfo.csv file.

fill\_emp\_type
:   Populate the EMP\_TYPE table in the Profiles database from the emptype.csv file.

fill\_organization
:   Populate the ORGANIZATION table in the Profiles database from the orginfo.csv file.

fill\_workloc
:   Populate the WORKLOC table in the Profiles database from the workloc.csv file.

load\_photos\_from\_files
:   Load all the photos from the dump\_photos folder on the local system to the PHOTO table in the Profiles database. This batch file reads the collect\_photos.in file and the dump\_photos folder that you created with the dump\_photos\_to\_files batch file. This batch file loads photos only for people who are already recorded in the database.

load\_pronounce\_from\_files
:   Load all the pronunciation files from the dump\_pronounce folder on the local system to the PRONUNCIATION table in the Profiles database. This batch file reads the collect\_pronounce.in file and the dump\_pronounce folder that you created with the dump\_pronounce\_to\_files batch file. This batch file loads pronunciation files only for people who are already recorded in the database.

mark\_managers
:   Set the PROF\_IS\_MANAGER field in the Profiles database, based on the value of the PROF\_MANAGER\_UID field in the employee records.

populate\_from\_dn\_file
:   Populate the Profiles database from the source LDAP directory. This batch file reads the collect.dns data file that you created with the collect\_dns batch file. The batch file also updates existing employee records in the Profiles database.

process\_ad\_changes
:   Synchronize LDAP directory changes with the Profiles database when your LDAP directory type is Microsoft Active Directory. This batch file is stored in the solution-dir/Samples directory. For more information, see [Active Directory Change Detection Connector](http://www-01.ibm.com/support/knowledgecenter/SSCQGF_7.2.0.1/com.ibm.IBMDI.doc_7.2.0.1/rg_conn_adchangedetection.html?lang=en).

    **Note:** The sync\_all\_dns script is recommended when you want to synchronize changes in the LDAP directory with the Profiles database.

process\_draft\_updates
:   Synchronize changes from the Profiles database back to the LDAP directory.

process\_tds\_changes
:   Synchronize LDAP directory changes with the Profiles database when your LDAP directory type is IBM Tivoli® Directory Integrator. This batch file is stored in the solution-dir/Samples directory.

    **Note:** The sync\_all\_dns script is recommended when you want to synchronize changes in the LDAP directory with the Profiles database.

sync\_all\_dns
:   Update the Profiles database to capture changes to the LDAP directory. This synchronization process includes updates to employee records and additions and deletions of records.

tdienv
:   Set the correct environment for Tivoli Directory Integrator. This batch file sets the path to the Tivoli Directory Integrator program, the Tivoli Directory Integrator host, and the Tivoli Directory Integrator port. If you installed Tivoli Directory Integrator to a custom location, modify the path to that location before using this batch file.

**Parent topic:**[Manually populating the Profiles database](../install/t_prof_populate_manual.md)

**Related information**  


[Updating Profiles when changing LDAP directory](../admin/t_admin_profiles_change_ldaps.md)

[Synchronizing IBM Tivoli Security Directory Server and Microsoft Active Directory LDAP changes](../admin/t_admin_profiles_sync_ldap_tdi_ad.md)

[Deleting or inactivating users in the Profiles database](../admin/t_admin_profiles_delete_users.md)

